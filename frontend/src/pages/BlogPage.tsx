import React from 'react'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const BlogPage: React.FC = () => {
  const posts = [
    {
      date: '15 фев 2026',
      title: 'Будущее AI в разработке',
      excerpt: 'Как искусственный интеллект меняет способ написания кода',
      readTime: '5 мин'
    },
    {
      date: '10 фев 2026',
      title: 'Оптимизация ML моделей',
      excerpt: 'Лучшие практики для ускорения обучения нейронных сетей',
      readTime: '8 мин'
    },
    {
      date: '5 фев 2026',
      title: 'Релиз версии 1.2.0',
      excerpt: 'Новые возможности и улучшения в последнем обновлении',
      readTime: '3 мин'
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <div className="text-sm text-white/40 uppercase tracking-widest mb-4">Блог</div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              Новости
            </h1>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
          </div>

          <div className="space-y-8">
            {posts.map((post, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-4 mb-4 text-sm text-white/40">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} чтения</span>
                </div>
                <h2 className="text-3xl font-black uppercase mb-4">{post.title}</h2>
                <p className="text-white/60 text-lg">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
