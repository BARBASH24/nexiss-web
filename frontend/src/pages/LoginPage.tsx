import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../services/api'

export const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isLogin) {
        await api.login(email, password)
      } else {
        await api.register(email, password, name)
      }
      navigate('/dashboard')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3001/api/auth/google'
  }

  const handleGitHubLogin = () => {
    window.location.href = 'http://localhost:3001/api/auth/github'
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center space-x-3 mb-16 group">
          <img 
            src="/logo.svg" 
            alt="nexiss" 
            className="w-10 h-10 transition-transform group-hover:scale-110" 
          />
          <span className="text-3xl font-black tracking-tighter">NEXISS</span>
        </Link>

        {/* Form container */}
        <div className="bg-white/[0.02] backdrop-blur-xl border-2 border-white/10 p-10 rounded-3xl">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-3">
              <h1 className="text-5xl font-black uppercase tracking-tighter">
                {isLogin ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}
              </h1>
              <p className="text-xs text-white/40 uppercase tracking-wider">
                {isLogin ? 'Войдите в свой аккаунт' : 'Создайте новый аккаунт'}
              </p>
            </div>

            {/* Error message */}
            {error && (
              <div className="border-2 border-white/20 bg-white/5 p-4 rounded-2xl">
                <p className="text-white/80 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* OAuth Buttons */}
            <div className="space-y-3">
              {/* Google Login */}
              <button
                onClick={handleGoogleLogin}
                className="w-full bg-white/5 border-2 border-white/10 px-6 py-4 font-bold hover:bg-white/10 hover:border-white/20 transition-all rounded-2xl flex items-center justify-center space-x-3 group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="uppercase tracking-wider text-sm">Войти через Google</span>
              </button>

              {/* GitHub Login */}
              <button
                onClick={handleGitHubLogin}
                className="w-full bg-white/5 border-2 border-white/10 px-6 py-4 font-bold hover:bg-white/10 hover:border-white/20 transition-all rounded-2xl flex items-center justify-center space-x-3 group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="uppercase tracking-wider text-sm">Войти через GitHub</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black px-4 text-white/40 tracking-wider">или</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase tracking-wider text-white/60">
                    Имя
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-all rounded-2xl placeholder:text-white/30"
                    placeholder="Ваше имя"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-wider text-white/60">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-all rounded-2xl placeholder:text-white/30"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-wider text-white/60">
                  Пароль
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-all rounded-2xl placeholder:text-white/30"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black px-6 py-4 font-black hover:bg-white/90 transition-all disabled:opacity-50 uppercase tracking-wider rounded-full text-sm hover:scale-105 duration-300"
              >
                {loading ? 'ЗАГРУЗКА...' : isLogin ? 'ВОЙТИ' : 'ЗАРЕГИСТРИРОВАТЬСЯ'}
              </button>
            </form>

            {/* Toggle */}
            <div className="text-center pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setIsLogin(!isLogin)
                  setError('')
                }}
                className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-wider font-bold"
              >
                {isLogin ? 'Создать аккаунт →' : '← Уже есть аккаунт'}
              </button>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-8">
          <Link 
            to="/" 
            className="text-sm text-white/40 hover:text-white transition-colors uppercase tracking-wider font-bold inline-flex items-center space-x-2 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>На главную</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
