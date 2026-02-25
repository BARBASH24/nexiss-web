# 🔐 Настройка OAuth для nexiss

## 📋 Быстрый старт

Для работы OAuth авторизации нужно настроить credentials в Google и/или GitHub.

---

## 🔵 GitHub OAuth (Рекомендуется - работает из России!)

### Шаг 1: Создайте OAuth App на GitHub

1. Откройте https://github.com/settings/developers
2. Нажмите **"New OAuth App"**
3. Заполните форму:
   - **Application name**: `nexiss` (или любое название)
   - **Homepage URL**: `http://localhost:5173`
   - **Authorization callback URL**: `http://localhost:3001/api/auth/github/callback`
4. Нажмите **"Register application"**

### Шаг 2: Получите credentials

1. После создания вы увидите **Client ID** - скопируйте его
2. Нажмите **"Generate a new client secret"**
3. Скопируйте **Client Secret** (он показывается только один раз!)

### Шаг 3: Обновите backend/.env

Откройте `backend/.env` и замените:

```env
GITHUB_CLIENT_ID=ваш-client-id-из-github
GITHUB_CLIENT_SECRET=ваш-client-secret-из-github
```

### Шаг 4: Перезапустите backend

```bash
cd backend
npm run dev
```

✅ Готово! Кнопка "Войти через GitHub" теперь работает!

---

## 🔴 Google OAuth (может не работать из России)

### Шаг 1: Создайте проект в Google Cloud Console

1. Откройте https://console.cloud.google.com/
2. Создайте новый проект или выберите существующий
3. В меню слева выберите **"APIs & Services"** → **"Credentials"**

### Шаг 2: Настройте OAuth consent screen

1. Перейдите в **"OAuth consent screen"**
2. Выберите **"External"** и нажмите **"Create"**
3. Заполните обязательные поля:
   - **App name**: `nexiss`
   - **User support email**: ваш email
   - **Developer contact**: ваш email
4. Нажмите **"Save and Continue"**
5. На странице **"Scopes"** нажмите **"Save and Continue"**
6. На странице **"Test users"** добавьте свой email для тестирования
7. Нажмите **"Save and Continue"**

### Шаг 3: Создайте OAuth Client ID

1. Вернитесь в **"Credentials"**
2. Нажмите **"Create Credentials"** → **"OAuth client ID"**
3. Выберите **"Web application"**
4. Заполните:
   - **Name**: `nexiss Web Client`
   - **Authorized redirect URIs**: добавьте `http://localhost:3001/api/auth/google/callback`
5. Нажмите **"Create"**

### Шаг 4: Получите credentials

1. Скопируйте **Client ID**
2. Скопируйте **Client Secret**

### Шаг 5: Обновите backend/.env

Откройте `backend/.env` и замените:

```env
GOOGLE_CLIENT_ID=ваш-client-id-из-google
GOOGLE_CLIENT_SECRET=ваш-client-secret-из-google
```

### Шаг 6: Перезапустите backend

```bash
cd backend
npm run dev
```

✅ Готово! Кнопка "Войти через Google" теперь работает!

---

## 🧪 Тестирование

1. Откройте http://localhost:5173/login
2. Нажмите на кнопку OAuth (Google или GitHub)
3. Авторизуйтесь через выбранный сервис
4. Вы будете перенаправлены обратно в приложение

---

## ❗ Важные замечания

### Google OAuth
- ⚠️ Может не работать из России из-за блокировок
- 🔒 В режиме "Testing" можно добавить до 100 тестовых пользователей
- 📝 Для production нужно пройти верификацию Google

### GitHub OAuth
- ✅ Работает из России
- 🚀 Проще в настройке
- 📧 Требует доступ к email пользователя

---

## 🐛 Решение проблем

### Ошибка "invalid_client"
- Проверьте, что Client ID и Secret правильно скопированы в `.env`
- Убедитесь, что нет лишних пробелов
- Перезапустите backend после изменения `.env`

### Ошибка "redirect_uri_mismatch"
- Проверьте, что callback URL в настройках OAuth совпадает с URL в `.env`
- Для Google: `http://localhost:3001/api/auth/google/callback`
- Для GitHub: `http://localhost:3001/api/auth/github/callback`

### Кнопки OAuth не отображаются
- Убедитесь, что credentials настроены в `.env`
- Проверьте, что backend запущен и работает на порту 3001

---

## 📞 Нужна помощь?

Если возникли проблемы:
1. Проверьте логи backend в консоли
2. Убедитесь, что PostgreSQL запущен
3. Проверьте, что все переменные окружения заполнены

Удачи! 🚀
