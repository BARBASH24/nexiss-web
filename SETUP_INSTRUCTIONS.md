# Инструкции по запуску с Google OAuth

## 1. Установка зависимостей

```bash
cd backend
npm install
```

Это установит новые пакеты:
- `passport` - middleware для аутентификации
- `passport-google-oauth20` - стратегия Google OAuth 2.0
- `express-session` - управление сессиями

## 2. Настройка Google OAuth

Следуйте инструкциям в файле `GOOGLE_OAUTH_SETUP.md` для получения Google Client ID и Secret.

## 3. Обновление .env файла

Откройте `backend/.env` и добавьте ваши Google credentials:

```env
GOOGLE_CLIENT_ID=ваш-google-client-id-из-console
GOOGLE_CLIENT_SECRET=ваш-google-client-secret-из-console
```

## 4. Запуск проекта

### Вариант 1: С Docker (рекомендуется)

```bash
# Из корневой директории
docker-compose up --build
```

### Вариант 2: Локально

```bash
# Терминал 1 - База данных
docker-compose up db

# Терминал 2 - Backend
cd backend
npm run dev

# Терминал 3 - Frontend
cd frontend
npm run dev
```

## 5. Тестирование

1. Откройте `http://localhost:5173/login`
2. Нажмите "Войти через Google"
3. Выберите Google аккаунт
4. После успешной авторизации вы будете перенаправлены на dashboard

## Что было добавлено

### Backend:
- ✅ Passport.js для OAuth
- ✅ Google OAuth Strategy
- ✅ Endpoints: `/api/auth/google` и `/api/auth/google/callback`
- ✅ Session management
- ✅ Автоматическое создание пользователя при первом входе через Google

### Frontend:
- ✅ Кнопка "Войти через Google" с иконкой
- ✅ Страница callback для обработки OAuth redirect
- ✅ Автоматическое сохранение JWT token
- ✅ Редирект на dashboard после успешного входа

## Примечания

- Google OAuth работает только с настроенными Client ID и Secret
- Для тестирования используйте режим "External" в Google Console
- Добавьте тестовые email адреса в Google Console если используете External mode
- В production необходимо пройти верификацию Google и использовать HTTPS
