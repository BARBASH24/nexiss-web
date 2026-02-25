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
        <div className="mb-20 overflow-hidden text-center">
          <h2 
            className="text-[8rem] md:text-[12rem] lg:text-[14rem] font-black text-center leading-none tracking-tighter select-none"
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
          
          <div className="flex items-center justify-center space-x-6 mt-8">
            <div className="h-px w-24 bg-white/20"></div>
            <p className="text-sm text-white/40 uppercase tracking-[0.3em]">IDE нового поколения</p>
            <div className="h-px w-24 bg-white/20"></div>
          </div>
        </div>
        
        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          
          {/* Brand section */}
          <div className="space-y-6">
            <p className="text-base text-white/50 leading-relaxed max-w-sm">
              Создано на Rust с AI технологиями для максимальной производительности
            </p>

            {/* Social */}
            <div className="flex space-x-3">
              {[
                { name: 'GitHub', icon: 'GH' },
                { name: 'Twitter', icon: 'TW' },
                { name: 'Discord', icon: 'DC' },
                { name: 'LinkedIn', icon: 'LI' }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="group relative w-10 h-10 border border-white/10 flex items-center justify-center hover:border-white/30 transition-all rounded-2xl overflow-hidden"
                  title={social.name}
                >
                  <span className="relative z-10 text-xs font-black text-white/40 group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                  <div className="absolute inset-0 bg-white/5 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white/30">
              Контакты
            </h4>
            <div className="space-y-2">
              <a href="mailto:hello@nexiss.dev" className="block text-sm text-white/50 hover:text-white transition-colors">
                hello@nexiss.dev
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
