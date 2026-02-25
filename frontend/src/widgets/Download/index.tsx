import React, { useState } from 'react'

export const Download: React.FC = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null)

  return (
    <section id="download" className="relative min-h-screen flex items-center justify-center px-6 bg-white text-black overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative container mx-auto max-w-7xl py-20">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Heading */}
          <div className="space-y-6">
            <div className="inline-block">
              <div className="text-sm text-black/40 uppercase tracking-[0.3em] mb-4">Скачать</div>
              <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-4">
                <div>НАЧНИТЕ</div>
                <div className="text-black/20">СЕГОДНЯ</div>
              </h2>
              <div className="flex items-center justify-center space-x-4">
                <div className="h-px w-20 bg-black/20"></div>
                <div className="w-2 h-2 bg-black/40 rounded-full"></div>
                <div className="h-px w-20 bg-black/20"></div>
              </div>
            </div>
          </div>

          <p className="text-xl text-black/60 max-w-2xl mx-auto font-light">
            Бесплатно. Навсегда. Для всех платформ.
          </p>

          {/* Download buttons */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { os: 'Windows', icon: '⊞', size: '125 MB', users: '25K+' },
              { os: 'macOS', icon: '⌘', size: '118 MB', users: '18K+' },
              { os: 'Linux', icon: '◆', size: '122 MB', users: '7K+' }
            ].map((platform, i) => (
              <button
                key={i}
                onMouseEnter={() => setHoveredPlatform(i)}
                onMouseLeave={() => setHoveredPlatform(null)}
                className="group relative bg-black text-white p-8 hover:scale-105 transition-all duration-500 overflow-hidden rounded-3xl border-2 border-black hover:border-black/80"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-black/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {platform.icon}
                  </div>
                  <div>
                    <div className="text-xl font-black mb-1">{platform.os}</div>
                    <div className="text-sm text-white/40">{platform.size}</div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-white/40 transition-all duration-700 ${
                        hoveredPlatform === i ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                  
                  <div className="text-xs text-white/30 uppercase tracking-wider">
                    {platform.users} пользователей
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-3xl"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 space-y-2">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="text-black font-black text-lg">СКАЧАТЬ</span>
                </div>
              </button>
            ))}
          </div>

          {/* System requirements */}
          <div className="pt-4 space-y-2">
            <div className="inline-flex items-center space-x-3 px-5 py-2 bg-black/5 rounded-full">
              <svg className="w-4 h-4 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-black/60">4GB RAM • 500MB свободного места • Python 3.8+</span>
            </div>
            <p className="text-xs text-black/30">Версия 1.0.0 • Обновлено 15 февраля 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}
