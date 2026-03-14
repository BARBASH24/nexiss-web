import React from 'react'
import { Link } from 'react-router-dom'

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 py-6">
        <div className="container mx-auto px-6">
          <Link to="/" className="flex items-center space-x-3 w-fit">
            <img src="/logo.svg" alt="nexiss" className="w-10 h-10" />
            <span className="text-2xl font-black tracking-tighter">NEXISS</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-black mb-8 tracking-tighter">
          УСЛОВИЯ ПРЕДОСТАВЛЕНИЯ УСЛУГ
        </h1>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-black mb-4 text-white">1. Принятие условий</h2>
            <p>
              Используя NEXISS, вы соглашаетесь с настоящими Условиями предоставления услуг. 
              Если вы не согласны с какими-либо условиями, пожалуйста, не используйте наш сервис.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">2. Описание услуги</h2>
            <p>
              NEXISS — это интегрированная среда разработки (IDE), предоставляющая 
              инструменты для написания, отладки и запуска кода. Сервис включает редактор кода, 
              встроенный терминал, AI-ассистента и инструменты для управления проектами.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">3. Учетная запись пользователя</h2>
            <p>
              Вы несете ответственность за сохранение конфиденциальности вашей учетной записи 
              и пароля. Вы соглашаетесь немедленно уведомлять нас о любом несанкционированном 
              использовании вашей учетной записи.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">4. Использование сервиса</h2>
            <p>
              Вы соглашаетесь использовать NEXISS только в законных целях и в соответствии 
              с применимым законодательством. Запрещается использовать сервис для:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Нарушения прав интеллектуальной собственности</li>
              <li>Распространения вредоносного программного обеспечения</li>
              <li>Незаконной деятельности любого рода</li>
              <li>Попыток получения несанкционированного доступа к системам</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">5. Интеллектуальная собственность</h2>
            <p>
              Все права на NEXISS IDE, включая программное обеспечение, дизайн, логотипы и контент, 
              принадлежат нам или нашим лицензиарам. Вы сохраняете все права на код и проекты, 
              которые создаете с помощью NEXISS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">6. Ограничение ответственности</h2>
            <p>
              NEXISS IDE предоставляется "как есть" без каких-либо гарантий. Мы не несем 
              ответственности за любые убытки, возникшие в результате использования или 
              невозможности использования IDE, включая потерю данных или кода.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">7. Изменения условий</h2>
            <p>
              Мы оставляем за собой право изменять настоящие Условия в любое время. 
              Продолжение использования IDE после внесения изменений означает ваше 
              согласие с новыми условиями.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">8. Контакты</h2>
            <p>
              По вопросам, связанным с настоящими Условиями, свяжитесь с нами по адресу: 
              <a href="mailto:support@nexiss.dev" className="text-white hover:underline ml-1">
                support@nexiss.dev
              </a>
            </p>
          </section>

          <p className="text-sm text-white/40 pt-8">
            Последнее обновление: 12 января 2025
          </p>
        </div>

        {/* Back button */}
        <div className="mt-12">
          <Link 
            to="/login" 
            className="text-sm text-white/40 hover:text-white transition-colors uppercase tracking-wider font-bold inline-flex items-center space-x-2 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Назад</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
