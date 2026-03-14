import React from 'react'

export const Download: React.FC = () => {
  return (
    <section 
      id="download"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-20"
    >
      <div className="relative w-full container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-sm sm:text-base text-black/40 uppercase tracking-widest mb-4 font-bold">
            СКАЧАТЬ
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter">
            <div className="text-black">НАЧНИТЕ</div>
            <div className="text-gray-300">СЕГОДНЯ</div>
          </h2>
        </div>

        {/* Download Cards */}
        <div className="max-w-md mx-auto">
          {/* Windows Card */}
          <div className="group relative">
            <div className="relative bg-black border-2 border-white rounded-3xl p-8 hover:bg-white hover:border-black transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center min-h-[280px]">
              {/* Icon */}
              <div className="mb-6 text-white group-hover:text-black transition-colors">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-black mb-4 text-white group-hover:text-black transition-colors">
                Windows
              </h3>
              
              {/* Version */}
              <p className="text-sm text-white/40 group-hover:text-black/40 transition-colors mb-2 font-mono">
                v1.0.0
              </p>
              
              {/* Download text */}
              <p className="text-xs text-white/30 group-hover:text-black/50 transition-colors uppercase tracking-wider font-bold">
                ДЛЯ ПОЛЬЗОВАТЕЛЕЙ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
