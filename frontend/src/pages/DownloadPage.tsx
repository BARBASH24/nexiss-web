import React from 'react'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const DownloadPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="text-sm text-white/40 uppercase tracking-widest mb-4">Скачать</div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              nexiss
            </h1>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Выберите версию для вашей операционной системы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all">
              <div className="text-6xl mb-6">🪟</div>
              <h2 className="text-3xl font-black uppercase mb-4">Windows</h2>
              <p className="text-white/60 mb-6">Windows 10/11 (64-bit)</p>
              <button className="w-full bg-white text-black px-6 py-4 font-bold uppercase tracking-wider rounded-xl hover:bg-white/90 transition-all">
                Скачать .exe
              </button>
              <div className="mt-4 text-sm text-white/40">Версия 1.2.0 • 125 MB</div>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all">
              <div className="text-6xl mb-6">🍎</div>
              <h2 className="text-3xl font-black uppercase mb-4">macOS</h2>
              <p className="text-white/60 mb-6">macOS 11+ (Intel & Apple Silicon)</p>
              <button className="w-full bg-white text-black px-6 py-4 font-bold uppercase tracking-wider rounded-xl hover:bg-white/90 transition-all">
                Скачать .dmg
              </button>
              <div className="mt-4 text-sm text-white/40">Версия 1.2.0 • 130 MB</div>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all">
              <div className="text-6xl mb-6">🐧</div>
              <h2 className="text-3xl font-black uppercase mb-4">Linux</h2>
              <p className="text-white/60 mb-6">Ubuntu, Debian, Fedora</p>
              <button className="w-full bg-white text-black px-6 py-4 font-bold uppercase tracking-wider rounded-xl hover:bg-white/90 transition-all">
                Скачать .deb
              </button>
              <div className="mt-4 text-sm text-white/40">Версия 1.2.0 • 120 MB</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-12 rounded-2xl">
            <h2 className="text-3xl font-black uppercase mb-6">Системные требования</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Минимальные</h3>
                <ul className="space-y-2 text-white/60">
                  <li>• 4 GB RAM</li>
                  <li>• 2 GB свободного места</li>
                  <li>• Python 3.8+</li>
                  <li>• Интернет для AI функций</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Рекомендуемые</h3>
                <ul className="space-y-2 text-white/60">
                  <li>• 16 GB RAM</li>
                  <li>• 10 GB свободного места</li>
                  <li>• Python 3.12+</li>
                  <li>• NVIDIA GPU для ML</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
