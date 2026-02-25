import express from 'express'
import { pool } from '../db/init.js'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

// Get user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, email, name, plan, created_at FROM users WHERE id = $1',
      [req.userId]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json(result.rows[0])
  } catch (err) {
    console.error('Get profile error:', err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Get user stats
router.get('/stats', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT coding_hours, projects_count, ai_requests FROM user_stats WHERE user_id = $1',
      [req.userId]
    )

    if (result.rows.length === 0) {
      return res.json({ coding_hours: 0, projects_count: 0, ai_requests: 0 })
    }

    res.json(result.rows[0])
  } catch (err) {
    console.error('Get stats error:', err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Update user profile
router.put('/profile', authenticateToken, async (req, res) => {
  const { name, email } = req.body

  try {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING id, email, name, plan',
      [name, email, req.userId]
    )

    res.json(result.rows[0])
  } catch (err) {
    console.error('Update profile error:', err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Upgrade plan
router.post('/upgrade-plan', authenticateToken, async (req, res) => {
  const { plan, paymentMethod } = req.body

  // Validate plan
  const validPlans = ['free', 'pro', 'enterprise']
  if (!validPlans.includes(plan)) {
    return res.status(400).json({ error: 'Invalid plan' })
  }

  try {
    // In production, here you would:
    // 1. Process payment with Stripe/PayPal
    // 2. Verify payment success
    // 3. Update user plan

    // For now, simulate payment processing
    console.log(`Processing payment for user ${req.userId}: ${plan} plan with ${paymentMethod}`)

    // Update user plan
    const result = await pool.query(
      'UPDATE users SET plan = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING id, email, name, plan',
      [plan, req.userId]
    )

    res.json({
      success: true,
      message: `Successfully upgraded to ${plan} plan`,
      user: result.rows[0]
    })
  } catch (err) {
    console.error('Upgrade plan error:', err)
    res.status(500).json({ error: 'Server error' })
  }
})

export default router
