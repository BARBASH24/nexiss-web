import React from 'react'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <div className="text-sm text-white/40 uppercase tracking-widest mb-4">Контакты</div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              Свяжитесь
              <br />
              <span className="text-white/20">С нами</span>
            </h1>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl">
              <h2 className="text-3xl font-black uppercase mb-6">Форма обратной связи</h2>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Имя"
                  className="w-full bg-black border border-white/10 px-6 py-4 rounded-xl focus:border-white/30 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-black border border-white/10 px-6 py-4 rounded-xl focus:border-white/30 outline-none transition-all"
                />
                <textarea
                  placeholder="Сообщение"
                  rows={5}
                  className="w-full bg-black border border-white/10 px-6 py-4 rounded-xl focus:border-white/30 outline-none transition-all resize-none"
                ></textarea>
                <button className="w-full bg-white text-black px-6 py-4 font-bold uppercase tracking-wider rounded-xl hover:bg-white/90 transition-all">
                  Отправить
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 p-10 rounded-2xl">
                <h3 className="text-2xl font-black uppercase mb-4">Email</h3>
                <a href="mailto:hello@nexiss.dev" className="text-white/80 hover:text-white transition-colors">
                  hello@nexiss.dev
                </a>
              </div>

              <div className="bg-white/5 border border-white/10 p-10 rounded-2xl">
                <h3 className="text-2xl font-black uppercase mb-4">Социальные сети</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-white/80 hover:text-white transition-colors">Twitter</a>
                  <a href="#" className="block text-white/80 hover:text-white transition-colors">GitHub</a>
                  <a href="#" className="block text-white/80 hover:text-white transition-colors">Discord</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
