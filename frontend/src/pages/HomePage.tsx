import React, { useState } from 'react'
import { Header } from '../widgets/Header'
import { Hero } from '../widgets/Hero'
import { Download } from '../widgets/Download'
import { Footer } from '../widgets/Footer'
import { KeyBenefits } from '../widgets/KeyBenefits'

const InterfaceDemo: React.FC = () => {
  return (
    <section 
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
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-6xl font-black leading-none mb-2 tracking-tighter">
            <div>ИНТЕРФЕЙС</div>
            <div className="text-white/20">БУДУЩЕГО</div>
          </h2>
        </div>

        {/* IDE Screenshot */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative bg-black/90 border border-white/20 rounded-xl overflow-hidden shadow-2xl">
              {/* Window controls */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/20 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src="/logo.svg" alt="nexiss" className="w-3 h-3" />
                    <span className="text-xs text-white/80 font-black tracking-wider">NEXISS</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 px-2 py-0.5 bg-white/10 rounded-full">
                    <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-white/60 font-bold">AI</span>
                  </div>
                </div>
              </div>

              {/* IDE Screenshot */}
              <div className="relative">
                <img 
                  src="/ide-screenshot.png" 
                  alt="nexiss IDE Interface" 
                  className="w-full h-auto"
                  onError={(e) => {
                    // Fallback если скриншот не найден
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextElementSibling
                    if (fallback) fallback.classList.remove('hidden')
                  }}
                />
                
                {/* Fallback если скриншот не загрузился */}
                <div className="hidden bg-black/50 backdrop-blur-xl p-16 text-center">
                  <div className="text-white/40 mb-3">
                    Добавьте скриншот IDE:
                  </div>
                  <div className="text-white/60 font-mono text-sm">
                    frontend/public/ide-screenshot.png
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: 'Алексей Петров', role: 'ML Engineer', company: 'Yandex', text: 'nexiss ускорил мою работу в 5 раз. AI ассистент понимает контекст и предлагает именно то, что нужно.', rating: 5 },
    { name: 'Мария Иванова', role: 'Data Scientist', company: 'Сбер', text: 'Лучший IDE для ML разработки. Интеграция с PyTorch и TensorFlow работает безупречно.', rating: 5 },
    { name: 'Дмитрий Соколов', role: 'Senior Developer', company: 'VK', text: 'Производительность на Rust чувствуется сразу. Никаких лагов, только чистая скорость.', rating: 5 },
    { name: 'Елена Смирнова', role: 'Tech Lead', company: 'Ozon', text: 'Команда перешла на nexiss и продуктивность выросла на 40%. Лучшее решение для ML проектов.', rating: 5 },
    { name: 'Игорь Волков', role: 'AI Researcher', company: 'МТС', text: 'Наконец-то IDE, который понимает специфику ML разработки. AI помощник просто невероятный.', rating: 5 },
    { name: 'Анна Кузнецова', role: 'Python Developer', company: 'Тинькофф', text: 'Скорость работы поражает. Rust действительно делает свое дело. Рекомендую всем.', rating: 5 }
  ]

  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
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

      <div className="relative w-full py-20">
        <div className="text-center max-w-4xl mx-auto mb-16 px-6">
          <h2 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tighter">
            <div>ИМ НРАВИТСЯ</div>
            <div className="text-white/20">NEXISS</div>
          </h2>
        </div>

        {/* Карусель */}
        <div className="relative mb-12 overflow-hidden">
          <div className="flex gap-6 animate-scroll pl-6">
            {allTestimonials.map((t, i) => (
              <div key={i} className="group relative flex-shrink-0 w-[350px]">
                <div className="relative bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-white/30 transition-all duration-500 h-full">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-white/60 group-hover:text-white transition-all" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/70 text-base leading-relaxed mb-6">"{t.text}"</p>
                  <div className="h-px bg-white/20 mb-3"></div>
                  <div className="text-lg font-black mb-1">{t.name}</div>
                  <div className="text-sm text-white/40">{t.role}</div>
                  <div className="text-sm text-white/30 font-mono">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto px-6">
          {[
            { value: '50K+', label: 'Разработчиков' },
            { value: '4.9/5', label: 'Средняя оценка' },
            { value: '99%', label: 'Рекомендуют' }
          ].map((s, i) => (
            <div key={i} className="text-center group cursor-pointer">
              <div className="text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">{s.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <InterfaceDemo />
      <KeyBenefits />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  )
}
