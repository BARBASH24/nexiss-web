import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const AuthCallbackPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const token = searchParams.get('token')
    const error = searchParams.get('error')

    if (token) {
      // Save token to localStorage
      localStorage.setItem('token', token)
      // Redirect to dashboard
      navigate('/dashboard')
    } else if (error) {
      // Redirect to login with error
      navigate('/login?error=' + error)
    } else {
      // No token or error, redirect to login
      navigate('/login')
    }
  }, [searchParams, navigate])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        <p className="mt-4 text-white/60 uppercase tracking-wider text-sm font-bold">
          Авторизация...
        </p>
      </div>
    </div>
  )
}
