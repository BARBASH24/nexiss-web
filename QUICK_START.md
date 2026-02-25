# Быстрый старт с Google OAuth

## ✅ Что уже сделано:

1. ✅ Установлены все npm зависимости для backend (passport, passport-google-oauth20, express-session)
2. ✅ Создана конфигурация Passport для Google OAuth
3. ✅ Добавлены API endpoints для Google OAuth
4. ✅ Создана страница callback для обработки OAuth
5. ✅ Обновлен frontend с кнопкой "Войти через Google"
6. ✅ Настроены все файлы конфигурации

## 🔧 Что нужно сделать вам:

### 1. Запустить Docker Desktop
Откройте Docker Desktop на вашем компьютере

### 2. Получить Google OAuth Credentials

Следуйте инструкциям в файле `GOOGLE_OAUTH_SETUP.md`:

1. Перейдите на https://console.cloud.google.com/
2. Создайте новый проект
3. Настройте OAuth consent screen
4. Создайте OAuth 2.0 Client ID
5. Добавьте redirect URI: `http://localhost:3001/api/auth/google/callback`
6. Скопируйте Client ID и Client Secret

### 3. Обновить .env файл

Откройте `backend/.env` и замените:

```env
GOOGLE_CLIENT_ID=ваш-реальный-client-id
GOOGLE_CLIENT_SECRET=ваш-реальный-client-secret
```

### 4. Запустить проект

```bash
# Из корневой директории
docker-compose up
```

Или запустите вручную:

```bash
# Терминал 1 - База данных
docker-compose up db

# Терминал 2 - Backend
cd backend
npm run dev

# Терминал 3 - Frontend (уже запущен)
cd frontend
npm run dev
```

### 5. Тестирование

1. Откройте http://localhost:5173/login
2. Нажмите "Войти через Google"
3. Выберите Google аккаунт
4. После успешной авторизации вы будете перенаправлены на dashboard

## 📝 Примечания

- Без реальных Google credentials кнопка будет показывать ошибку
- Для тестирования добавьте свой email в Test users в Google Console
- Frontend уже запущен на http://localhost:5173
- Backend будет на http://localhost:3001 после запуска Docker

## 🎨 Что изменилось на странице входа

- ✅ Добавлен логотип logo.svg
- ✅ Кнопка "Войти через Google" с цветной иконкой
- ✅ Улучшен дизайн под черно-белый минималистичный стиль
- ✅ Добавлены rounded углы и hover эффекты
- ✅ Разделитель "или" между Google и обычным входом
