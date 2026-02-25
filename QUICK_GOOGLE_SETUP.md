# Быстрая настройка Google OAuth (5 минут)

## Вы сейчас в API Library - нужно перейти в Credentials

### Шаг 1: Перейти в Credentials
В левом меню нажмите **"Credentials"** (Учетные данные)

Или перейдите напрямую: https://console.cloud.google.com/apis/credentials?project=nexiss

---

### Шаг 2: Настроить OAuth Consent Screen (если еще не настроено)

Если увидите предупреждение "To create an OAuth client ID, you must first configure your consent screen":

1. Нажмите **"CONFIGURE CONSENT SCREEN"**
2. Выберите **"External"** → **CREATE**
3. Заполните обязательные поля:
   - App name: `nexiss`
   - User support email: выберите свой email
   - Developer contact information: ваш email
4. Нажмите **"SAVE AND CONTINUE"**
5. На странице Scopes нажмите **"ADD OR REMOVE SCOPES"**
6. Найдите и отметьте:
   - ✅ `.../auth/userinfo.email`
   - ✅ `.../auth/userinfo.profile`
7. Нажмите **"UPDATE"** → **"SAVE AND CONTINUE"**
8. На странице Test users нажмите **"+ ADD USERS"**
9. Добавьте свой email → **"ADD"** → **"SAVE AND CONTINUE"**
10. Нажмите **"BACK TO DASHBOARD"**

---

### Шаг 3: Создать OAuth Client ID

1. Вернитесь в **Credentials**
2. Нажмите **"+ CREATE CREDENTIALS"** (вверху)
3. Выберите **"OAuth client ID"**
4. Application type: **"Web application"**
5. Name: `nexiss Web Client`
6. В разделе **"Authorized redirect URIs"** нажмите **"+ ADD URI"**
7. Вставьте:
   ```
   http://localhost:3001/api/auth/google/callback
   ```
8. Нажмите **"CREATE"**

---

### Шаг 4: Скопировать credentials

После создания появится окно с:
- **Client ID** (начинается с цифр, заканчивается на `.apps.googleusercontent.com`)
- **Client secret** (случайная строка)

Скопируйте оба значения!

---

### Шаг 5: Добавить в .env

Откройте файл `backend/.env` и замените:

```env
GOOGLE_CLIENT_ID=ваш-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=ваш-client-secret
```

---

### Шаг 6: Перезапустить backend

Backend автоматически перезапустится (watch mode включен).

Или вручную:
```bash
docker-compose restart backend
```

---

### Шаг 7: Тестировать!

1. Откройте http://localhost:5173/login
2. Нажмите **"Войти через Google"**
3. Выберите свой Google аккаунт
4. Разрешите доступ
5. Готово! Вы на dashboard

---

## Если что-то не работает:

### Ошибка "redirect_uri_mismatch"
- Проверьте что в Google Console точно указан: `http://localhost:3001/api/auth/google/callback`
- Без лишних слешей в конце
- Точно `http://` а не `https://`

### Ошибка "Access blocked: This app's request is invalid"
- Убедитесь что добавили свой email в Test users
- Проверьте что scopes добавлены (userinfo.email и userinfo.profile)

### Ошибка "invalid_client"
- Проверьте что Client ID и Secret правильно скопированы в .env
- Перезапустите backend после изменения .env
