import React, { useState, useEffect } from 'react'

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(scrollPercent, 100))
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            {/* Logo */}
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
          
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="#download"
                className="relative group overflow-hidden bg-white text-black px-6 py-3 rounded-2xl"
              >
                <span className="relative z-10 text-sm font-bold uppercase tracking-wider">
                  Скачать
                </span>
                <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-2xl"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-sm font-bold uppercase tracking-wider">
                  Скачать
                </span>
              </a>
            </div>

            {/* Mobile menu button */}
            <a
              href="#download"
              className="lg:hidden px-6 py-3 bg-white text-black font-bold rounded-2xl text-sm uppercase tracking-wider"
            >
              Скачать
            </a>
          </div>
        </nav>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-px bg-white/10 w-full">
          <div 
            className="h-full bg-white transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </header>
    </>
  )
}
