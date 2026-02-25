import React from 'react'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const PartnersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="text-sm text-white/40 uppercase tracking-widest mb-4">Партнеры</div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              Наши
              <br />
              <span className="text-white/20">Партнеры</span>
            </h1>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {['TensorFlow', 'PyTorch', 'Jupyter', 'OpenAI', 'Hugging Face', 'NVIDIA'].map((partner, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-12 rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center"
              >
                <h3 className="text-2xl font-black uppercase">{partner}</h3>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-black uppercase mb-6">Станьте партнером</h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к экосистеме nexiss и развивайте будущее ML разработки вместе с нами
            </p>
            <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider rounded-xl hover:bg-white/90 transition-all">
              Связаться
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
