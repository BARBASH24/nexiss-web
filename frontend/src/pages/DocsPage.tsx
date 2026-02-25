import React from 'react'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const DocsPage: React.FC = () => {
  const sections = [
    {
      title: 'Начало работы',
      items: ['Установка', 'Первый проект', 'Настройка', 'Горячие клавиши']
    },
    {
      title: 'AI Ассистент',
      items: ['Автодополнение', 'Генерация кода', 'Рефакторинг', 'Отладка']
    },
    {
      title: 'Python & ML',
      items: ['TensorFlow', 'PyTorch', 'Jupyter', 'Scikit-learn']
    },
    {
      title: 'Расширения',
      items: ['Плагины', 'Темы', 'API', 'Разработка']
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h2 className="text-2xl font-black uppercase mb-6">Документация</h2>
                  <div className="h-px w-16 bg-white/20 mb-6"></div>
                </div>
                
                {sections.map((section, i) => (
                  <div key={i} className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j}>
                          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-12">
              <div>
                <h1 className="text-5xl font-black uppercase mb-6">Быстрый старт</h1>
                <div className="h-1 w-24 bg-white/20 mb-8"></div>
                <p className="text-xl text-white/60 leading-relaxed">
                  Начните работу с nexiss за несколько минут
                </p>
              </div>

              {/* Installation */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h2 className="text-3xl font-black uppercase mb-6">Установка</h2>
                <div className="space-y-4">
                  <p className="text-white/80">Скачайте установщик для вашей ОС:</p>
                  <div className="bg-black border border-white/10 p-6 font-mono text-sm rounded-xl">
                    <div className="space-y-2">
                      <div><span className="text-white/40"># Windows</span></div>
                      <div>nexiss-setup-1.0.0.exe</div>
                      <div className="mt-4"><span className="text-white/40"># macOS</span></div>
                      <div>nexiss-1.0.0.dmg</div>
                      <div className="mt-4"><span className="text-white/40"># Linux</span></div>
                      <div>sudo apt install nexiss</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* First project */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h2 className="text-3xl font-black uppercase mb-6">Первый проект</h2>
                <div className="space-y-4">
                  <p className="text-white/80">Создайте новый ML проект:</p>
                  <div className="bg-black border border-white/10 p-6 font-mono text-sm rounded-xl">
                    <div className="space-y-2">
                      <div><span className="text-purple-400">import</span> <span className="text-white">nexiss_ai</span></div>
                      <div><span className="text-purple-400">import</span> <span className="text-white">torch</span></div>
                      <div className="mt-4"></div>
                      <div><span className="text-purple-400">def</span> <span className="text-blue-400">train_model</span>():</div>
                      <div className="ml-4"><span className="text-white">model</span> = <span className="text-blue-400">create_model</span>()</div>
                      <div className="ml-4"><span className="text-purple-400">return</span> <span className="text-white">model</span></div>
                    </div>
                  </div>
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
