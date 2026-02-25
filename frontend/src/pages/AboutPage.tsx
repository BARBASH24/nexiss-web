import React from 'react'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Hero */}
          <div className="text-center mb-20">
            <div className="text-sm text-white/40 uppercase tracking-widest mb-4">О нас</div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              Наша
              <br />
              <span className="text-white/20">Миссия</span>
            </h1>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
          </div>

          {/* Content */}
          <div className="space-y-16">
            <div className="bg-white/5 border border-white/10 p-12 rounded-2xl">
              <p className="text-2xl text-white/80 leading-relaxed">
                Мы создаем инструменты, которые делают разработку ML моделей 
                быстрее, проще и приятнее. nexiss — это результат многолетнего 
                опыта работы с машинным обучением и глубоким пониманием потребностей 
                разработчиков.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-px bg-white/10">
              <div className="bg-black p-12 text-center">
                <div className="text-6xl font-black mb-4">2026</div>
                <div className="text-sm text-white/40 uppercase tracking-wider">Год основания</div>
              </div>
              <div className="bg-black p-12 text-center">
                <div className="text-6xl font-black mb-4">50K+</div>
                <div className="text-sm text-white/40 uppercase tracking-wider">Разработчиков</div>
              </div>
              <div className="bg-black p-12 text-center">
                <div className="text-6xl font-black mb-4">100%</div>
                <div className="text-sm text-white/40 uppercase tracking-wider">Open Source</div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase">Наши ценности</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: 'Инновации', desc: 'Мы постоянно внедряем новейшие технологии' },
                  { title: 'Производительность', desc: 'Скорость и эффективность — наш приоритет' },
                  { title: 'Открытость', desc: 'Мы верим в силу open source сообщества' },
                  { title: 'Качество', desc: 'Каждая деталь имеет значение' }
                ].map((value, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                    <h3 className="text-2xl font-black uppercase mb-4">{value.title}</h3>
                    <p className="text-white/60">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
