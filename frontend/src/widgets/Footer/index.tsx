import React, { useState } from 'react'

export const Footer: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height
    })
  }

  return (
    <footer 
      className="relative bg-black text-white overflow-hidden border-t border-white/10"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px) scale(1.1)`
          }}
        />
      </div>

      <div className="relative container mx-auto max-w-7xl px-6 py-20">
        
        {/* Giant animated NEXISS */}
        <div className="mb-20 overflow-hidden text-center px-4">
          <h2 
            className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] font-black text-center leading-none tracking-tighter select-none"
            style={{
              transform: `perspective(1000px) rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <span className="inline-block hover:text-white/50 transition-colors duration-300">N</span>
            <span className="inline-block hover:text-white/50 transition-colors duration-300">E</span>
            <span className="inline-block hover:text-white/50 transition-colors duration-300">X</span>
            <span className="inline-block hover:text-white/50 transition-colors duration-300">I</span>
            <span className="inline-block hover:text-white/50 transition-colors duration-300">S</span>
            <span className="inline-block hover:text-white/50 transition-colors duration-300">S</span>
          </h2>
          
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 mt-8">
            <div className="h-px w-12 sm:w-24 bg-white/20"></div>
            <p className="text-xs sm:text-sm text-white/40 uppercase tracking-[0.2em] sm:tracking-[0.3em]">IDE нового поколения</p>
            <div className="h-px w-12 sm:w-24 bg-white/20"></div>
          </div>
        </div>
        
        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          
          {/* Brand section */}
          <div className="space-y-6">
            <p className="text-base text-white/50 leading-relaxed max-w-sm">
              Создано на Rust с AI технологиями для максимальной производительности
            </p>

            {/* Social - Telegram */}
            <div className="flex space-x-3">
              <a
                href="https://t.me/nexiss_official"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 border border-white/10 flex items-center justify-center hover:border-white/30 transition-all rounded-2xl overflow-hidden"
                title="Telegram"
              >
                <svg className="relative z-10 w-6 h-6 text-white/40 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.094.036.308.02.475z"/>
                </svg>
                <div className="absolute inset-0 bg-white/5 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white/30">
              Контакты
            </h4>
            <div className="space-y-2">
              <a href="mailto:nexisshelper@gmail.com" className="block text-sm text-white/50 hover:text-white transition-colors">
                nexisshelper@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <div className="flex items-center gap-4">
              <span>© 2026 nexiss</span>
            </div>
            <div className="font-mono text-white/20">
              Made with AI • Powered by Rust
            </div>
          </div>
        </div>
      </div>

      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-white/5"></div>
      <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-white/5"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-white/5"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-white/5"></div>
    </footer>
  )
}
