import React from 'react'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      category: 'Начинающим',
      items: [
        { title: 'Первые шаги в nexiss', time: '10 мин' },
        { title: 'Настройка окружения Python', time: '15 мин' },
        { title: 'Работа с AI ассистентом', time: '20 мин' }
      ]
    },
    {
      category: 'Machine Learning',
      items: [
        { title: 'Создание первой ML модели', time: '30 мин' },
        { title: 'Работа с TensorFlow', time: '45 мин' },
        { title: 'Отладка нейронных сетей', time: '25 мин' }
      ]
    },
    {
      category: 'Продвинутые',
      items: [
        { title: 'Создание плагинов', time: '60 мин' },
        { title: 'Оптимизация производительности', time: '40 мин' },
        { title: 'Интеграция с CI/CD', time: '35 мин' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="text-sm text-white/40 uppercase tracking-widest mb-4">Обучение</div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              Туториалы
            </h1>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
          </div>

          <div className="space-y-12">
            {tutorials.map((section, i) => (
              <div key={i}>
                <h2 className="text-3xl font-black uppercase mb-6">{section.category}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {section.items.map((item, j) => (
                    <div
                      key={j}
                      className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                      <div className="text-sm text-white/40">{item.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
