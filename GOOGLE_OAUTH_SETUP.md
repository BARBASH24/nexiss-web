# Настройка Google OAuth для nexiss

## Шаг 1: Создание проекта в Google Cloud Console

1. Перейдите на [Google Cloud Console](https://console.cloud.google.com/)
2. Создайте новый проект или выберите существующий
3. В меню навигации выберите "APIs & Services" > "Credentials"

## Шаг 2: Настройка OAuth consent screen

1. Нажмите "Configure Consent Screen"
2. Выберите "External" (для тестирования) или "Internal" (для организации)
3. Заполните обязательные поля:
   - App name: `nexiss`
   - User support email: ваш email
   - Developer contact information: ваш email
4. Нажмите "Save and Continue"
5. На странице "Scopes" нажмите "Add or Remove Scopes"
6. Добавьте следующие scopes:
   - `userinfo.email`
   - `userinfo.profile`
7. Нажмите "Save and Continue"
8. На странице "Test users" добавьте email адреса для тестирования (если выбрали External)
9. Нажмите "Save and Continue"

## Шаг 3: Создание OAuth 2.0 Client ID

1. Вернитесь на страницу "Credentials"
2. Нажмите "Create Credentials" > "OAuth client ID"
3. Выберите "Web application"
4. Заполните поля:
   - Name: `nexiss Web Client`
   - Authorized JavaScript origins:
     - `http://localhost:5173`
     - `http://localhost:3001`
   - Authorized redirect URIs:
     - `http://localhost:3001/api/auth/google/callback`
5. Нажмите "Create"
6. Скопируйте Client ID и Client Secret

## Шаг 4: Настройка переменных окружения

1. Откройте файл `backend/.env`
2. Замените значения:
   ```env
   GOOGLE_CLIENT_ID=ваш-client-id
   GOOGLE_CLIENT_SECRET=ваш-client-secret
   ```

## Шаг 5: Установка зависимостей

```bash
cd backend
npm install
```

## Шаг 6: Перезапуск сервера

```bash
# Остановите текущий сервер (Ctrl+C)
# Запустите заново
npm run dev
```

## Тестирование

1. Откройте браузер и перейдите на `http://localhost:5173/login`
2. Нажмите кнопку "Войти через Google"
3. Выберите Google аккаунт
4. Разрешите доступ к email и профилю
5. Вы будете перенаправлены на dashboard

## Важные замечания

- Для production необходимо:
  - Изменить redirect URIs на production домен
  - Опубликовать OAuth consent screen (пройти верификацию Google)
  - Использовать HTTPS
  - Обновить `FRONTEND_URL` и `GOOGLE_CALLBACK_URL` в `.env`

## Troubleshooting

### Ошибка "redirect_uri_mismatch"
- Убедитесь, что redirect URI в Google Console точно совпадает с `GOOGLE_CALLBACK_URL` в `.env`
- Проверьте, что нет лишних слешей в конце URL

### Ошибка "invalid_client"
- Проверьте правильность `GOOGLE_CLIENT_ID` и `GOOGLE_CLIENT_SECRET`
- Убедитесь, что credentials активны в Google Console

### Пользователь не может войти
- Если используете External + Testing mode, добавьте email пользователя в Test users
- Проверьте, что scopes правильно настроены
