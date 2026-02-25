# ⚡ Быстрая настройка OAuth

## GitHub (Рекомендуется)

1. Откройте: https://github.com/settings/developers
2. Нажмите **"New OAuth App"**
3. Заполните:
   - Application name: `nexiss`
   - Homepage URL: `http://localhost:5173`
   - Callback URL: `http://localhost:3001/api/auth/github/callback`
4. Скопируйте **Client ID** и **Client Secret**
5. Вставьте в `backend/.env`:
   ```
   GITHUB_CLIENT_ID=ваш-client-id
   GITHUB_CLIENT_SECRET=ваш-secret
   ```
6. Перезапустите backend: `cd backend && npm run dev`

✅ Готово!

---

## Google (может не работать из России)

1. Откройте: https://console.cloud.google.com/
2. Создайте проект
3. APIs & Services → Credentials → Create OAuth Client ID
4. Web application
5. Redirect URI: `http://localhost:3001/api/auth/google/callback`
6. Скопируйте Client ID и Secret
7. Вставьте в `backend/.env`:
   ```
   GOOGLE_CLIENT_ID=ваш-client-id
   GOOGLE_CLIENT_SECRET=ваш-secret
   ```
8. Перезапустите backend

✅ Готово!

---

**Подробная инструкция:** см. `OAUTH_SETUP_GUIDE.md`
