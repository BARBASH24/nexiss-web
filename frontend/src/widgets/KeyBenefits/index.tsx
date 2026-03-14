import React, { useState } from 'react'

export const KeyBenefits: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const benefits = [
    { 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ), 
      title: 'Скорость света', 
      desc: 'AI ускоряет разработку в 10 раз'
    },
    { 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ), 
      title: 'AI внутри', 
      desc: 'Умный ассистент генерирует код'
    },
    { 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ), 
      title: 'На Rust', 
      desc: 'Нулевая задержка, мгновенный отклик'
    },
    { 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ), 
      title: 'Безграничность', 
      desc: 'Тысячи расширений и плагинов'
    }
  ]

  return (
    <section 
      id="benefits"
      className="relative h-screen flex items-center justify-center px-6 bg-black overflow-hidden"
    >
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

      <div className="relative container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-none tracking-tighter mb-2">
            ПОЧЕМУ
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white/20 tracking-tighter">
            NEXISS
          </h3>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <div 
              key={i}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:bg-white/[0.05] hover:border-white/30">
                {/* Icon */}
                <div className="relative z-10 mb-4 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {benefit.icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
