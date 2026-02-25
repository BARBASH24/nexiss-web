import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
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

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Main content */}
        <div className="max-w-7xl mx-auto">
          {/* Main heading */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
                  <div className="overflow-hidden">
                    <div className="animate-slide-up">NEXISS</div>
                  </div>
                </h1>
                
                <div className="flex items-center space-x-4">
                  <div className="h-px flex-1 bg-white/20"></div>
                  <span className="text-xl sm:text-2xl font-light text-white/40 tracking-widest">IDE</span>
                  <div className="h-px flex-1 bg-white/20"></div>
                </div>
              </div>

              {/* Subtitle */}
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
                <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/80 leading-relaxed">
                  Python, который запускается
                  <br />
                  с первого раза
                </p>
                <p className="text-lg sm:text-xl text-white/50">
                  Среда разработки с умным помощником для запуска и исправления ошибок
                </p>
              </div>

              {/* Features list */}
              <div 
                className="flex flex-col sm:flex-row gap-4 animate-fade-in"
                style={{ animationDelay: '0.5s', opacity: 0 }}
              >
                <a 
                  href="#download"
                  className="group relative px-10 py-5 bg-white text-black text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">СКАЧАТЬ БЕСПЛАТНО</span>
                  <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-2xl"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    СКАЧАТЬ БЕСПЛАТНО
                  </span>
                </a>
              </div>

              {/* Features list */}
              <div 
                className="flex flex-wrap gap-6 text-sm text-white/40 animate-fade-in"
                style={{ animationDelay: '0.7s', opacity: 0 }}
              >
                {['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'pandas', 'NumPy'].map((tech, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                    <span className="uppercase tracking-wider">{tech}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/40 mt-4">
                Работа с локальными проектами без сложной настройки
              </p>
            </div>

            {/* Right side - Brutalist geometric design */}
            <div 
              className="relative animate-fade-in hidden lg:block"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              <div className="relative h-full flex items-center justify-center">
                {/* Giant numbers */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[20rem] font-black leading-none text-white/5 select-none tracking-tighter">
                    01
                  </div>
                </div>

                {/* Geometric shapes */}
                <div className="relative z-10 space-y-6">
                  {/* Top shape */}
                  <div className="relative group">
                    <div className="w-64 h-64 border-4 border-white/20 rounded-3xl transform rotate-12 group-hover:rotate-6 transition-transform duration-700"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-7xl font-black mb-2">AI</div>
                        <div className="text-sm text-white/40 uppercase tracking-[0.3em]">Powered</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom shapes */}
                  <div className="flex space-x-6">
                    <div className="relative group">
                      <div className="w-28 h-28 border-4 border-white/20 transform -rotate-6 group-hover:rotate-0 transition-transform duration-700"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-3xl font-black">10x</div>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <div className="w-28 h-28 border-4 border-white/20 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-3xl font-black">∞</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating lines */}
                <div className="absolute top-1/4 right-0 w-32 h-px bg-white/20 animate-pulse"></div>
                <div className="absolute bottom-1/4 left-0 w-24 h-px bg-white/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
