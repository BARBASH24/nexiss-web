import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import passport from 'passport'
import { pool } from '../db/init.js'

const router = express.Router()

// Register
router.post('/register', async (req, res) => {
  const { email, password, name } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  try {
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    
    const result = await pool.query(
      'INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING id, email, name',
      [email, hashedPassword, name || 'User']
    )

    const user = result.rows[0]

    await pool.query(
      'INSERT INTO user_stats (user_id) VALUES ($1)',
      [user.id]
    )

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' })

    res.status(201).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    })
  } catch (err) {
    console.error('Register error:', err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const user = result.rows[0]
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' })

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    })
  } catch (err) {
    console.error('Login error:', err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Google OAuth - Initiate
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

// Google OAuth - Callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async (req, res) => {
    try {
      const token = jwt.sign({ userId: req.user.id }, process.env.JWT_SECRET, { expiresIn: '7d' })
      
      const statsCheck = await pool.query('SELECT * FROM user_stats WHERE user_id = $1', [req.user.id])
      if (statsCheck.rows.length === 0) {
        await pool.query('INSERT INTO user_stats (user_id) VALUES ($1)', [req.user.id])
      }

      res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`)
    } catch (err) {
      console.error('Google callback error:', err)
      res.redirect(`${process.env.FRONTEND_URL}/login?error=auth_failed`)
    }
  }
)

// GitHub OAuth - Initiate
router.get('/github', passport.authenticate('github', {
  scope: ['user:email']
}))

// GitHub OAuth - Callback
router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  async (req, res) => {
    try {
      const token = jwt.sign({ userId: req.user.id }, process.env.JWT_SECRET, { expiresIn: '7d' })
      
      const statsCheck = await pool.query('SELECT * FROM user_stats WHERE user_id = $1', [req.user.id])
      if (statsCheck.rows.length === 0) {
        await pool.query('INSERT INTO user_stats (user_id) VALUES ($1)', [req.user.id])
      }

      res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`)
    } catch (err) {
      console.error('GitHub callback error:', err)
      res.redirect(`${process.env.FRONTEND_URL}/login?error=auth_failed`)
    }
  }
)

export default router
