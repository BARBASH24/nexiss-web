import React, { useState } from 'react'
import { Header } from '../widgets/Header'
import { Hero } from '../widgets/Hero'
import { Footer } from '../widgets/Footer'
import { KeyBenefits } from '../widgets/KeyBenefits'

const InterfaceDemo: React.FC = () => {
  return (
    <section 
      id="interface"
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
        <div className="text-center max-w-4xl mx-auto mb-8 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-none mb-2 tracking-tighter">
            <div>ВСЁ ДЛЯ ЗАПУСКА И ОТЛАДКИ</div>
            <div className="text-white/20">В ОДНОМ ОКНЕ</div>
          </h2>
          <p className="text-base sm:text-lg text-white/50 mt-4">
            Редактор, терминал и помощник работают вместе, чтобы проект запускался без лишней боли
          </p>
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
    { name: 'Алексей Петров', role: 'ML Engineer', company: 'Yandex', text: 'Наконец-то IDE, который понимает Python. Больше не нужно гуглить каждую ошибку.', rating: 5 },
    { name: 'Мария Иванова', role: 'Data Scientist', company: 'Сбер', text: 'Запуск проектов стал проще. Помощник действительно помогает, а не мешает.', rating: 5 },
    { name: 'Дмитрий Соколов', role: 'Python Developer', company: 'VK', text: 'Отличная идея. Жду полноценный релиз, чтобы перейти полностью.', rating: 5 },
    { name: 'Елена Смирнова', role: 'Tech Lead', company: 'Ozon', text: 'Команда тестирует NEXISS. Нравится подход к диагностике ошибок.', rating: 5 },
    { name: 'Игорь Волков', role: 'AI Researcher', company: 'МТС', text: 'Для ML-проектов очень удобно. Интеграция с PyTorch работает хорошо.', rating: 5 },
    { name: 'Анна Кузнецова', role: 'Junior Developer', company: 'Тинькофф', text: 'Как начинающему разработчику мне очень помогает. Объяснения понятные.', rating: 5 }
  ]

  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <section 
      id="testimonials"
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none mb-6 tracking-tighter">
            <div>ИМ НРАВИТСЯ</div>
            <div className="text-white/20">NEXISS</div>
          </h2>
        </div>

        {/* Карусель */}
        <div className="relative mb-12 overflow-hidden">
          <div className="flex gap-6 animate-scroll pl-6">
            {allTestimonials.map((t, i) => (
              <div key={i} className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px]">
                <div className="relative bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl hover:bg-white/10 hover:border-white/30 transition-all duration-500 h-full">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <svg key={j} className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 group-hover:text-white transition-all" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">"{t.text}"</p>
                  <div className="h-px bg-white/20 mb-3"></div>
                  <div className="text-base sm:text-lg font-black mb-1">{t.name}</div>
                  <div className="text-xs sm:text-sm text-white/40">{t.role}</div>
                  <div className="text-xs sm:text-sm text-white/30 font-mono">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 max-w-4xl mx-auto px-6">
          {[
            { label: 'Ранняя версия' },
            { label: 'Активная разработка' },
            { label: 'Быстрая поддержка' }
          ].map((s, i) => (
            <div key={i} className="text-center group cursor-pointer">
              <div className="text-base sm:text-lg text-white/60 group-hover:text-white transition-colors uppercase tracking-wider font-bold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const AboutNexiss: React.FC = () => {
  const features = [
    { 
      title: 'Диагностика ошибок', 
      desc: 'Объясняет, почему код не работает, прямо в приложении',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    { 
      title: 'Исправление кода', 
      desc: 'Предлагает рабочие решения вместо поиска в интернете',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      title: 'Запуск в один клик', 
      desc: 'Без ручных команд и сложной настройки окружения',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      title: 'Контроль окружения', 
      desc: 'Показывает версию Python и установленные библиотеки',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      title: 'Готовые шаблоны', 
      desc: 'Для быстрого старта новых проектов',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      title: 'Встроенный терминал', 
      desc: 'Всё в одном окне — редактор, терминал и помощник',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <section 
      id="about"
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden py-12"
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

      <div className="relative w-full container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-none mb-6 tracking-tighter">
            ЧТО ТАКОЕ <span className="text-white/20">NEXISS</span>
          </h2>
          <div className="h-px w-full bg-white/10 mb-8"></div>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            NEXISS — это среда разработки для Python, которая помогает запускать проекты и исправлять ошибки с помощью умного помощника. Вместо поиска решений в интернете — понятные объяснения прямо в приложении.
          </p>
        </div>

        {/* Features list */}
        <div className="max-w-5xl mx-auto space-y-6">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="group flex items-start gap-6 hover:translate-x-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-white/40 group-hover:text-white transition-colors duration-300 flex-shrink-0 mt-1">
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-baseline gap-4 mb-2">
                  <h3 className="text-xl sm:text-2xl font-black group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <div className="flex-1 h-px bg-white/10 group-hover:bg-white/30 transition-colors"></div>
                </div>
                <p className="text-sm sm:text-base text-white/50 group-hover:text-white/70 leading-relaxed transition-colors">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Что такое NEXISS?',
      answer: 'NEXISS — это среда разработки для Python, которая помогает запускать проекты и исправлять ошибки с помощью умного помощника. Вместо поиска решений в интернете — понятные объяснения прямо в приложении.'
    },
    {
      question: 'Для кого создан NEXISS?',
      answer: 'NEXISS создан для Python-разработчиков и специалистов по машинному обучению, которые хотят меньше времени тратить на настройку окружения и исправление ошибок, и больше — на написание кода.'
    },
    {
      question: 'Чем NEXISS отличается от других IDE?',
      answer: 'NEXISS фокусируется на запуске и отладке Python-проектов. Умный помощник не просто подсказывает код, а объясняет ошибки и предлагает решения, учитывая контекст вашего проекта.'
    },
    {
      question: 'Когда будет доступен NEXISS?',
      answer: 'NEXISS находится в активной разработке. Мы постепенно открываем доступ и собираем обратную связь. Подпишитесь на обновления, чтобы узнать первыми о запуске.'
    },
    {
      question: 'Какие библиотеки поддерживает NEXISS?',
      answer: 'NEXISS поддерживает популярные библиотеки для машинного обучения и анализа данных: PyTorch, TensorFlow, scikit-learn, pandas, NumPy и другие.'
    },
    {
      question: 'Как я могу помочь проекту?',
      answer: 'Вы можете подписаться на обновления, поделиться обратной связью о том, какие функции вам нужны, и рассказать о NEXISS коллегам-разработчикам.'
    }
  ]

  return (
    <section 
      id="faq"
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden py-12"
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

      <div className="relative w-full container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-none mb-4 tracking-tighter">
            <div>ЧАСТО ЗАДАВАЕМЫЕ</div>
            <div className="text-white/20">ВОПРОСЫ</div>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-2 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-250px)]">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="border-b border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left py-4 flex items-center justify-between gap-4 group"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-black group-hover:text-white/70 transition-colors">
                  {faq.question}
                </h3>
                <div className={`text-white/40 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-48 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
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
      <AboutNexiss />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}
