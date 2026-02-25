import React from 'react'

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Алексей Петров',
      role: 'ML Engineer',
      company: 'Yandex',
      text: 'nexiss ускорил мою работу в 5 раз. AI ассистент понимает контекст и предлагает именно то, что нужно.',
      rating: 5
    },
    {
      name: 'Мария Иванова',
      role: 'Data Scientist',
      company: 'Сбер',
      text: 'Лучший IDE для ML разработки. Интеграция с PyTorch и TensorFlow работает безупречно.',
      rating: 5
    },
    {
      name: 'Дмитрий Соколов',
      role: 'Senior Developer',
      company: 'VK',
      text: 'Производительность на Rust чувствуется сразу. Никаких лагов, только чистая скорость.',
      rating: 5
    }
  ]

  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative container mx-auto max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-7xl md:text-9xl font-black leading-none mb-8 tracking-tighter">
            <div>ИМ НРАВИТСЯ</div>
            <div className="text-white/20">NEXISS</div>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative">
              <div className="relative bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 hover:border-white/30 transition-all duration-500 h-full">
                <div className="flex space-x-1 mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-white/60 group-hover:text-white transition-all" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 text-lg leading-relaxed mb-8 group-hover:text-white/90 transition-colors">
                  "{t.text}"
                </p>
                <div className="h-px bg-white/20 mb-4"></div>
                <div className="text-xl font-black mb-1">{t.name}</div>
                <div className="text-sm text-white/40">{t.role}</div>
                <div className="text-sm text-white/30 font-mono">{t.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: '50K+', label: 'Разработчиков' },
            { value: '4.9/5', label: 'Средняя оценка' },
            { value: '99%', label: 'Рекомендуют' }
          ].map((s, i) => (
            <div key={i} className="text-center group cursor-pointer">
              <div className="text-5xl md:text-6xl font-black mb-3 group-hover:scale-110 transition-transform duration-300">
                {s.value}
              </div>
              <div className="text-sm text-white/40 uppercase tracking-wider group-hover:text-white/60 transition-colors">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
