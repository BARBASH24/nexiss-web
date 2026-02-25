# nexiss - Full Stack Project

AI-Powered IDE для разработки с полным backend и frontend.

## 🚀 Быстрый старт

### С Docker (рекомендуется)

```bash
docker-compose up -d
```

Откройте:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001
- PostgreSQL: localhost:5432

### Без Docker

#### Backend
```bash
cd backend
npm install
npm run dev
```

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 📦 Технологии

### Frontend
- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router

### Backend
- Node.js + Express
- PostgreSQL
- Passport.js (OAuth)
- JWT Authentication

## 🗄️ База данных

```sql
CREATE DATABASE nexiss_db;
CREATE USER nexiss WITH PASSWORD 'nexiss_password';
GRANT ALL PRIVILEGES ON DATABASE nexiss_db TO nexiss;
```

## 🔐 OAuth Setup

Настройте OAuth в `backend/.env`:

```env
# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 📝 Структура проекта

```
nexiss/
├── frontend/          # React + TypeScript
│   ├── src/
│   │   ├── app/      # App component
│   │   ├── pages/    # All pages
│   │   ├── widgets/  # Reusable widgets
│   │   └── services/ # API services
│   └── public/       # Static files
├── backend/          # Node.js + Express
│   └── src/
│       ├── config/   # Passport config
│       ├── db/       # Database
│       ├── middleware/
│       └── routes/   # API routes
└── docker-compose.yml
```

## 🌐 API Endpoints

- `POST /api/auth/github` - GitHub OAuth
- `POST /api/auth/google` - Google OAuth
- `GET /api/auth/callback` - OAuth callback
- `GET /api/user` - Get user info (protected)

## 📄 Лицензия

MIT
