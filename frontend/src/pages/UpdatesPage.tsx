import React from 'react'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const UpdatesPage: React.FC = () => {
  const updates = [
    {
      version: '1.2.0',
      date: '15 февраля 2026',
      title: 'Улучшенный AI ассистент',
      changes: [
        'Новая модель GPT-5 для генерации кода',
        'Улучшенное понимание контекста',
        'Поддержка PyTorch 2.5',
        'Исправлены критические баги'
      ]
    },
    {
      version: '1.1.0',
      date: '1 февраля 2026',
      title: 'Командная работа',
      changes: [
        'Live Share для совместной разработки',
        'Встроенный чат',
        'Code Review инструменты',
        'Улучшена производительность'
      ]
    },
    {
      version: '1.0.0',
      date: '15 января 2026',
      title: 'Первый релиз',
      changes: [
        'AI автодополнение кода',
        'Поддержка Python и ML фреймворков',
        'Jupyter notebooks интеграция',
        'Темная тема по умолчанию'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <div className="text-sm text-white/40 uppercase tracking-widest mb-4">Обновления</div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              Что нового
            </h1>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
          </div>

          <div className="space-y-8">
            {updates.map((update, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-10 rounded-2xl"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-4xl font-black mb-2">v{update.version}</div>
                    <div className="text-sm text-white/40 uppercase tracking-wider">{update.date}</div>
                  </div>
                  {i === 0 && (
                    <div className="bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full">
                      Новое
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-black uppercase mb-6">{update.title}</h2>
                <ul className="space-y-3">
                  {update.changes.map((change, j) => (
                    <li key={j} className="flex items-start space-x-3">
                      <span className="text-white/40 mt-1">•</span>
                      <span className="text-white/80">{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
