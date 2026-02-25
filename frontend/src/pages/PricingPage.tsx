import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../widgets/Header'
import { Footer } from '../widgets/Footer'

export const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '0',
      description: 'Для индивидуальных разработчиков',
      features: [
        'Базовый AI ассистент',
        'До 100 AI запросов/месяц',
        'Все основные функции',
        'Поддержка сообщества',
        'Обновления'
      ]
    },
    {
      name: 'Pro',
      price: '29',
      description: 'Для профессионалов',
      popular: true,
      features: [
        'Продвинутый AI ассистент',
        'Безлимитные AI запросы',
        'Приоритетная поддержка',
        'Расширенная отладка',
        'Кастомные плагины',
        'Командная работа'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Для команд и компаний',
      features: [
        'Всё из Pro',
        'Приватное развертывание',
        'SSO интеграция',
        'Выделенная поддержка',
        'SLA гарантии',
        'Кастомные интеграции'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="text-sm text-white/40 uppercase tracking-widest mb-4">Цены</div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
              Выберите
              <br />
              <span className="text-white/20">Свой план</span>
            </h1>
            <div className="h-1 w-24 bg-white/20 mx-auto mb-8"></div>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Начните бесплатно. Обновитесь когда будете готовы.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
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
                      {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-white/40 ml-2">/месяц</span>
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

                  <button className={`w-full py-4 font-bold uppercase tracking-wider transition-all rounded-xl ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-white/10 border border-white/20 hover:bg-white/20'
                  }`}>
                    {plan.price === 'Custom' ? 'Связаться' : 'Начать'}
                  </button>
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
