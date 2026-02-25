import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Strategy as GitHubStrategy } from 'passport-github2'
import { pool } from '../db/init.js'

// Google OAuth Strategy
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = profile.emails[0].value
          const name = profile.displayName

          // Check if user exists
          let result = await pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
          )

          let user = result.rows[0]

          if (!user) {
            // Create new user
            result = await pool.query(
              'INSERT INTO users (email, name, password) VALUES ($1, $2, $3) RETURNING *',
              [email, name, 'google-oauth']
            )
            user = result.rows[0]
          }

          return done(null, user)
        } catch (error) {
          return done(error, null)
        }
      }
    )
  )
}

// GitHub OAuth Strategy
if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL,
        scope: ['user:email']
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // GitHub может не возвращать email в profile, нужно взять из emails array
          const email = profile.emails && profile.emails[0] ? profile.emails[0].value : `${profile.username}@github.local`
          const name = profile.displayName || profile.username

          // Check if user exists
          let result = await pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
          )

          let user = result.rows[0]

          if (!user) {
            // Create new user
            result = await pool.query(
              'INSERT INTO users (email, name, password) VALUES ($1, $2, $3) RETURNING *',
              [email, name, 'github-oauth']
            )
            user = result.rows[0]
          }

          return done(null, user)
        } catch (error) {
          return done(error, null)
        }
      }
    )
  )
}

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    done(null, result.rows[0])
  } catch (error) {
    done(error, null)
  }
})

export default passport
