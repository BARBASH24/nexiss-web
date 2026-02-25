import React from 'react'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const FeaturesPage: React.FC = () => {
  const features = [
    {
      number: '01',
      title: 'AI Автодополнение',
      description: 'Умное предсказание кода на основе контекста вашего проекта',
      details: ['Контекстное понимание', 'Мультиязычность', 'Обучение на вашем коде']
    },
    {
      number: '02',
      title: 'ML Интеграция',
      description: 'Встроенная поддержка TensorFlow, PyTorch и других фреймворков',
      details: ['Jupyter notebooks', 'Визуализация данных', 'GPU ускорение']
    },
    {
      number: '03',
      title: 'Умная Отладка',
      description: 'AI помогает находить и исправлять ошибки автоматически',
      details: ['Анализ стека', 'Предложения решений', 'Профилирование']
    },
    {
      number: '04',
      title: 'Командная Работа',
      description: 'Совместная разработка в реальном времени',
      details: ['Live Share', 'Code Review', 'Комментарии']
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="text-sm text-white/40 uppercase tracking-widest mb-4">Возможности</div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              Всё что нужно
              <br />
              <span className="text-white/20">Для ML разработки</span>
            </h1>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
          </div>

          <div className="space-y-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-12 hover:bg-white/10 transition-all duration-300 rounded-2xl"
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="text-8xl font-black text-white/10">{feature.number}</div>
                  </div>
                  <div className="md:col-span-10 space-y-6">
                    <div>
                      <h2 className="text-4xl font-black uppercase mb-4">{feature.title}</h2>
                      <p className="text-xl text-white/60">{feature.description}</p>
                    </div>
                    <ul className="grid md:grid-cols-3 gap-4">
                      {feature.details.map((detail, j) => (
                        <li key={j} className="flex items-center space-x-2">
                          <span className="text-white/40">→</span>
                          <span className="text-white/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
