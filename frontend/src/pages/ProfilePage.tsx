import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const ProfilePage: React.FC = () => {
  // Mock data
  const user = {
    name: 'Иван Петров',
    email: 'ivan@example.com',
    plan: 'Pro Plan',
    memberSince: '15.12.2024'
  }

  const stats = {
    requestsUsed: 1247,
    requestsTotal: 5000,
    tokensUsed: 2847392,
    tokensTotal: 10000000,
    projectsCount: 12,
    linesOfCode: 45823
  }

  const models = [
    { name: 'Claude Sonnet 4.5', requests: 847, active: true },
    { name: 'GPT-4 Turbo', requests: 234, active: true },
    { name: 'Claude Opus 3', requests: 166, active: false }
  ]

  const recentActivity = [
    { action: 'Создан проект', name: 'web-scraper', time: '2 часа назад' },
    { action: 'Запрос к AI', name: 'Оптимизация кода', time: '5 часов назад' },
    { action: 'Коммит', name: 'Fix authentication bug', time: '1 день назад' }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-xl bg-black/50">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3 group">
                <img src="/logo.svg" alt="nexiss" className="w-10 h-10 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300" />
                <span className="text-2xl font-black tracking-tighter">NEXISS</span>
              </Link>

              <div className="flex items-center space-x-6">
                <Link 
                  to="/login"
                  className="text-sm text-white/40 hover:text-white transition-colors uppercase tracking-wider font-bold"
                >
                  Выйти
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-7xl mx-auto">
            {/* User Info Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-black mb-2 tracking-tighter">{user.name}</h1>
                <p className="text-white/40 text-sm">{user.email}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/40 mb-1">Подписка</div>
                <div className="text-xl font-black">{user.plan}</div>
              </div>
            </div>

            {/* Stats Grid - Compact */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Requests */}
              <div className="border border-white/10 rounded-2xl p-5 backdrop-blur-xl bg-black/40">
                <div className="text-3xl font-black mb-2">
                  {stats.requestsUsed}
                </div>
                <div className="text-white/40 text-xs font-bold mb-3">
                  Запросов
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white"
                    style={{ width: `${(stats.requestsUsed / stats.requestsTotal) * 100}%` }}
                  ></div>
                </div>
                <div className="text-white/40 text-xs mt-2">
                  {((stats.requestsUsed / stats.requestsTotal) * 100).toFixed(0)}% из {stats.requestsTotal}
                </div>
              </div>

              {/* Tokens */}
              <div className="border border-white/10 rounded-2xl p-5 backdrop-blur-xl bg-black/40">
                <div className="text-3xl font-black mb-2">
                  {(stats.tokensUsed / 1000000).toFixed(1)}M
                </div>
                <div className="text-white/40 text-xs font-bold mb-3">
                  Токенов
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white"
                    style={{ width: `${(stats.tokensUsed / stats.tokensTotal) * 100}%` }}
                  ></div>
                </div>
                <div className="text-white/40 text-xs mt-2">
                  {((stats.tokensUsed / stats.tokensTotal) * 100).toFixed(0)}% из {(stats.tokensTotal / 1000000).toFixed(0)}M
                </div>
              </div>

              {/* Projects */}
              <div className="border border-white/10 rounded-2xl p-5 backdrop-blur-xl bg-black/40">
                <div className="text-3xl font-black mb-2">
                  {stats.projectsCount}
                </div>
                <div className="text-white/40 text-xs font-bold">
                  Проектов
                </div>
              </div>

              {/* Lines of Code */}
              <div className="border border-white/10 rounded-2xl p-5 backdrop-blur-xl bg-black/40">
                <div className="text-3xl font-black mb-2">
                  {(stats.linesOfCode / 1000).toFixed(0)}K
                </div>
                <div className="text-white/40 text-xs font-bold">
                  Строк кода
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Models Section */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-black mb-4 tracking-tighter">
                  Модели
                </h3>

                <div className="space-y-3">
                  {models.map((model, i) => (
                    <div 
                      key={i}
                      className="border border-white/10 rounded-2xl p-5 backdrop-blur-xl bg-black/40 flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-xl font-black">{model.name}</div>
                        {model.active && (
                          <div className="flex items-center space-x-1.5 px-2 py-1 bg-white/10 rounded-full">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                            <span className="text-xs text-white/60 font-bold">
                              Активна
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black">{model.requests}</div>
                        <div className="text-white/40 text-xs">запросов</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-2xl font-black mb-4 tracking-tighter">
                  Активность
                </h3>

                <div className="space-y-3">
                  {recentActivity.map((activity, i) => (
                    <div 
                      key={i}
                      className="border border-white/10 rounded-2xl p-4 backdrop-blur-xl bg-black/40"
                    >
                      <div className="text-xs text-white/40 font-bold mb-1">
                        {activity.action}
                      </div>
                      <div className="text-sm font-black mb-1">{activity.name}</div>
                      <div className="text-xs text-white/40">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="bg-white text-black px-6 py-3 font-bold hover:bg-white/90 transition-all rounded-full text-sm">
                Редактировать профиль
              </button>
              <button className="border border-white/20 text-white px-6 py-3 font-bold hover:bg-white/10 transition-all rounded-full text-sm">
                Управление подпиской
              </button>
              <button className="border border-white/20 text-white px-6 py-3 font-bold hover:bg-white/10 transition-all rounded-full text-sm">
                Настройки
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
