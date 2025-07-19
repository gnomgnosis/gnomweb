# GNOM Website

Официальный веб-сайт проекта GNOM на Next.js

## 🚀 Быстрый старт

### Предварительные требования
- Node.js 20.x
- npm 9+
- Docker 24+ (опционально)

### 1. Установка
```bash
git clone https://github.com/your-org/gnomsite.git
cd gnomsite
npm install
```

### 2. Конфигурация окружения
Создайте файл `.env.local` в корне проекта:
```bash
NEXT_PUBLIC_API_URL=https://api.gnom.com
NEXT_PUBLIC_GA_ID=UA-XXXXX-Y
# Другие переменные...
```

### 3. Режим разработки
```bash
npm run dev
```
Откройте http://localhost:3000 в браузере

## 🐳 Docker-развертывание
### Сборка образа
```bash
docker build -t gnomsite:latest .
```

### Запуск контейнера
```bash
docker run -d \
  -p 3000:3000 \
  --name gnomsite \
  --env-file .env.production \
  gnomsite:latest
```

## 🛠 Основные команды
| Команда           | Назначение                      |
|-------------------|---------------------------------|
| `npm run build`   | Сборка production-версии        |
| `npm run start`   | Запуск production-сервера       |
| `npm run lint`    | Проверка кода ESLint            |
| `npm run format`  | Форматирование Prettier         |
| `npm run test`    | Запуск тестов Jest              |

## 📂 Архитектура проекта
```
app/
├── components/    # UI-компоненты (Atomic Design)
├── hooks/         # Кастомные хуки
├── lib/           # Утилиты и helpers
├── public/        # Статические ресурсы
│   ├── img/       # Изображения
│   └── cron/      # Скрипты задач
├── styles/        # Глобальные стили
├── layout.tsx     # Корневой лэйаут
└── page.tsx       # Главная страница
```

## 🔧 Конфигурация
- `tailwind.config.js` - настройки Tailwind CSS
- `next.config.mjs` - кастомные конфиги Next.js
- `.dockerignore` - исключения для Docker-сборки

## 🚨 Устранение неполадок
- **Ошибки сборки**: Убедитесь в совместимости версий Node.js
- **Стили не применяются**: Запустите `npm run format`
- **Docker-ошибки**: Проверьте наличие `.env.production`

## 📄 Лицензия
MIT License © 2024 GNOM Team