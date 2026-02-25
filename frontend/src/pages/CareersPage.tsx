import React from 'react'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const CareersPage: React.FC = () => {
  const positions = [
    { title: 'Senior ML Engineer', location: 'Remote', type: 'Full-time' },
    { title: 'Frontend Developer', location: 'Remote', type: 'Full-time' },
    { title: 'DevOps Engineer', location: 'Remote', type: 'Full-time' }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <div className="text-sm text-white/40 uppercase tracking-widest mb-4">Карьера</div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              Работа
              <br />
              <span className="text-white/20">В nexiss</span>
            </h1>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Создавайте будущее разработки вместе с нами
            </p>
          </div>

          <div className="space-y-6 mb-16">
            {positions.map((pos, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-black uppercase mb-2">{pos.title}</h2>
                    <div className="flex items-center space-x-4 text-sm text-white/40">
                      <span>{pos.location}</span>
                      <span>•</span>
                      <span>{pos.type}</span>
                    </div>
                  </div>
                  <button className="bg-white text-black px-6 py-3 font-bold uppercase tracking-wider rounded-xl hover:bg-white/90 transition-all">
                    Подать заявку
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 p-12 rounded-2xl">
            <h2 className="text-3xl font-black uppercase mb-6">Почему nexiss?</h2>
            <ul className="space-y-4">
              {[
                'Удаленная работа из любой точки мира',
                'Конкурентная зарплата и опционы',
                'Гибкий график',
                'Работа над cutting-edge технологиями'
              ].map((benefit, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="text-white/40 mt-1">✓</span>
                  <span className="text-white/80 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
