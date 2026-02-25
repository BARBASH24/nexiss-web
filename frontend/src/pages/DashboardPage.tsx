import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api, User, UserStats } from '../services/api'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [user, setUser] = useState<User | null>(null)
  const [stats, setStats] = useState<UserStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [editingName, setEditingName] = useState(false)
  const [newName, setNewName] = useState('')
  const [editingEmail, setEditingEmail] = useState(false)
  const [newEmail, setNewEmail] = useState('')
  const [selectedModel, setSelectedModel] = useState('GPT-4')
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<'pro' | 'enterprise' | null>(null)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [processing, setProcessing] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [userData, statsData] = await Promise.all([
        api.getProfile(),
        api.getStats()
      ])
      setUser(userData)
      setStats(statsData)
    } catch (err) {
      console.error('Failed to load data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    api.logout()
    navigate('/login')
  }

  const handleNameUpdate = async () => {
    if (!newName.trim() || !user) return
    try {
      const updatedUser = await api.updateProfile(newName, user.email)
      setUser(updatedUser)
      setEditingName(false)
      setNewName('')
    } catch (err) {
      console.error('Failed to update name:', err)
    }
  }

  const handleEmailUpdate = async () => {
    if (!newEmail.trim() || !user) return
    try {
      const updatedUser = await api.updateProfile(user.name, newEmail)
      setUser(updatedUser)
      setEditingEmail(false)
      setNewEmail('')
    } catch (err) {
      console.error('Failed to update email:', err)
    }
  }

  const handleUpgradePlan = () => {
    setActiveTab('pricing')
  }

  const handleSelectPlan = (plan: 'pro' | 'enterprise') => {
    setSelectedPlan(plan)
    setShowUpgradeModal(true)
  }

  const handlePurchase = async () => {
    if (!selectedPlan) return

    setProcessing(true)
    try {
      const result = await api.upgradePlan(selectedPlan, paymentMethod)
      setUser(result.user)
      setShowUpgradeModal(false)
      setSelectedPlan(null)
      alert(`✅ ${result.message}`)
      loadData()
    } catch (err: any) {
      alert(`❌ Ошибка: ${err.message}`)
    } finally {
      setProcessing(false)
    }
  }

  const handleModelChange = (model: string) => {
    setSelectedModel(model)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl font-bold uppercase tracking-wider">Загрузка...</div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-black">
      {/* Use the same Header as HomePage */}
      <Header />

      <div className="container mx-auto px-6 py-10 max-w-7xl mt-20">
        {/* Page header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-3 tracking-tight">
            Добро пожаловать, <span className="text-white/50">{user?.name}</span>
          </h1>
          <p className="text-white/40 text-base">Управляйте своим профилем и настройками</p>
        </div>
        
        {/* Tabs */}
        <div className="flex space-x-2 mb-10">
          {[
            { id: 'overview', label: 'Обзор' },
            { id: 'downloads', label: 'Загрузки' },
            { id: 'pricing', label: 'Тарифы' },
            { id: 'settings', label: 'Настройки' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 text-sm font-medium rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Welcome card */}
              <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl p-10 border border-white/[0.08]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4 tracking-tight">Начните работу</h2>
                  <p className="text-white/50 mb-8 text-base leading-relaxed">
                    Скачайте nexiss и начните создавать ML модели с помощью AI
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    <a 
                      href="#" 
                      className="bg-white text-black px-6 py-3.5 font-semibold hover:bg-white/90 transition-all text-center rounded-xl"
                    >
                      Скачать IDE
                    </a>
                    <a 
                      href="#" 
                      className="bg-white/5 border border-white/10 text-white px-6 py-3.5 font-semibold hover:bg-white/10 hover:border-white/20 transition-all text-center rounded-xl"
                    >
                      Документация
                    </a>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/[0.08]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold tracking-tight">Последняя активность</h3>
                    <button className="text-sm text-white/50 hover:text-white/80 transition-colors">
                      Показать все
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Создан новый проект',
                        desc: 'ML Model Training',
                        time: '2 часа назад',
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        ),
                        color: 'text-green-400'
                      },
                      {
                        title: 'AI запрос выполнен',
                        desc: 'Оптимизация кода',
                        time: '5 часов назад',
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        ),
                        color: 'text-purple-400'
                      },
                      {
                        title: 'Файл сохранен',
                        desc: 'model.py',
                        time: 'Вчера',
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ),
                        color: 'text-blue-400'
                      }
                    ].map((activity, i) => (
                      <div key={i} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/[0.03] transition-colors">
                        <div className={`${activity.color} mt-0.5`}>
                          {activity.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white/90">{activity.title}</p>
                          <p className="text-xs text-white/40 truncate">{activity.desc}</p>
                        </div>
                        <span className="text-xs text-white/30 whitespace-nowrap">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Туториалы',
                    desc: 'Изучите основы',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    link: '/tutorials'
                  },
                  {
                    title: 'Сообщество',
                    desc: 'Присоединяйтесь',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    link: '/community'
                  }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/[0.08] hover:border-white/[0.15] transition-all group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none"></div>
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="text-white/70 group-hover:text-white/90 group-hover:scale-110 transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-white/90 mb-0.5">{item.title}</p>
                        <p className="text-sm text-white/40">{item.desc}</p>
                      </div>
                      <svg className="w-5 h-5 ml-auto text-white/30 group-hover:text-white/50 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Card - Modern Cursor/Kiro Style */}
              <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/[0.08] overflow-hidden group hover:border-white/[0.15] transition-all">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none"></div>
                
                {/* Hover effect - становится белее */}
                <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider">Профиль</h3>
                    <button 
                      onClick={() => {
                        setEditingName(!editingName)
                        setNewName(user?.name || '')
                      }}
                      className="text-xs text-white/40 hover:text-white/70 transition-colors px-3 py-1 rounded-lg hover:bg-white/5"
                    >
                      {editingName ? 'Отмена' : 'Изменить'}
                    </button>
                  </div>

                  {/* Avatar & Name */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all">
                        <span className="text-2xl font-bold text-white/90">{user?.name?.[0]?.toUpperCase()}</span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500/90 rounded-full border-2 border-black flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      {editingName ? (
                        <div className="space-y-2">
                          <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                            placeholder="Введите имя"
                            autoFocus
                            onKeyPress={(e) => e.key === 'Enter' && handleNameUpdate()}
                          />
                          <button
                            onClick={handleNameUpdate}
                            className="w-full bg-white/10 hover:bg-white/15 text-white text-xs font-medium py-1.5 rounded-lg transition-colors"
                          >
                            Сохранить
                          </button>
                        </div>
                      ) : (
                        <>
                          <h4 className="text-lg font-semibold text-white truncate">{user?.name}</h4>
                          <p className="text-sm text-white/40 truncate font-mono">{user?.email}</p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                  {/* Info Grid */}
                  <div className="space-y-3">
                    {/* Status */}
                    <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                      <span className="text-sm text-white/50">Статус</span>
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                        </div>
                        <span className="text-sm font-medium text-white/90">Активен</span>
                      </div>
                    </div>

                    {/* Plan */}
                    <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                      <span className="text-sm text-white/50">План</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-white/90 capitalize">{user?.plan || 'Free'}</span>
                        {user?.plan === 'free' && (
                          <button 
                            onClick={handleUpgradePlan}
                            className="text-xs text-blue-400 hover:text-blue-300 transition-colors px-2 py-1 rounded hover:bg-blue-400/10"
                          >
                            Upgrade
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Model */}
                    <div className="py-2 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-white/50">Модель</span>
                        <span className="text-sm font-medium text-white/90 font-mono">{selectedModel}</span>
                      </div>
                      <select 
                        value={selectedModel}
                        onChange={(e) => handleModelChange(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none focus:border-white/30 transition-colors cursor-pointer [&>option]:bg-black [&>option]:text-white"
                      >
                        <option value="GPT-4">GPT-4</option>
                        <option value="GPT-3.5">GPT-3.5 Turbo</option>
                        <option value="Claude-3">Claude 3</option>
                        <option value="Gemini">Gemini Pro</option>
                      </select>
                    </div>

                    {/* API Usage */}
                    <div className="py-2 px-3 rounded-xl bg-white/[0.03]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-white/50">Использование API</span>
                        <span className="text-xs text-white/40 font-mono">{stats?.ai_requests || 0}/1000</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(((stats?.ai_requests || 0) / 1000) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-white/30 mt-1">
                        {1000 - (stats?.ai_requests || 0)} запросов осталось
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                  {/* Quick Actions */}
                  <div className="space-y-2">
                    {[
                      { 
                        label: 'Документация', 
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        ),
                        action: () => window.open('/docs', '_blank') 
                      },
                      { 
                        label: 'Настройки', 
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        ),
                        action: () => setActiveTab('settings') 
                      },
                      { 
                        label: 'Поддержка', 
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        ),
                        action: () => window.open('/support', '_blank') 
                      }
                    ].map((item, i) => (
                      <button
                        key={i}
                        onClick={item.action}
                        className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] hover:border-white/10 transition-all group/btn"
                      >
                        <span className="text-white/70 group-hover/btn:text-white/90 group-hover/btn:scale-110 transition-all">{item.icon}</span>
                        <span className="text-sm font-medium text-white/70 group-hover/btn:text-white/90 transition-colors">{item.label}</span>
                        <svg className="w-4 h-4 ml-auto text-white/30 group-hover/btn:text-white/50 group-hover/btn:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                    
                    {/* Logout Button */}
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/30 transition-all group/btn mt-4"
                    >
                      <span className="text-red-400 group-hover/btn:text-red-300 group-hover/btn:scale-110 transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                      </span>
                      <span className="text-sm font-medium text-red-400 group-hover/btn:text-red-300 transition-colors">Выйти</span>
                      <svg className="w-4 h-4 ml-auto text-red-400/50 group-hover/btn:text-red-300/70 group-hover/btn:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats Mini Card */}
              <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl p-6 border border-white/[0.08] group hover:border-white/[0.15] transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">Активность</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { 
                        value: stats?.coding_hours || 0, 
                        label: 'Часов', 
                        icon: (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )
                      },
                      { 
                        value: stats?.projects_count || 0, 
                        label: 'Проектов', 
                        icon: (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                          </svg>
                        )
                      },
                      { 
                        value: stats?.ai_requests || 0, 
                        label: 'Запросов', 
                        icon: (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        )
                      }
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-white/70 mb-2 flex justify-center">{stat.icon}</div>
                        <div className="text-2xl font-bold text-white/90 mb-0.5">{stat.value}</div>
                        <div className="text-xs text-white/40">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'downloads' && (
          <div className="max-w-4xl">
            <div className="space-y-3">
              {[
                { 
                  os: 'Windows', 
                  size: '125 MB', 
                  icon: (
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                    </svg>
                  ),
                  desc: 'Windows 10 и выше' 
                },
                { 
                  os: 'macOS', 
                  size: '118 MB', 
                  icon: (
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  ),
                  desc: 'macOS 11 и выше' 
                },
                { 
                  os: 'Linux', 
                  size: '122 MB', 
                  icon: (
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.035.218.094.438.182.635.27.613.63 1.165 1.048 1.674 1.034 1.26 2.108 2.364 3.537 3.099.934.48 1.943.849 2.976 1.104.906.224 1.861.346 2.816.346 1.017 0 2.034-.15 3.051-.45 1.206-.357 2.334-.9 3.365-1.605.9-.615 1.725-1.35 2.445-2.205.72-.855 1.335-1.83 1.785-2.88.45-1.05.705-2.175.705-3.345 0-1.17-.255-2.295-.705-3.345-.45-1.05-1.065-2.025-1.785-2.88-.72-.855-1.545-1.59-2.445-2.205-1.031-.705-2.159-1.248-3.365-1.605C14.538.15 13.521 0 12.504 0zm-.392 4.021c.507 0 .919.412.919.919s-.412.919-.919.919-.919-.412-.919-.919.412-.919.919-.919zm-2.543 1.326c.507 0 .919.412.919.919s-.412.919-.919.919-.919-.412-.919-.919.412-.919.919-.919zm5.086 0c.507 0 .919.412.919.919s-.412.919-.919.919-.919-.412-.919-.919.412-.919.919-.919z" />
                    </svg>
                  ),
                  desc: 'Ubuntu, Debian, Fedora' 
                }
              ].map((platform, i) => (
                <div 
                  key={i}
                  className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/[0.08] hover:border-white/[0.15] transition-all group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center space-x-5">
                      <div className="text-white/70 group-hover:text-white/90 group-hover:scale-110 transition-all">{platform.icon}</div>
                      <div>
                        <p className="text-lg font-semibold text-white/90 mb-0.5">{platform.os}</p>
                        <p className="text-sm text-white/40">{platform.desc} • {platform.size}</p>
                      </div>
                    </div>
                    <button className="bg-white text-black px-6 py-2.5 font-semibold hover:bg-white/90 transition-all rounded-xl">
                      Скачать
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
                Выберите
                <br />
                <span className="text-white/20">Свой план</span>
              </h2>
              <div className="h-1 w-24 bg-white/20 mx-auto mb-6"></div>
              <p className="text-white/50 text-lg">Начните бесплатно. Обновитесь когда будете готовы.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'FREE',
                  price: '$0',
                  period: '/месяц',
                  description: 'Для индивидуальных разработчиков',
                  features: [
                    'Базовый AI ассистент',
                    'До 100 AI запросов/месяц',
                    'Все основные функции',
                    'Поддержка сообщества',
                    'Обновления'
                  ],
                  current: user?.plan === 'free' || !user?.plan,
                  buttonText: 'НАЧАТЬ'
                },
                {
                  name: 'PRO',
                  price: '$29',
                  period: '/месяц',
                  description: 'Для профессионалов',
                  popular: true,
                  features: [
                    'Продвинутый AI ассистент',
                    'Безлимитные AI запросы',
                    'Приоритетная поддержка',
                    'Расширенная отладка',
                    'Кастомные плагины',
                    'Командная работа'
                  ],
                  current: user?.plan === 'pro',
                  buttonText: 'НАЧАТЬ'
                },
                {
                  name: 'ENTERPRISE',
                  price: 'Custom',
                  period: '',
                  description: 'Для команд и компаний',
                  features: [
                    'Всё из Pro',
                    'Приватное развертывание',
                    'SSO интеграция',
                    'Выделенная поддержка',
                    'SLA гарантии',
                    'Кастомные интеграции'
                  ],
                  current: user?.plan === 'enterprise',
                  buttonText: 'СВЯЗАТЬСЯ'
                }
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`relative bg-white/5 border ${
                    plan.popular ? 'border-white/40' : 'border-white/10'
                  } p-8 hover:bg-white/10 transition-all duration-300 rounded-2xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                      Популярный
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-black uppercase mb-2">{plan.name}</h3>
                      <p className="text-sm text-white/60">{plan.description}</p>
                    </div>

                    <div className="flex items-baseline">
                      <span className="text-5xl font-black">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-white/40 ml-2">{plan.period}</span>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start space-x-3">
                          <span className="text-white/60 mt-1">✓</span>
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      disabled={plan.current}
                      onClick={() => {
                        if (plan.name === 'PRO') {
                          handleSelectPlan('pro')
                        } else if (plan.name === 'ENTERPRISE') {
                          handleSelectPlan('enterprise')
                        }
                      }}
                      className={`w-full py-4 font-bold uppercase tracking-wider transition-all rounded-xl ${
                        plan.current
                          ? 'bg-white/10 border border-white/20 text-white/50 cursor-not-allowed'
                          : plan.popular
                          ? 'bg-white text-black hover:bg-white/90'
                          : 'bg-white/10 border border-white/20 hover:bg-white/20'
                      }`}
                    >
                      {plan.current ? 'ТЕКУЩИЙ ПЛАН' : plan.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-4xl">
            <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl p-10 border border-white/[0.08]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-8 tracking-tight">Настройки профиля</h2>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white/60">
                      Email
                    </label>
                    {editingEmail ? (
                      <div className="space-y-2">
                        <input 
                          type="email" 
                          value={newEmail}
                          onChange={(e) => setNewEmail(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white rounded-xl focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-white/30"
                          placeholder="your@email.com"
                          onKeyPress={(e) => e.key === 'Enter' && handleEmailUpdate()}
                        />
                        <div className="flex space-x-2">
                          <button
                            onClick={handleEmailUpdate}
                            className="flex-1 bg-white text-black px-4 py-2 font-semibold hover:bg-white/90 transition-all rounded-lg text-sm"
                          >
                            Сохранить
                          </button>
                          <button
                            onClick={() => {
                              setEditingEmail(false)
                              setNewEmail('')
                            }}
                            className="flex-1 bg-white/5 border border-white/10 text-white px-4 py-2 font-semibold hover:bg-white/10 transition-all rounded-lg text-sm"
                          >
                            Отмена
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <input 
                          type="email" 
                          className="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-white rounded-xl focus:outline-none cursor-not-allowed"
                          value={user?.email}
                          disabled
                        />
                        <button
                          onClick={() => {
                            setEditingEmail(true)
                            setNewEmail(user?.email || '')
                          }}
                          className="bg-white/10 hover:bg-white/15 text-white px-4 py-3 font-medium transition-all rounded-xl text-sm"
                        >
                          Изменить
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white/60">
                      Имя
                    </label>
                    {editingName ? (
                      <div className="space-y-2">
                        <input 
                          type="text" 
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white rounded-xl focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all placeholder:text-white/30"
                          placeholder="Ваше имя"
                          onKeyPress={(e) => e.key === 'Enter' && handleNameUpdate()}
                        />
                        <div className="flex space-x-2">
                          <button
                            onClick={handleNameUpdate}
                            className="flex-1 bg-white text-black px-4 py-2 font-semibold hover:bg-white/90 transition-all rounded-lg text-sm"
                          >
                            Сохранить
                          </button>
                          <button
                            onClick={() => {
                              setEditingName(false)
                              setNewName('')
                            }}
                            className="flex-1 bg-white/5 border border-white/10 text-white px-4 py-2 font-semibold hover:bg-white/10 transition-all rounded-lg text-sm"
                          >
                            Отмена
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <input 
                          type="text" 
                          className="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-white rounded-xl focus:outline-none cursor-not-allowed"
                          value={user?.name}
                          disabled
                        />
                        <button
                          onClick={() => {
                            setEditingName(true)
                            setNewName(user?.name || '')
                          }}
                          className="bg-white/10 hover:bg-white/15 text-white px-4 py-3 font-medium transition-all rounded-xl text-sm"
                        >
                          Изменить
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"></div>
                  
                  {/* Model Selection */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white/60">
                      Модель AI
                    </label>
                    <select 
                      value={selectedModel}
                      onChange={(e) => handleModelChange(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white rounded-xl focus:outline-none focus:border-white/30 focus:bg-black/70 transition-all cursor-pointer [&>option]:bg-black [&>option]:text-white"
                    >
                      <option value="GPT-4">GPT-4 - Самая мощная модель</option>
                      <option value="GPT-3.5">GPT-3.5 Turbo - Быстрая и эффективная</option>
                      <option value="Claude-3">Claude 3 - Отличная для кода</option>
                      <option value="Gemini">Gemini Pro - Google AI</option>
                    </select>
                    <p className="text-xs text-white/40 mt-1">
                      Выбранная модель: <span className="font-mono text-white/60">{selectedModel}</span>
                    </p>
                  </div>

                  {/* Plan Info */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white/60">
                      Текущий план
                    </label>
                    <div className="flex items-center justify-between bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                      <div>
                        <p className="text-white font-semibold">Free Plan</p>
                        <p className="text-xs text-white/40">1000 запросов в месяц</p>
                      </div>
                      <button
                        onClick={handleUpgradePlan}
                        className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 font-semibold transition-all rounded-lg text-sm border border-blue-400/20"
                      >
                        Upgrade to Pro
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Payment Modal */}
      {showUpgradeModal && selectedPlan && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200" onClick={() => !processing && setShowUpgradeModal(false)}>
          <div className="relative bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-2xl rounded-3xl p-10 border border-white/[0.08] max-w-lg w-full shadow-2xl animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none rounded-3xl"></div>
            
            <button
              onClick={() => !processing && setShowUpgradeModal(false)}
              disabled={processing}
              className="absolute top-8 right-8 text-white/40 hover:text-white/90 hover:bg-white/10 transition-all disabled:opacity-50 p-2 rounded-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-2 uppercase tracking-tight">Оформление подписки</h2>
              <p className="text-white/40 mb-8 text-sm">
                План: <span className="text-white/70 font-semibold">{selectedPlan === 'pro' ? 'Pro ($29/месяц)' : 'Enterprise (Custom)'}</span>
              </p>

              <div className="space-y-6">
                {/* Payment Method */}
                <div>
                  <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Способ оплаты</label>
                  <div className="space-y-3">
                    {[
                      { 
                        value: 'card', 
                        label: 'Банковская карта',
                        icon: (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        )
                      },
                      { 
                        value: 'paypal', 
                        label: 'PayPal',
                        icon: (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 00-.794.68l-.04.22-.63 3.993-.028.15a.805.805 0 01-.794.68H7.72a.483.483 0 01-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502z" />
                            <path d="M2.379 0C1.94 0 1.6.358 1.549.79L.05 11.625a.783.783 0 00.774.906h4.147l1.04-6.594L5.96 6.5h3.838c3.026 0 5.618.816 6.701 3.106.147.312.266.637.358.973.551-3.579-.015-6.016-2.077-7.833C13.373.997 11.274.5 8.836.5L3.153.5C2.715.5 2.379.858 2.379 1.29v-.79z" />
                          </svg>
                        )
                      },
                      { 
                        value: 'crypto', 
                        label: 'Криптовалюта',
                        icon: (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
                          </svg>
                        )
                      }
                    ].map((method) => (
                      <button
                        key={method.value}
                        onClick={() => setPaymentMethod(method.value)}
                        disabled={processing}
                        className={`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl border transition-all group ${
                          paymentMethod === method.value
                            ? 'bg-white/[0.08] border-white/20 shadow-lg'
                            : 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06] hover:border-white/15'
                        } disabled:opacity-50`}
                      >
                        <div className={`${paymentMethod === method.value ? 'text-white/90' : 'text-white/50 group-hover:text-white/70'} transition-colors`}>
                          {method.icon}
                        </div>
                        <span className={`text-sm font-medium flex-1 text-left ${paymentMethod === method.value ? 'text-white/90' : 'text-white/60 group-hover:text-white/80'} transition-colors`}>
                          {method.label}
                        </span>
                        {paymentMethod === method.value && (
                          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Card Details (if card selected) */}
                {paymentMethod === 'card' && (
                  <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
                    <input
                      type="text"
                      placeholder="Номер карты"
                      disabled={processing}
                      className="w-full bg-black/30 border border-white/[0.08] px-5 py-4 text-white rounded-2xl focus:outline-none focus:border-white/20 focus:bg-black/40 placeholder:text-white/30 disabled:opacity-50 transition-all"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        disabled={processing}
                        className="w-full bg-black/30 border border-white/[0.08] px-5 py-4 text-white rounded-2xl focus:outline-none focus:border-white/20 focus:bg-black/40 placeholder:text-white/30 disabled:opacity-50 transition-all"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        disabled={processing}
                        className="w-full bg-black/30 border border-white/[0.08] px-5 py-4 text-white rounded-2xl focus:outline-none focus:border-white/20 focus:bg-black/40 placeholder:text-white/30 disabled:opacity-50 transition-all"
                      />
                    </div>
                  </div>
                )}

                {/* Purchase Button */}
                <button
                  onClick={handlePurchase}
                  disabled={processing}
                  className="w-full bg-white text-black px-6 py-4 font-bold text-base rounded-2xl hover:bg-white/90 hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 uppercase tracking-wide"
                >
                  {processing ? (
                    <span className="flex items-center justify-center space-x-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Обработка...</span>
                    </span>
                  ) : (
                    `Оплатить ${selectedPlan === 'pro' ? '$29' : 'Custom'}`
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}
