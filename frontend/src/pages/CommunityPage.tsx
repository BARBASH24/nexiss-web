import React from 'react'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const CommunityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="text-sm text-white/40 uppercase tracking-widest mb-4">Сообщество</div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              Присоединяйтесь
            </h1>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Более 50,000 разработчиков уже используют nexiss
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-12 rounded-2xl hover:bg-white/10 transition-all">
              <h2 className="text-4xl font-black uppercase mb-4">Discord</h2>
              <p className="text-white/60 mb-8">Общайтесь с другими разработчиками в реальном времени</p>
              <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider rounded-xl hover:bg-white/90 transition-all">
                Присоединиться
              </button>
            </div>

            <div className="bg-white/5 border border-white/10 p-12 rounded-2xl hover:bg-white/10 transition-all">
              <h2 className="text-4xl font-black uppercase mb-4">GitHub</h2>
              <p className="text-white/60 mb-8">Вносите вклад в развитие проекта</p>
              <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider rounded-xl hover:bg-white/90 transition-all">
                Star на GitHub
              </button>
            </div>

            <div className="bg-white/5 border border-white/10 p-12 rounded-2xl hover:bg-white/10 transition-all">
              <h2 className="text-4xl font-black uppercase mb-4">Forum</h2>
              <p className="text-white/60 mb-8">Задавайте вопросы и делитесь опытом</p>
              <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider rounded-xl hover:bg-white/90 transition-all">
                Перейти на форум
              </button>
            </div>

            <div className="bg-white/5 border border-white/10 p-12 rounded-2xl hover:bg-white/10 transition-all">
              <h2 className="text-4xl font-black uppercase mb-4">Twitter</h2>
              <p className="text-white/60 mb-8">Следите за новостями и обновлениями</p>
              <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider rounded-xl hover:bg-white/90 transition-all">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
