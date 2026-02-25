import React from 'react'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const PressPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <div className="text-sm text-white/40 uppercase tracking-widest mb-4">Пресса</div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              Медиа
              <br />
              <span className="text-white/20">Материалы</span>
            </h1>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 p-12 rounded-2xl">
              <h2 className="text-3xl font-black uppercase mb-6">Пресс-кит</h2>
              <p className="text-white/60 mb-8">
                Логотипы, скриншоты и другие материалы для прессы
              </p>
              <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider rounded-xl hover:bg-white/90 transition-all">
                Скачать пресс-кит
              </button>
            </div>

            <div className="bg-white/5 border border-white/10 p-12 rounded-2xl">
              <h2 className="text-3xl font-black uppercase mb-6">Контакты для прессы</h2>
              <p className="text-white/60 mb-4">
                По вопросам сотрудничества и интервью:
              </p>
              <a href="mailto:press@nexiss.dev" className="text-xl text-white/80 hover:text-white transition-colors">
                press@nexiss.dev
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
