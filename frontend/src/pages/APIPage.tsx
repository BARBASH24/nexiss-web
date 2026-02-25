import React from 'react'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const APIPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="text-sm text-white/40 uppercase tracking-widest mb-4">API Reference</div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              API
              <br />
              <span className="text-white/20">Документация</span>
            </h1>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
              <h2 className="text-2xl font-black uppercase mb-4">AI API</h2>
              <p className="text-white/60 mb-6">Интеграция AI ассистента в ваши инструменты</p>
              <div className="bg-black border border-white/10 p-4 font-mono text-xs rounded-xl">
                <div>nexiss.ai.complete()</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
              <h2 className="text-2xl font-black uppercase mb-4">Extensions API</h2>
              <p className="text-white/60 mb-6">Создавайте собственные расширения</p>
              <div className="bg-black border border-white/10 p-4 font-mono text-xs rounded-xl">
                <div>nexiss.extensions.create()</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
              <h2 className="text-2xl font-black uppercase mb-4">Themes API</h2>
              <p className="text-white/60 mb-6">Кастомизируйте внешний вид IDE</p>
              <div className="bg-black border border-white/10 p-4 font-mono text-xs rounded-xl">
                <div>nexiss.themes.register()</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
