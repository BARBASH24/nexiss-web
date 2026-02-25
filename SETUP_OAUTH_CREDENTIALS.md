# Настройка OAuth для вашего проекта nexiss

Вижу что у вас уже есть проект в Google Cloud Console! Отлично, теперь просто добавим OAuth credentials.

## Вариант 1: Google OAuth (для вашего существующего проекта)

### Шаг 1: OAuth Consent Screen

1. В Google Cloud Console перейдите в **APIs & Services** > **OAuth consent screen**
2. Если еще не настроено:
   - Выберите **External** (для тестирования)
   - App name: `nexiss`
   - User support email: ваш email
   - Developer contact: ваш email
3. Нажмите **Save and Continue**
4. На странице **Scopes** нажмите **Add or Remove Scopes**
5. Добавьте:
   - `userinfo.email`
   - `userinfo.profile`
6. Нажмите **Save and Continue**
7. На странице **Test users** добавьте свой email для тестирования
8. Нажмите **Save and Continue**

### Шаг 2: Создать OAuth Client ID

1. Перейдите в **APIs & Services** > **Credentials**
2. Нажмите **+ CREATE CREDENTIALS** > **OAuth client ID**
3. Application type: **Web application**
4. Name: `nexiss Web Client`
5. **Authorized redirect URIs** - нажмите **+ ADD URI** и добавьте:
   ```
   http://localhost:3001/api/auth/google/callback
   ```
6. Нажмите **CREATE**
7. Скопируйте **Client ID** и **Client Secret**

### Шаг 3: Добавить credentials в .env

Откройте `backend/.env` и замените:

```env
GOOGLE_CLIENT_ID=ваш-скопированный-client-id
GOOGLE_CLIENT_SECRET=ваш-скопированный-client-secret
```

---

## Вариант 2: GitHub OAuth (Проще и работает из России!)

### Шаг 1: Создать OAuth App на GitHub

1. Перейдите на https://github.com/settings/developers
2. Нажмите **New OAuth App**
3. Заполните:
   - **Application name**: `nexiss`
   - **Homepage URL**: `http://localhost:5173`
   - **Authorization callback URL**: `http://localhost:3001/api/auth/github/callback`
4. Нажмите **Register application**
5. Скопируйте **Client ID**
6. Нажмите **Generate a new client secret** и скопируйте его

### Шаг 2: Добавить credentials в .env

Откройте `backend/.env` и замените:

```env
GITHUB_CLIENT_ID=ваш-github-client-id
GITHUB_CLIENT_SECRET=ваш-github-client-secret
```

---

## Шаг 4: Перезапустить проект

После добавления credentials в `.env`:

```bash
# Остановить контейнеры
docker-compose down

# Запустить заново
docker-compose up --build
```

Или если запущено локально - backend автоматически перезапустится (watch mode).

---

## Тестирование

1. Откройте http://localhost:5173/login
2. Нажмите **"Войти через Google"** или **"Войти через GitHub"**
3. Авторизуйтесь
4. Вы будете перенаправлены на dashboard

---

## Что уже добавлено:

- ✅ Кнопка "Войти через Google" с цветной иконкой
- ✅ Кнопка "Войти через GitHub" с иконкой
- ✅ Backend endpoints для обоих провайдеров
- ✅ Автоматическое создание пользователя при первом входе
- ✅ JWT токены для авторизации
- ✅ Редирект на dashboard после входа

---

## Рекомендация:

Для разработки из России рекомендую использовать **GitHub OAuth** - он проще настраивается и не требует VPN.

Google OAuth тоже будет работать, но может потребовать VPN при первой настройке consent screen.
