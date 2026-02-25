import React from 'react'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <div className="text-sm text-white/40 uppercase tracking-widest mb-4">Поддержка</div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              Мы поможем
            </h1>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl">
              <h2 className="text-3xl font-black uppercase mb-4">Email</h2>
              <p className="text-white/60 mb-6">Ответим в течение 24 часов</p>
              <a href="mailto:support@nexiss.dev" className="text-white/80 hover:text-white transition-colors">
                support@nexiss.dev
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl">
              <h2 className="text-3xl font-black uppercase mb-4">Discord</h2>
              <p className="text-white/60 mb-6">Быстрая помощь от сообщества</p>
              <button className="bg-white text-black px-6 py-3 font-bold uppercase tracking-wider rounded-xl hover:bg-white/90 transition-all">
                Открыть Discord
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-12 rounded-2xl">
            <h2 className="text-3xl font-black uppercase mb-8">Частые вопросы</h2>
            <div className="space-y-6">
              {[
                { q: 'Как установить nexiss?', a: 'Скачайте установщик для вашей ОС и следуйте инструкциям' },
                { q: 'Какие языки поддерживаются?', a: 'Python, JavaScript, TypeScript и другие популярные языки' },
                { q: 'Есть ли бесплатная версия?', a: 'Да, базовая версия полностью бесплатна' }
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-6 last:border-0">
                  <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                  <p className="text-white/60">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
