# 🔐 Настройка OAuth - Пошаговая инструкция

## ⚠️ Текущая проблема

Вы видите ошибку **"Error 401: invalid_client"** потому что OAuth credentials не настроены.

## ✅ Решение

Вам нужно получить OAuth credentials от Google и/или GitHub и добавить их в `backend/.env`

---

## 🚀 Вариант 1: GitHub OAuth (Рекомендуется - работает из России)

### 1. Создайте OAuth App

Откройте: **https://github.com/settings/developers**

Нажмите: **"New OAuth App"**

### 2. Заполните форму

```
Application name: nexiss
Homepage URL: http://localhost:5173
Authorization callback URL: http://localhost:3001/api/auth/github/callback
```

### 3. Получите credentials

После создания скопируйте:
- **Client ID**
- **Client Secret** (нажмите "Generate a new client secret")

### 4. Обновите backend/.env

Откройте файл `backend/.env` и замените:

```env
GITHUB_CLIENT_ID=Iv1.ваш_реальный_client_id
GITHUB_CLIENT_SECRET=ваш_реальный_client_secret
```

### 5. Перезапустите backend

```bash
# Остановите текущий процесс (Ctrl+C)
cd backend
npm run dev
```

### 6. Проверьте

Откройте http://localhost:5173/login и нажмите "Войти через GitHub"

---

## 🔴 Вариант 2: Google OAuth (может не работать из России)

### 1. Создайте проект в Google Cloud

Откройте: **https://console.cloud.google.com/**

Создайте новый проект

### 2. Настройте OAuth consent screen

1. Перейдите: **APIs & Services** → **OAuth consent screen**
2. Выберите: **External**
3. Заполните:
   - App name: `nexiss`
   - User support email: ваш email
   - Developer contact: ваш email
4. Добавьте тестового пользователя (ваш email)

### 3. Создайте OAuth Client ID

1. Перейдите: **APIs & Services** → **Credentials**
2. Нажмите: **Create Credentials** → **OAuth client ID**
3. Выберите: **Web application**
4. Добавьте Authorized redirect URI:
   ```
   http://localhost:3001/api/auth/google/callback
   ```

### 4. Получите credentials

Скопируйте:
- **Client ID**
- **Client Secret**

### 5. Обновите backend/.env

```env
GOOGLE_CLIENT_ID=ваш_реальный_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=ваш_реальный_client_secret
```

### 6. Перезапустите backend

```bash
cd backend
npm run dev
```

---

## 🧪 Проверка работы

1. Откройте: http://localhost:5173/login
2. Нажмите кнопку OAuth (Google или GitHub)
3. Авторизуйтесь
4. Вы будете перенаправлены в Dashboard

---

## 🐛 Если не работает

### Проверьте backend/.env

Убедитесь что:
- ✅ Нет лишних пробелов
- ✅ Нет кавычек вокруг значений
- ✅ Client ID и Secret скопированы полностью

### Проверьте callback URL

Должен быть точно:
- GitHub: `http://localhost:3001/api/auth/github/callback`
- Google: `http://localhost:3001/api/auth/google/callback`

### Перезапустите backend

После изменения `.env` обязательно перезапустите:
```bash
cd backend
npm run dev
```

---

## 📝 Пример правильного .env

```env
# GitHub OAuth
GITHUB_CLIENT_ID=Iv1.a1b2c3d4e5f6g7h8
GITHUB_CLIENT_SECRET=1234567890abcdef1234567890abcdef12345678

# Google OAuth
GOOGLE_CLIENT_ID=123456789-abc123def456.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-AbCdEfGhIjKlMnOpQrStUvWxYz
```

---

## ✨ Готово!

После настройки OAuth вы сможете:
- 🔐 Входить через GitHub
- 🔐 Входить через Google
- 👤 Автоматически создавать аккаунты при первом входе

Удачи! 🚀
