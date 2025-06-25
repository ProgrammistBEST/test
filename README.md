# 🚀 BestHub

BestHub — это модульное fullstack-приложение на основе **React + TypeScript** (frontend) и **Node.js + Express** (backend) с поддержкой **Redis**, **RabbitMQ**, **Docker**, и возможностью масштабирования под микросервисную архитектуру.

---

## 📑 Содержание

- [📦 Технологии](#-технологии)
- [📁 Структура проекта](#-структура-проекта)
- [🚀 Быстрый старт](#-быстрый-старт)
  - [🔧 Локальный запуск (Dev Mode)](#-локальный-запуск-dev-mode)
  - [🐳 Docker Compose](#-docker-compose)
- [📌 Полезные команды](#-полезные-команды)
- [📚 Swagger-документация](#-swagger-документация)
- [🧠 Архитектурные принципы](#-архитектурные-принципы)
- [📂 Структура каталогов](#-структура-каталогов)
- [📬 Контакты](#-контакты)

---

## 📦 Технологии

### 🔷 Frontend

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)
- [React.memo, useMemo, React.lazy, Suspense] — оптимизация
- [MUI](https://mui.com/) — UI-компоненты

### 🔶 Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Redis](https://redis.io/) — кэширование
- [RabbitMQ](https://www.rabbitmq.com/) — очереди задач
- [Swagger](https://swagger.io/) — документация API
- [Docker](https://www.docker.com/) + [Kubernetes](https://kubernetes.io/) (в перспективе)

---

## 🚀 Быстрый старт

### 🔧 Локальный запуск (Dev Mode)

> Требования:
>
> - Node.js `>=18`
> - Redis и RabbitMQ (локально или через Docker)

```bash
# Клонируем репозиторий
git clone https://github.com/BestProgrammist/best-hub.git
cd best-hub

# Устанавливаем зависимости
cd frontend && npm install
cd ../backend && npm install
```

### 🏃 Запуск

```
# Backend (в dev-режиме)
cd backend
npm run dev

# Frontend (Vite + React)
cd ../frontend
npm run dev |

```

## 📂 Структура каталогов

 best-hub/
├── frontend/                # Клиентская часть (React + Vite)
│   ├── src/
│   │   ├── components/      # Общие UI-компоненты
│   │   ├── features/        # Отдельные фичи (bounded context)
│   │   ├── layouts/         # Макеты страниц
│   │   ├── pages/           # Страницы приложения
│   │   ├── services/        # API-запросы (axios)
│   │   ├── store/           # Redux Toolkit store
│   │   ├── hooks/           # Пользовательские хуки
│   │   ├── contexts/        # Глобальные контексты
│   │   ├── providers/       # Провайдеры (Theme, Auth и др.)
│   │   ├── routes/          # Конфигурация маршрутов
│   │   └── utils/           # Утилиты
│   └── vite.config.ts
│
├── backend/                 # Серверная часть (Node.js + Express)
│   ├── src/
│   │   ├── config/          # Конфигурации (DB, Redis, RabbitMQ)
│   │   ├── controllers/     # Контроллеры маршрутов
│   │   ├── routes/          # Эндпоинты
│   │   ├── models/          # CRUD-логика и бизнес-слой
│   │   ├── services/        # Внешние интеграции (WB и др.)
│   │   ├── middleware/      # Middleware
│   │   ├── utils/           # Утилиты
│   │   ├── logger/          # Логгирование
│   │   ├── docs/            # Swagger документация
│   │   └── server.js        # Точка входа
│   └── tests/               # Юнит-тесты
│
├── docker-compose.yml       # Общий Docker-оркестратор
├── README.md                # Документация проекта
└── .env                     # Переменные окружения
