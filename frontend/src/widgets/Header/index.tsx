import React, { useState, useEffect } from 'react'

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

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
    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
  }, [menuOpen])

  const navSections = [
    {
      label: 'Интерфейс',
      items: [
        { path: '#interface', label: 'Всё в одном окне' }
      ]
    },
    {
      label: 'О NEXISS',
      items: [
        { path: '#about', label: 'Что такое NEXISS' }
      ]
    },
    {
      label: 'Отзывы',
      items: [
        { path: '#testimonials', label: 'Что говорят пользователи' }
      ]
    },
    {
      label: 'FAQ',
      items: [
        { path: '#faq', label: 'Часто задаваемые вопросы' }
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
        style={{ paddingRight: menuOpen ? `${window.innerWidth - document.documentElement.clientWidth}px` : '0px' }}
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="relative group flex items-center space-x-3">
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
            </a>

            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setMenuOpen(true)}
                className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-white/80 hover:text-white transition-all"
              >
                Меню
              </button>
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
              <a href="#" onClick={() => setMenuOpen(false)} className="flex items-center space-x-3">
                <img src="/logo.svg" alt="nexiss" className="w-10 h-10" />
                <span className="text-2xl font-black tracking-tighter">NEXISS</span>
              </a>

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
                        <a
                          href={item.path}
                          onClick={() => setMenuOpen(false)}
                          className="text-xl font-bold hover:text-white transition-colors text-white/60"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
