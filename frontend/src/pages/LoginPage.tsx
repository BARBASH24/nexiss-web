import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const LoginPage: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showForgotModal, setShowForgotModal] = useState(false)
  const [showEmailVerification, setShowEmailVerification] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (showForgotModal) {
        // Mock forgot password
        await new Promise(resolve => setTimeout(resolve, 1000))
        setError('Ссылка для восстановления отправлена на ' + email)
        setTimeout(() => {
          setShowForgotModal(false)
          setError('')
        }, 2000)
      } else if (isRegister) {
        // Mock register - show email verification
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsRegister(false)
        setShowEmailVerification(true)
      } else {
        // Mock login - redirect to profile
        await new Promise(resolve => setTimeout(resolve, 1000))
        navigate('/profile')
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    // Mock login - redirect to profile
    navigate('/profile')
  }

  const handleGitHubLogin = () => {
    // Mock login - redirect to profile
    navigate('/profile')
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left side - Logo */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
        </div>

        <img 
          src="/logo.svg" 
          alt="nexiss" 
          className="w-[500px] h-[500px] relative z-10" 
        />
      </div>

      {/* Right side - Auth */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center mb-12">
            <img src="/logo.svg" alt="nexiss" className="w-16 h-16" />
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-5xl sm:text-6xl font-black mb-4 tracking-tighter">
                НАЧНИТЕ
              </h1>
              <h2 className="text-5xl sm:text-6xl font-black mb-4 tracking-tighter text-white/30">
                РАЗРАБОТКУ
              </h2>
              <h3 className="text-4xl sm:text-5xl font-black mb-8 tracking-tighter">
                С NEXISS
              </h3>
              <p className="text-xl font-bold mb-8">Присоединяйтесь сегодня.</p>
            </div>

            <div className="space-y-4">
              {/* Google */}
              <button
                onClick={handleGoogleLogin}
                className="w-full bg-white text-black px-6 py-3 font-bold hover:bg-white/90 transition-all rounded-full flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Регистрация с помощью Google</span>
              </button>

              {/* GitHub */}
              <button
                onClick={handleGitHubLogin}
                className="w-full bg-white text-black px-6 py-3 font-bold hover:bg-white/90 transition-all rounded-full flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>Регистрация с помощью GitHub</span>
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-black px-4 text-white/40">ИЛИ</span>
                </div>
              </div>

              {/* Register button */}
              <button
                onClick={() => setIsRegister(true)}
                className="w-full bg-white text-black px-6 py-3 font-bold hover:bg-white/90 transition-all rounded-full"
              >
                Зарегистрироваться
              </button>

              <p className="text-xs text-white/40 leading-relaxed">
                Регистрируясь, вы соглашаетесь с{' '}
                <Link to="/terms" className="text-white/60 hover:text-white hover:underline">
                  Условиями предоставления услуг
                </Link>
                {' '}и{' '}
                <Link to="/privacy" className="text-white/60 hover:text-white hover:underline">
                  Политикой конфиденциальности
                </Link>
                .
              </p>
            </div>

            <div className="pt-8">
              <p className="text-lg font-bold mb-4">Уже зарегистрированы?</p>
              <button
                onClick={() => {
                  setIsRegister(false)
                  setShowLoginModal(true)
                }}
                className="w-full bg-transparent border border-white/20 text-white px-6 py-3 font-bold hover:bg-white/10 transition-all rounded-full"
              >
                Войти
              </button>
            </div>
          </div>

          {/* Back to home */}
          <div className="mt-12 text-center">
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

      {/* Login Modal */}
      {(showLoginModal || isRegister) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => {
              setShowLoginModal(false)
              setIsRegister(false)
              setError('')
            }}
          ></div>

          <div className="relative bg-black border border-white/20 rounded-3xl w-full max-w-md p-8 max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => {
                setShowLoginModal(false)
                setIsRegister(false)
                setError('')
              }}
              className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img src="/logo.svg" alt="nexiss" className="w-10 h-10" />
            </div>

            <h2 className="text-3xl font-black mb-8 text-center">
              {isRegister ? 'Создайте аккаунт' : 'Вход в NEXISS'}
            </h2>

            {error && (
              <div className="border border-white/20 bg-white/5 p-4 rounded-2xl mb-6">
                <p className="text-white/80 text-sm font-medium text-center">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {isRegister && (
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-all rounded-lg placeholder:text-white/40"
                    placeholder="Имя"
                    required={isRegister}
                  />
                </div>
              )}

              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-all rounded-lg placeholder:text-white/40"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-all rounded-lg placeholder:text-white/40"
                  placeholder="Пароль"
                  required
                />
              </div>

              {!isRegister && (
                <button
                  type="button"
                  onClick={() => {
                    setShowLoginModal(false)
                    setShowForgotModal(true)
                  }}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Забыли пароль?
                </button>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black px-6 py-3 font-bold hover:bg-white/90 transition-all disabled:opacity-50 rounded-full"
              >
                {loading ? 'ЗАГРУЗКА...' : isRegister ? 'Далее' : 'Войти'}
              </button>
            </form>

            {!isRegister && (
              <div className="mt-8 text-center">
                <p className="text-white/60">
                  Нет учетной записи?{' '}
                  <button
                    onClick={() => setIsRegister(true)}
                    className="text-white hover:underline"
                  >
                    Зарегистрируйтесь
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => {
              setShowForgotModal(false)
              setError('')
            }}
          ></div>

          <div className="relative bg-black border border-white/20 rounded-3xl w-full max-w-md p-8">
            {/* Close button */}
            <button
              onClick={() => {
                setShowForgotModal(false)
                setError('')
              }}
              className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img src="/logo.svg" alt="nexiss" className="w-10 h-10" />
            </div>

            <h2 className="text-3xl font-black mb-4 text-center">
              Восстановление пароля
            </h2>
            <p className="text-white/60 text-center mb-8">
              Введите email для восстановления доступа
            </p>

            {error && (
              <div className="border border-white/20 bg-white/5 p-4 rounded-2xl mb-6">
                <p className="text-white/80 text-sm font-medium text-center">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-all rounded-lg placeholder:text-white/40"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black px-6 py-3 font-bold hover:bg-white/90 transition-all disabled:opacity-50 rounded-full"
              >
                {loading ? 'ОТПРАВКА...' : 'Отправить ссылку'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setShowForgotModal(false)
                  setShowLoginModal(true)
                }}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                ← Назад ко входу
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Verification Modal */}
      {showEmailVerification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => {
              setShowEmailVerification(false)
              setEmail('')
              setPassword('')
              setName('')
            }}
          ></div>

          <div className="relative bg-black border border-white/20 rounded-3xl w-full max-w-md p-8">
            {/* Close button */}
            <button
              onClick={() => {
                setShowEmailVerification(false)
                setEmail('')
                setPassword('')
                setName('')
              }}
              className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Email icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-4 text-center">
              Подтвердите email
            </h2>
            
            <p className="text-white/80 text-center mb-2">
              Мы отправили письмо на адрес:
            </p>
            
            <p className="text-white font-bold text-center mb-6">
              {email}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-2"></div>
                <p className="text-white/70 text-sm">
                  Откройте письмо в вашей почте
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-2"></div>
                <p className="text-white/70 text-sm">
                  Нажмите на ссылку подтверждения
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-2"></div>
                <p className="text-white/70 text-sm">
                  Начните работу с NEXISS
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                // Mock resend email
                setError('Письмо отправлено повторно')
                setTimeout(() => setError(''), 3000)
              }}
              className="w-full bg-white text-black px-6 py-3 font-bold hover:bg-white/90 transition-all rounded-full mb-4"
            >
              Отправить письмо повторно
            </button>

            {error && (
              <div className="border border-white/20 bg-white/5 p-3 rounded-2xl">
                <p className="text-white/80 text-sm font-medium text-center">{error}</p>
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm">
                Не получили письмо? Проверьте папку "Спам"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
