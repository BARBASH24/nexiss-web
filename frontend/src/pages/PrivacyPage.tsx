import React from 'react'
import { Link } from 'react-router-dom'

export const PrivacyPage: React.FC = () => {
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
          ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
        </h1>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-black mb-4 text-white">1. Введение</h2>
            <p>
              Настоящая Политика конфиденциальности описывает, как NEXISS IDE собирает, использует 
              и защищает вашу персональную информацию. Мы серьезно относимся к защите ваших данных 
              и соблюдаем применимое законодательство о защите персональных данных.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">2. Собираемая информация</h2>
            <p>Мы собираем следующие типы информации:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Информация учетной записи: имя, email, пароль</li>
              <li>Данные использования: информация о том, как вы используете IDE</li>
              <li>Технические данные: IP-адрес, тип браузера, операционная система</li>
              <li>Проекты и код: файлы, проекты и код, которые вы создаете в IDE</li>
              <li>Настройки IDE: конфигурация редактора, расширения, темы</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">3. Использование информации</h2>
            <p>Мы используем собранную информацию для:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Предоставления и улучшения функциональности IDE</li>
              <li>Персонализации вашего опыта разработки</li>
              <li>Обеспечения безопасности и предотвращения мошенничества</li>
              <li>Связи с вами по поводу обновлений IDE и новых функций</li>
              <li>Анализа использования для улучшения инструментов разработки</li>
              <li>Обучения AI-ассистента для лучших подсказок кода</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">4. Хранение данных</h2>
            <p>
              Ваши данные хранятся на защищенных серверах. Мы используем современные методы 
              шифрования и защиты для обеспечения безопасности ваших данных. Код, проекты и 
              настройки IDE хранятся в зашифрованном виде и доступны только вам.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">5. Передача данных третьим лицам</h2>
            <p>
              Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением 
              следующих случаев:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>С вашего явного согласия</li>
              <li>Для соблюдения законодательных требований</li>
              <li>Поставщикам услуг, которые помогают нам в работе (с соблюдением конфиденциальности)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">6. Cookies и аналитика</h2>
            <p>
              Мы используем cookies и аналогичные технологии для улучшения работы IDE, 
              анализа использования и персонализации интерфейса разработки. Вы можете управлять 
              настройками cookies в своем браузере.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">7. Ваши права</h2>
            <p>Вы имеете право:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>Получить доступ к своим персональным данным</li>
              <li>Исправить неточные данные</li>
              <li>Удалить свою учетную запись и данные</li>
              <li>Экспортировать свои данные</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">8. Безопасность детей</h2>
            <p>
              NEXISS IDE не предназначена для детей младше 13 лет. Мы сознательно не собираем 
              персональную информацию от детей младше 13 лет.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">9. Изменения политики</h2>
            <p>
              Мы можем обновлять настоящую Политику конфиденциальности. О существенных 
              изменениях мы уведомим вас по email или через уведомление в IDE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 text-white">10. Контакты</h2>
            <p>
              По вопросам конфиденциальности свяжитесь с нами:
            </p>
            <ul className="list-none mt-4 space-y-2">
              <li>
                Email: 
                <a href="mailto:privacy@nexiss.dev" className="text-white hover:underline ml-1">
                  privacy@nexiss.dev
                </a>
              </li>
            </ul>
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
