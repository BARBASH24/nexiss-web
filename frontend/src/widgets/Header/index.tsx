import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { api } from '../../services/api'

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(scrollPercent, 100))
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsAuthenticated(api.isAuthenticated())
  }, [location])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const navSections = [
    {
      label: 'Продукт',
      items: [
        { path: '/download', label: 'Скачать' },
        { path: '/features', label: 'Возможности' }
      ]
    },
    {
      label: 'Документация',
      items: [
        { path: '/docs', label: 'Документация' },
        { path: '/pricing', label: 'Цены' },
        { path: '/updates', label: 'Обновления' }
      ]
    },
    {
      label: 'Ресурсы',
      items: [
        { path: '/api', label: 'API Reference' },
        { path: '/tutorials', label: 'Туториалы' },
        { path: '/community', label: 'Сообщество' },
        { path: '/blog', label: 'Блог' },
        { path: '/support', label: 'Поддержка' }
      ]
    },
    {
      label: 'Компания',
      items: [
        { path: '/about', label: 'О нас' },
        { path: '/careers', label: 'Карьера' },
        { path: '/contact', label: 'Контакты' },
        { path: '/press', label: 'Пресса' },
        { path: '/partners', label: 'Партнеры' }
      ]
    }
  ]

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-2xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="relative group flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/logo.svg" 
                  alt="nexiss" 
                  className="w-10 h-10 transition-all duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-300 rounded-2xl"></div>
              </div>
              <div className="relative overflow-hidden">
                <span className="text-2xl font-black tracking-tighter block transition-transform duration-300 group-hover:-translate-y-full">
                  NEXISS
                </span>
                <span className="text-2xl font-black tracking-tighter block absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
                  NEXISS
                </span>
              </div>
            </Link>
          
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setMenuOpen(true)}
                className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-white/80 hover:text-white transition-all"
              >
                Меню
              </button>
              
              {isAuthenticated ? (
                <Link 
                  to="/dashboard"
                  className="relative group overflow-hidden px-6 py-3 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all"
                >
                  <span className="relative z-10 text-sm font-bold uppercase tracking-wider text-white">
                    Профиль
                  </span>
                </Link>
              ) : (
                <>
                  <Link 
                    to="/login"
                    className="relative group overflow-hidden px-6 py-3 rounded-2xl border border-white/10 hover:border-white/30 transition-all"
                  >
                    <span className="relative z-10 text-sm font-bold uppercase tracking-wider text-white/80 group-hover:text-white transition-colors">
                      Войти
                    </span>
                  </Link>
                  
                  <Link 
                    to="/download"
                    className="relative group overflow-hidden bg-white text-black px-6 py-3 rounded-2xl"
                  >
                    <span className="relative z-10 text-sm font-bold uppercase tracking-wider">
                      Скачать
                    </span>
                    <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-2xl"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-sm font-bold uppercase tracking-wider">
                      Скачать
                    </span>
                  </Link>
                </>
              )}
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
            >
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 h-px bg-white/10 w-full">
          <div 
            className="h-full bg-white transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </header>

      <div 
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        ></div>

        <div className={`relative h-full overflow-y-auto transition-transform duration-500 ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between mb-16">
              <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center space-x-3">
                <img src="/logo.svg" alt="nexiss" className="w-10 h-10" />
                <span className="text-2xl font-black tracking-tighter">NEXISS</span>
              </Link>
              
              <button
                onClick={() => setMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-12 mb-16">
              {navSections.map((section, idx) => (
                <div 
                  key={section.label} 
                  className="space-y-6"
                  style={{
                    animation: menuOpen ? `fadeInUp 0.5s ease-out ${idx * 0.1}s forwards` : 'none',
                    opacity: 0
                  }}
                >
                  <h3 className="text-sm font-black uppercase tracking-widest text-white/40">
                    {section.label}
                  </h3>
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={() => setMenuOpen(false)}
                          className={`text-2xl font-bold hover:text-white transition-colors ${
                            location.pathname === item.path ? 'text-white' : 'text-white/60'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              {isAuthenticated ? (
                <Link 
                  to="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="text-center bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all rounded-2xl"
                >
                  Профиль
                </Link>
              ) : (
                <>
                  <Link 
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="text-center border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white/5 transition-all rounded-2xl"
                  >
                    Войти
                  </Link>
                  <Link 
                    to="/download"
                    onClick={() => setMenuOpen(false)}
                    className="text-center bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white/90 transition-all rounded-2xl"
                  >
                    Скачать
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
