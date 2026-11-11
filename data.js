/* Curated 2026-11-11. Only verified URLs. */
window.SD_DATA = {
  "updated": "2026-11-11",
  "levels": {
    "intro": "начальный",
    "mid": "средний",
    "adv": "продвинутый",
    "ref": "справочник"
  },
  "kinds": {
    "book": "Книги",
    "article": "Статьи и репозитории",
    "video": "Видео и курсы",
    "practice": "Практика",
    "ai": "ИИ-системы"
  },
  "coreBooks": [
    "ddia",
    "sdi1",
    "sdi2",
    "fosa",
    "microservices",
    "hard-parts",
    "release-it",
    "sre-book",
    "ai-engineering",
    "dmls"
  ],
  "items": [
    {
      "id": "ddia",
      "kind": "book",
      "title": "Designing Data-Intensive Applications",
      "authors": "Martin Kleppmann, Chris Riccomini (2-е изд.)",
      "url": "https://dataintensive.net/",
      "extraUrl": {
        "label": "О 2-м издании (март 2026)",
        "href": "https://martin.kleppmann.com/2026/03/24/designing-data-intensive-applications-2e.html"
      },
      "ru": {
        "title": "Высоконагруженные приложения. Программирование, масштабирование, поддержка",
        "url": "https://www.labirint.ru/books/632959",
        "note": "перевод 1-го издания, «Питер»"
      },
      "note": "Главная книга про данные, репликацию, партиции и согласованность. В неделях указаны главы 1-го издания — они совпадают с русским переводом.",
      "level": "adv",
      "time": "книга целиком · 25–40 ч"
    },
    {
      "id": "sdi1",
      "kind": "book",
      "title": "System Design Interview. Volume 1",
      "authors": "Alex Xu",
      "url": "https://bytebytego.com/",
      "extraUrl": {
        "label": "Чем том 1 отличается от тома 2",
        "href": "https://blog.bytebytego.com/p/system-design-interview-books-volume"
      },
      "ru": {
        "title": "System Design. Подготовка к сложному интервью",
        "url": "https://www.chitai-gorod.ru/product/system-design-podgotovka-k-slozhnomu-intervyu-2898161"
      },
      "note": "Каркас интервью и разобранные системы со схемами. По неделям читаются отдельные главы.",
      "level": "mid",
      "time": "книга целиком · 12–16 ч"
    },
    {
      "id": "sdi2",
      "kind": "book",
      "title": "System Design Interview. Volume 2",
      "authors": "Alex Xu, Sahn Lam",
      "url": "https://bytebytego.com/",
      "ru": {
        "title": "System Design II. Распределенные системы. Подготовка к сложному интервью",
        "url": "https://www.labirint.ru/books/1030640/"
      },
      "note": "Более сложные кейсы: очереди, объектное хранилище, платежи, биржа.",
      "level": "adv",
      "time": "книга целиком · 12–16 ч"
    },
    {
      "id": "fosa",
      "kind": "book",
      "title": "Fundamentals of Software Architecture, 2nd Edition",
      "authors": "Mark Richards, Neal Ford",
      "url": "https://www.developertoarchitect.com/books.html",
      "extraUrl": {
        "label": "Страница Нила Форда",
        "href": "https://nealford.com/books/"
      },
      "ru": {
        "title": "Фундаментальный подход к программной архитектуре",
        "url": "https://www.labirint.ru/books/1032887/"
      },
      "note": "Стили архитектуры, характеристики качества и роль архитектора.",
      "level": "mid",
      "time": "книга целиком · 15–20 ч"
    },
    {
      "id": "microservices",
      "kind": "book",
      "title": "Building Microservices, 2nd Edition",
      "authors": "Sam Newman",
      "url": "https://samnewman.io/books/building_microservices_2nd_edition/",
      "ru": {
        "title": "Создание микросервисов, 2-е издание",
        "url": "https://www.labirint.ru/books/937994/"
      },
      "note": "Когда дробить систему, как делить данные и ответственность команд.",
      "level": "mid",
      "time": "книга целиком · 15–20 ч"
    },
    {
      "id": "hard-parts",
      "kind": "book",
      "title": "Software Architecture: The Hard Parts",
      "authors": "Neal Ford, Mark Richards, Pramod Sadalage, Zhamak Dehghani",
      "url": "https://nealford.com/books/",
      "ru": {
        "title": "Современный подход к программной архитектуре: сложные компромиссы",
        "url": "https://www.piter.com/collection/programmirovanie-razrabotka-programnogo-obespecheniya/product/sovremennyy-podhod-k-programmnoy-arhitekture-slozhnye-kompromissy"
      },
      "note": "Декомпозиция, связность, саги и granularity — книга про трудные решения.",
      "level": "adv",
      "time": "книга целиком · 15–20 ч"
    },
    {
      "id": "release-it",
      "kind": "book",
      "title": "Release It!, 2nd Edition",
      "authors": "Michael T. Nygard",
      "url": "https://pragprog.com/titles/mnee2/release-it-second-edition/",
      "ru": {
        "title": "Release it! Проектирование и дизайн ПО для тех, кому не всё равно",
        "url": "https://www.piter.com/collection/programmirovanie-razrabotka-programnogo-obespecheniya/product/release-it-proektirovanie-i-dizayn-po-dlya-teh-komu-ne-vsyo-ravno"
      },
      "note": "Устойчивость в проде: каскадные отказы, таймауты, circuit breaker, backpressure.",
      "level": "mid",
      "time": "книга целиком · 10–14 ч"
    },
    {
      "id": "sre-book",
      "kind": "book",
      "title": "Site Reliability Engineering",
      "authors": "Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy (Google)",
      "url": "https://sre.google/sre-book/table-of-contents/",
      "extraUrl": {
        "label": "Все книги SRE от Google, бесплатно",
        "href": "https://sre.google/books/"
      },
      "ru": {
        "title": "Site Reliability Engineering. Надежность и безотказность как в Google",
        "url": "https://www.litres.ru/book/betsi-beyer-17338311/site-reliability-engineering-nadezhnost-i-bezotkaznos-39123367/"
      },
      "note": "Официальная бесплатная книга Google: SLO, error budget и культура надёжности.",
      "level": "mid",
      "time": "выборочно · 8–12 ч",
      "free": true
    },
    {
      "id": "ai-engineering",
      "kind": "book",
      "title": "AI Engineering",
      "authors": "Chip Huyen",
      "url": "https://huyenchip.com/books/",
      "ru": {
        "title": "AI-инженерия. Построение приложений с использованием базовых моделей",
        "url": "https://www.dkmg.ru/tovar/1243836"
      },
      "note": "Как строить продукты на фундаментных моделях: RAG, оценка, архитектура приложения.",
      "level": "mid",
      "time": "книга целиком · 16–22 ч",
      "tags": [
        "ai"
      ]
    },
    {
      "id": "dmls",
      "kind": "book",
      "title": "Designing Machine Learning Systems",
      "authors": "Chip Huyen",
      "url": "https://huyenchip.com/books/",
      "ru": {
        "title": "Проектирование систем машинного обучения",
        "url": "https://bhv.ru/product/proektirovanie-sistem-mashinnogo-obucheniya/"
      },
      "note": "Жизненный цикл ML-системы: данные, обучение, сервинг, мониторинг дрейфа.",
      "level": "mid",
      "time": "книга целиком · 14–20 ч",
      "tags": [
        "ai"
      ]
    },
    {
      "id": "mdn-http-ru",
      "kind": "article",
      "title": "Обзор HTTP (MDN, на русском)",
      "url": "https://developer.mozilla.org/ru/docs/Web/HTTP/Guides/Overview",
      "note": "Канонический обзор протокола: запрос/ответ, заголовки, TLS, cookie, почему HTTP stateless.",
      "level": "intro",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "hpbn-latency",
      "kind": "book",
      "title": "HPBN: Primer on Latency and Bandwidth",
      "authors": "Ilya Grigorik",
      "url": "https://hpbn.co/primer-on-latency-and-bandwidth/",
      "extraUrl": {
        "label": "Вся книга бесплатно",
        "href": "https://hpbn.co/"
      },
      "note": "Почему в вебе задержка важнее пропускной способности и откуда берётся RTT.",
      "level": "mid",
      "time": "45 мин",
      "free": true
    },
    {
      "id": "hpbn-tcp",
      "kind": "book",
      "title": "HPBN: Building Blocks of TCP",
      "authors": "Ilya Grigorik",
      "url": "https://hpbn.co/building-blocks-of-tcp/",
      "note": "Handshake, slow start, congestion control — почему «открыть много соединений» само по себе не решение.",
      "level": "mid",
      "time": "1 ч",
      "free": true
    },
    {
      "id": "hpbn-tls",
      "kind": "book",
      "title": "HPBN: Transport Layer Security (TLS)",
      "authors": "Ilya Grigorik",
      "url": "https://hpbn.co/transport-layer-security-tls/",
      "note": "Как TLS удлиняет handshake и что дают TLS 1.3 и session resumption.",
      "level": "mid",
      "time": "45 мин",
      "free": true
    },
    {
      "id": "hpbn-http",
      "kind": "book",
      "title": "HPBN: HTTP/2",
      "authors": "Ilya Grigorik",
      "url": "https://hpbn.co/http2/",
      "extraUrl": {
        "label": "Краткая история HTTP",
        "href": "https://hpbn.co/brief-history-of-http/"
      },
      "note": "Мультиплексирование и приоритизация: чем HTTP/2 лучше HTTP/1.1 и какие проблемы остаются.",
      "level": "mid",
      "time": "50 мин",
      "free": true
    },
    {
      "id": "hpbn-ws",
      "kind": "book",
      "title": "HPBN: WebSocket",
      "authors": "Ilya Grigorik",
      "url": "https://hpbn.co/websocket/",
      "note": "Когда нужен постоянный канал и чем сокет отличается от обычного HTTP.",
      "level": "mid",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "yandex-http-api",
      "kind": "video",
      "title": "ШБР 2023: Как проектировать HTTP API",
      "authors": "Александр Куваев, Яндекс",
      "url": "https://education.yandex.ru/knowledge/shbr-2023-kak-proektirovat-http-api",
      "note": "Русскоязычная лекция Яндекса: HTTP, REST API, типичные ошибки и место RPC/gRPC.",
      "level": "mid",
      "time": "1.5 ч",
      "free": true
    },
    {
      "id": "yt-hnasr",
      "kind": "video",
      "title": "Hussein Nasser — HTTP, TCP, прокси",
      "url": "https://www.youtube.com/@hnasr",
      "note": "Выберите 1–2 ролика про HTTP и внутренности прокси. Глубоко показывает, что происходит на проводе.",
      "level": "adv",
      "time": "1–1.5 ч",
      "free": true
    },
    {
      "id": "c4",
      "kind": "article",
      "title": "C4 Model",
      "authors": "Simon Brown",
      "url": "https://c4model.com/",
      "note": "Иерархия context / container / component — общий язык для схем, а не коробки наугад.",
      "level": "intro",
      "time": "30 мин",
      "free": true
    },
    {
      "id": "practice-w1-path",
      "kind": "practice",
      "title": "Практика: путь запроса на канвасе",
      "url": "https://paperdraw.dev/",
      "extraUrl": {
        "label": "Или набросать схему в Excalidraw",
        "href": "https://excalidraw.com/"
      },
      "note": "В paperdraw или в своём симуляторе архитектуры соберите цепочку DNS → CDN → TLS-терминация → балансировщик → два веб-сервера. Подпишите, где живёт задержка и что будет, если упадёт один сервер.",
      "level": "mid",
      "time": "45–60 мин",
      "free": true
    },
    {
      "id": "sdi1-ch1-2",
      "kind": "book",
      "title": "SDI vol. 1, главы 1–2: масштаб и оценки",
      "authors": "Alex Xu",
      "url": "https://bytebytego.com/",
      "ru": {
        "title": "System Design. Подготовка к сложному интервью",
        "url": "https://www.chitai-gorod.ru/product/system-design-podgotovka-k-slozhnomu-intervyu-2898161"
      },
      "note": "Глава 1 — эволюция от одного сервера к масштабу. Глава 2 — back-of-the-envelope: QPS, хранение, пропускная способность.",
      "level": "mid",
      "time": "2 ч"
    },
    {
      "id": "latency-numbers",
      "kind": "article",
      "title": "Latency Numbers Every Programmer Should Know",
      "url": "https://colin-scott.github.io/personal_website/research/interactive_latency.html",
      "extraUrl": {
        "label": "Исходная шпаргалка Jeff Dean / jboner",
        "href": "https://gist.github.com/jboner/2841832"
      },
      "note": "Интерактивные порядки величин: L1, память, SSD, сеть между зонами. Без этих цифр оценки повисают в воздухе.",
      "level": "intro",
      "time": "25 мин",
      "free": true
    },
    {
      "id": "hs-building-blocks",
      "kind": "article",
      "title": "The 4 Building Blocks of Architecting Systems for Scale",
      "url": "https://highscalability.com/the-4-building-blocks-of-architecting-systems-for-scale/",
      "note": "Классика High Scalability: балансировка, кэш, асинхронность, хранение.",
      "level": "mid",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "hello-bitly",
      "kind": "article",
      "title": "Hello Interview: URL shortener (Bitly)",
      "url": "https://www.hellointerview.com/learn/system-design/problem-breakdowns/bitly",
      "note": "Разбор сокращателя ссылок: уникальность кода, редирект, оценка на 100M DAU. Хорошая первая задача.",
      "level": "intro",
      "time": "1 ч",
      "free": true
    },
    {
      "id": "primer-pastebin",
      "kind": "article",
      "title": "System Design Primer: Pastebin / Bit.ly",
      "authors": "Donne Martin",
      "url": "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md",
      "note": "Бесплатное решение с оценкой нагрузки, хешем короткой ссылки и разделением метаданных и содержимого.",
      "level": "intro",
      "time": "1 ч",
      "free": true
    },
    {
      "id": "balun-sd-intro",
      "kind": "video",
      "title": "Базовые концепции System Design",
      "authors": "Владимир Балун",
      "url": "https://www.youtube.com/watch?v=wabfZC1ciNE",
      "extraUrl": {
        "label": "Канал Балуна",
        "href": "https://www.youtube.com/@vladimir_balun_programming"
      },
      "note": "Русскоязычное введение специально для тех, кто только входит в системный дизайн.",
      "level": "intro",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "habr-sd-1",
      "kind": "article",
      "title": "System Design для начинающих (Хабр, часть 1)",
      "url": "https://habr.com/ru/articles/873388/",
      "extraUrls": [
        {
          "label": "Часть 2",
          "href": "https://habr.com/ru/articles/877312/"
        },
        {
          "label": "Часть 3",
          "href": "https://habr.com/ru/articles/885054/"
        },
        {
          "label": "Часть 4",
          "href": "https://habr.com/ru/articles/893548/"
        },
        {
          "label": "Часть 5",
          "href": "https://habr.com/ru/articles/900396/"
        }
      ],
      "note": "Связный русскоязычный цикл. На этой неделе достаточно части 1 и начала части 2.",
      "level": "intro",
      "time": "50–70 мин",
      "free": true
    },
    {
      "id": "yt-bbg",
      "kind": "video",
      "title": "ByteByteGo на YouTube",
      "authors": "Alex Xu, Sahn Lam",
      "url": "https://www.youtube.com/@ByteByteGo",
      "note": "Посмотрите ролик про масштабирование или URL shortener — визуально закрепляет главы Xu.",
      "level": "intro",
      "time": "30 мин",
      "free": true
    },
    {
      "id": "primer",
      "kind": "article",
      "title": "The System Design Primer (обзор карты тем)",
      "authors": "Donne Martin",
      "url": "https://github.com/donnemartin/system-design-primer",
      "note": "Не читать всё: пройдите study guide и разделы про масштаб и оценки. Официального русского перевода в основном репозитории нет.",
      "level": "intro",
      "time": "45 мин",
      "free": true
    },
    {
      "id": "practice-w2-shortener",
      "kind": "practice",
      "title": "Практика: спроектировать URL shortener",
      "url": "https://paperdraw.dev/",
      "extraUrl": {
        "label": "Excalidraw, если нужен быстрый набросок",
        "href": "https://excalidraw.com/"
      },
      "note": "В paperdraw или в своём симуляторе: API shorten/redirect, генерация кода, хранилище, кэш, оценка RPS. Посчитайте write/read ratio и где стоят реплики. Разбор открывайте после своей схемы.",
      "level": "mid",
      "time": "1.5 ч",
      "free": true
    },
    {
      "id": "ddia-ch2-3",
      "kind": "book",
      "title": "DDIA, главы 2–3: модели данных и движки хранения",
      "authors": "Martin Kleppmann",
      "url": "https://dataintensive.net/",
      "ru": {
        "title": "Высоконагруженные приложения, гл. 2–3",
        "url": "https://www.labirint.ru/books/632959"
      },
      "note": "Реляционная vs документная vs графовая модель; B-trees и LSM. База, чтобы выбирать Postgres, Cassandra или поиск.",
      "level": "adv",
      "time": "3–4 ч"
    },
    {
      "id": "ddia-ch5-6",
      "kind": "book",
      "title": "DDIA, главы 5–6: репликация и партиционирование",
      "authors": "Martin Kleppmann",
      "url": "https://dataintensive.net/",
      "ru": {
        "title": "Высоконагруженные приложения, гл. 5–6",
        "url": "https://www.labirint.ru/books/632959"
      },
      "note": "Лидер и без лидера, лаг реплик, шардирование по ключу, ребалансировка. Прямо ложится на хранение Instagram-подобного сервиса.",
      "level": "adv",
      "time": "3–4 ч"
    },
    {
      "id": "pg-ha",
      "kind": "article",
      "title": "PostgreSQL: High Availability, Load Balancing, and Replication",
      "url": "https://www.postgresql.org/docs/current/high-availability.html",
      "note": "Официальная документация: какие виды репликации есть в Postgres и чем они отличаются.",
      "level": "mid",
      "time": "45 мин",
      "free": true
    },
    {
      "id": "use-the-index",
      "kind": "article",
      "title": "Use The Index, Luke",
      "url": "https://use-the-index-luke.com/",
      "note": "Практическое руководство по индексам SQL: что индекс стоит места и чем опасен полный скан.",
      "level": "mid",
      "time": "1 ч (выборочно)",
      "free": true
    },
    {
      "id": "hello-instagram",
      "kind": "article",
      "title": "Hello Interview: Photo Sharing App like Instagram",
      "url": "https://www.hellointerview.com/learn/system-design/problem-breakdowns/instagram",
      "note": "Кейс недели: метаданные, лента, загрузка фото, CDN и разделение горячих и холодных данных.",
      "level": "mid",
      "time": "1–1.5 ч",
      "free": true
    },
    {
      "id": "habr-sd-2",
      "kind": "article",
      "title": "System Design для начинающих (Хабр, часть 2)",
      "url": "https://habr.com/ru/articles/877312/",
      "note": "Русскоязычное продолжение цикла: масштабирование и выбор СУБД.",
      "level": "intro",
      "time": "45 мин",
      "free": true
    },
    {
      "id": "yt-yandex-be",
      "kind": "video",
      "title": "Школа бэкенд-разработки Яндекса",
      "authors": "Яндекс",
      "url": "https://education.yandex.ru/journal/15-lektsiy-po-bekend-razrabotke",
      "extraUrl": {
        "label": "Плейлист на YouTube (2021)",
        "href": "https://www.youtube.com/playlist?list=PLQC2_0cDcSKCMKnywAS8eI_EgCcE3yx0r"
      },
      "note": "Выберите лекцию про хранение или архитектуру бэкенда. Все 15 лекций на этой неделе не обязательны.",
      "level": "mid",
      "time": "1–1.5 ч",
      "free": true
    },
    {
      "id": "sds",
      "kind": "article",
      "title": "System Design Space",
      "url": "https://system-design.space/",
      "extraUrl": {
        "label": "Лаборатории",
        "href": "https://system-design.space/labs/"
      },
      "note": "Русскоязычный сайт с кейсами. На этой неделе полезны материалы про репликацию и шардирование.",
      "level": "mid",
      "time": "45 мин",
      "free": true
    },
    {
      "id": "practice-w3-instagram",
      "kind": "practice",
      "title": "Практика: хранилище Instagram-подобного сервиса",
      "url": "https://paperdraw.dev/",
      "extraUrl": {
        "label": "Excalidraw",
        "href": "https://excalidraw.com/"
      },
      "note": "На канвасе (paperdraw или свой симулятор): объектное хранилище для фото, БД метаданных, ключ шардирования, реплики, CDN. Оцените объём на 100M пользователей и падение первичной реплики.",
      "level": "mid",
      "time": "1.5–2 ч",
      "free": true
    },
    {
      "id": "redis-cache-aside",
      "kind": "article",
      "title": "Redis: Cache-aside",
      "url": "https://redis.io/docs/latest/develop/use-cases/cache-aside/",
      "note": "Официальное описание самого частого паттерна: чтение из кэша, заполнение при промахе, инвалидация при записи.",
      "level": "intro",
      "time": "25 мин",
      "free": true
    },
    {
      "id": "azure-cache-aside",
      "kind": "article",
      "title": "Cache-Aside Pattern (Azure Architecture Center)",
      "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
      "note": "Тот же паттерн с оговорками: допустимая устарелость, TTL, stampede и обход кэша.",
      "level": "mid",
      "time": "35 мин",
      "free": true
    },
    {
      "id": "sdi1-feed",
      "kind": "book",
      "title": "SDI vol. 1, глава про News Feed",
      "authors": "Alex Xu",
      "url": "https://bytebytego.com/",
      "ru": {
        "title": "System Design. Подготовка к сложному интервью, глава про ленту",
        "url": "https://www.chitai-gorod.ru/product/system-design-podgotovka-k-slozhnomu-intervyu-2898161"
      },
      "note": "Fan-out on write / on read, гибрид для знаменитостей, кэш ленты. Кейс недели.",
      "level": "mid",
      "time": "1.5 ч"
    },
    {
      "id": "hello-feed",
      "kind": "article",
      "title": "Hello Interview: Facebook News Feed",
      "url": "https://www.hellointerview.com/learn/system-design/problem-breakdowns/fb-news-feed",
      "note": "Современный разбор ленты: пагинация, предрасчёт, асинхронные воркеры, гибридный fan-out.",
      "level": "mid",
      "time": "1–1.5 ч",
      "free": true
    },
    {
      "id": "primer-twitter",
      "kind": "article",
      "title": "System Design Primer: Twitter timeline",
      "authors": "Donne Martin",
      "url": "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/twitter/README.md",
      "note": "Бесплатное решение ленты и поиска: fan-out сервис, кэш таймлайна, оценка нагрузки.",
      "level": "mid",
      "time": "1 ч",
      "free": true
    },
    {
      "id": "tao",
      "kind": "article",
      "title": "TAO: The Power of the Graph",
      "authors": "Engineering at Meta",
      "url": "https://engineering.fb.com/2013/06/25/core-infra/tao-the-power-of-the-graph/",
      "note": "Как Facebook кэшировал социальный граф: geo-распределённый read-through кэш над MySQL.",
      "level": "adv",
      "time": "50 мин",
      "free": true
    },
    {
      "id": "primer-query-cache",
      "kind": "article",
      "title": "System Design Primer: Query cache",
      "url": "https://github.com/donnemartin/system-design-primer/tree/master/solutions/system_design/query_cache",
      "note": "Короткий разбор распределённого кэша запросов: eviction и репликация кэша.",
      "level": "mid",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "sds-labs",
      "kind": "practice",
      "title": "Лаборатории System Design Space: кэш и балансировка",
      "url": "https://system-design.space/labs/",
      "note": "Браузерные лаборатории на русском. Пройдите упражнения про кэширование, прежде чем собирать ленту.",
      "level": "intro",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "habr-sd-cache",
      "kind": "article",
      "title": "System Design для начинающих (Хабр, части 3–4)",
      "url": "https://habr.com/ru/articles/885054/",
      "extraUrl": {
        "label": "Часть 4",
        "href": "https://habr.com/ru/articles/893548/"
      },
      "note": "Русскоязычное продолжение: балансировка и кэширование.",
      "level": "intro",
      "time": "1 ч",
      "free": true
    },
    {
      "id": "practice-w4-feed",
      "kind": "practice",
      "title": "Практика: news feed на канвасе",
      "url": "https://paperdraw.dev/",
      "extraUrl": {
        "label": "Excalidraw",
        "href": "https://excalidraw.com/"
      },
      "note": "Соберите ленту в paperdraw или в своём симуляторе: запись поста, fan-out, Redis-лента на пользователя, кэш постов, исключение знаменитостей. Задайте RPS чтения.",
      "level": "mid",
      "time": "1.5–2 ч",
      "free": true
    },
    {
      "id": "kafka-intro",
      "kind": "article",
      "title": "Apache Kafka: Introduction",
      "url": "https://kafka.apache.org/intro",
      "extraUrl": {
        "label": "Документация Kafka",
        "href": "https://kafka.apache.org/documentation/"
      },
      "note": "Официальный вводный текст: топики, партиции, consumer group, лог как источник правды.",
      "level": "mid",
      "time": "50 мин",
      "free": true
    },
    {
      "id": "kafka-semantics",
      "kind": "article",
      "title": "Kafka: семантика доставки",
      "url": "https://kafka.apache.org/documentation/#semantics",
      "note": "At-most-once, at-least-once, exactly-once — что гарантирует брокер и что должен делать потребитель.",
      "level": "adv",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "saga-pattern",
      "kind": "article",
      "title": "Pattern: Saga (microservices.io)",
      "authors": "Chris Richardson",
      "url": "https://microservices.io/patterns/data/saga.html",
      "note": "Координация локальных транзакций и компенсации: choreography vs orchestration.",
      "level": "mid",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "outbox-pattern",
      "kind": "article",
      "title": "Pattern: Transactional outbox",
      "authors": "Chris Richardson",
      "url": "https://microservices.io/patterns/data/transactional-outbox.html",
      "note": "Запись в БД и в исходящие в одной транзакции, затем реле в брокер. Правильный ответ на dual-write.",
      "level": "mid",
      "time": "30 мин",
      "free": true
    },
    {
      "id": "habr-saga",
      "kind": "article",
      "title": "Распределённые транзакции: от SAGA до 2PC (Хабр)",
      "url": "https://habr.com/ru/articles/906484/",
      "note": "Русскоязычный обзор саги и двухфазного коммита и почему 2PC почти не нужен в прикладных сервисах.",
      "level": "mid",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "habr-outbox",
      "kind": "article",
      "title": "Transactional Outbox: от идеи до open-source (Хабр)",
      "url": "https://habr.com/ru/companies/kuper/articles/819803/",
      "note": "Практический русский разбор outbox на реальном опыте, не только схема из учебника.",
      "level": "mid",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "hello-notifications",
      "kind": "article",
      "title": "Hello Interview: Notification System",
      "url": "https://www.hellointerview.com/learn/system-design/problem-breakdowns/notification-system",
      "note": "Кейс недели: push, email, SMS, приоритеты, ретраи и идемпотентность.",
      "level": "mid",
      "time": "1 ч",
      "free": true
    },
    {
      "id": "sdi1-notifications",
      "kind": "book",
      "title": "SDI vol. 1, глава про Notification System",
      "authors": "Alex Xu",
      "url": "https://bytebytego.com/",
      "ru": {
        "title": "System Design. Подготовка к сложному интервью, глава про уведомления",
        "url": "https://www.chitai-gorod.ru/product/system-design-podgotovka-k-slozhnomu-intervyu-2898161"
      },
      "note": "Конвейер уведомлений: очереди, воркеры, шаблоны, дедупликация. Читать вместе с outbox.",
      "level": "mid",
      "time": "1–1.5 ч"
    },
    {
      "id": "balun-kafka",
      "kind": "video",
      "title": "Что каждый разработчик должен знать про Kafka",
      "authors": "Владимир Балун",
      "url": "https://rutube.ru/video/138e39f5b67a32b92fb81a902ad12fc3/",
      "note": "Русскоязычный разбор Kafka: топики, партиции, оффсеты, отличия от RabbitMQ. Запись открытого урока, около 1 ч 10 мин.",
      "level": "mid",
      "time": "1 ч 10 мин",
      "free": true
    },
    {
      "id": "practice-w5-notif",
      "kind": "practice",
      "title": "Практика: система уведомлений",
      "url": "https://paperdraw.dev/",
      "extraUrl": {
        "label": "Excalidraw",
        "href": "https://excalidraw.com/"
      },
      "note": "Спроектируйте уведомления: API → outbox в той же БД, что и событие → Kafka → воркеры push/email/SMS. Добавьте ретраи, DLQ, идемпотентность и сценарий «брокер был мёртв 5 минут».",
      "level": "mid",
      "time": "1.5–2 ч",
      "free": true
    },
    {
      "id": "cap-twelve",
      "kind": "article",
      "title": "CAP Twelve Years Later: How the Rules Have Changed",
      "authors": "Eric Brewer",
      "url": "https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/",
      "note": "Автор CAP объясняется, что теорему часто понимают слишком грубо: партиции редки, важны задержка и гранулярность выбора.",
      "level": "mid",
      "time": "45 мин",
      "free": true
    },
    {
      "id": "pacelc",
      "kind": "article",
      "title": "PACELC theorem",
      "authors": "Daniel Abadi",
      "url": "https://en.wikipedia.org/wiki/PACELC_theorem",
      "extraUrl": {
        "label": "Оригинальная статья (PDF, IEEE Computer 2012)",
        "href": "https://www.cs.umd.edu/~abadi/papers/abadi-pacelc.pdf"
      },
      "note": "Дополнение к CAP: если сеть в порядке, всё равно остаётся выбор между consistency и latency.",
      "level": "mid",
      "time": "30–40 мин",
      "free": true
    },
    {
      "id": "raft-site",
      "kind": "article",
      "title": "The Raft Consensus Algorithm",
      "url": "https://raft.github.io/",
      "note": "Официальная страница: статья Ongaro/Ousterhout, курсы, реализации. Имеет смысл просмотреть термины leader election и log replication.",
      "level": "adv",
      "time": "1.5 ч",
      "free": true
    },
    {
      "id": "raft-viz",
      "kind": "practice",
      "title": "Визуализация Raft",
      "url": "https://thesecretlivesofdata.com/raft/",
      "note": "Интерактивное объяснение выборов лидера и репликации лога — лучший способ увидеть консенсус.",
      "level": "mid",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "ddia-ch8-9",
      "kind": "book",
      "title": "DDIA, главы 8–9: распределённые системы и консенсус",
      "authors": "Martin Kleppmann",
      "url": "https://dataintensive.net/",
      "ru": {
        "title": "Высоконагруженные приложения, гл. 8–9",
        "url": "https://www.labirint.ru/books/632959"
      },
      "note": "Часы, неупорядоченные события, конфликты, транзакции, Raft/Paxos на уровне идей. Центральные главы книги.",
      "level": "adv",
      "time": "4–5 ч"
    },
    {
      "id": "jepsen",
      "kind": "article",
      "title": "Jepsen: Consistency Models",
      "authors": "Kyle Kingsbury",
      "url": "https://jepsen.io/consistency/models",
      "extraUrl": {
        "label": "Обзор consistency",
        "href": "https://jepsen.io/consistency"
      },
      "note": "Карта моделей: linearizability, sequential, causal, snapshot isolation.",
      "level": "adv",
      "time": "45 мин",
      "free": true
    },
    {
      "id": "mit-6824",
      "kind": "video",
      "title": "MIT 6.824 / 6.5840 Distributed Systems",
      "authors": "MIT PDOS",
      "url": "https://pdos.csail.mit.edu/6.824/",
      "extraUrl": {
        "label": "Лекции на YouTube (весна 2020)",
        "href": "https://www.youtube.com/@6.824"
      },
      "note": "На этой неделе — лекции про введение и Raft, не весь курс. Сайт актуальный, открытые видео — 2020.",
      "level": "adv",
      "time": "2–3 ч",
      "free": true
    },
    {
      "id": "hello-whatsapp",
      "kind": "article",
      "title": "Hello Interview: Messaging App like WhatsApp",
      "url": "https://www.hellointerview.com/learn/system-design/problem-breakdowns/whatsapp",
      "note": "Кейс недели: 1:1 и группы, порядок сообщений, receipts, presence, история, WebSocket-шлюзы.",
      "level": "mid",
      "time": "1.5 ч",
      "free": true
    },
    {
      "id": "sdi1-chat",
      "kind": "book",
      "title": "SDI vol. 1, глава про Chat System",
      "authors": "Alex Xu",
      "url": "https://bytebytego.com/",
      "ru": {
        "title": "System Design. Подготовка к сложному интервью, глава про чат",
        "url": "https://www.chitai-gorod.ru/product/system-design-podgotovka-k-slozhnomu-intervyu-2898161"
      },
      "note": "Сервис сообщений: онлайн-канал, оффлайн-хранилище, порядок и рассылка в группы.",
      "level": "mid",
      "time": "1.5 ч"
    },
    {
      "id": "practice-w6-chat",
      "kind": "practice",
      "title": "Практика: чат с порядком сообщений",
      "url": "https://paperdraw.dev/",
      "extraUrl": {
        "label": "Excalidraw",
        "href": "https://excalidraw.com/"
      },
      "note": "На канвасе: stateful WebSocket-шлюзы, куда писать раньше — в хранилище или в канал, доставка между шлюзами, где нужны часы, а где хватит per-chat последовательности.",
      "level": "adv",
      "time": "2 ч",
      "free": true
    },
    {
      "id": "fowler-ms",
      "kind": "article",
      "title": "Microservices Guide",
      "authors": "Martin Fowler",
      "url": "https://martinfowler.com/microservices/",
      "extraUrl": {
        "label": "Классическая статья Microservices",
        "href": "https://martinfowler.com/articles/microservices.html"
      },
      "note": "Спокойное определение, предпосылки и цена сложности. Читать до того, как резать систему.",
      "level": "mid",
      "time": "1 ч",
      "free": true
    },
    {
      "id": "fowler-strangler",
      "kind": "article",
      "title": "Strangler Fig Application",
      "authors": "Martin Fowler",
      "url": "https://martinfowler.com/bliki/StranglerFigApplication.html",
      "extraUrl": {
        "label": "То же как паттерн Microsoft Learn",
        "href": "https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig"
      },
      "note": "Как постепенно обвить монолит новым контуром, а не переписывать всё сразу.",
      "level": "mid",
      "time": "25 мин",
      "free": true
    },
    {
      "id": "fowler-bc",
      "kind": "article",
      "title": "Bounded Context",
      "authors": "Martin Fowler",
      "url": "https://martinfowler.com/bliki/BoundedContext.html",
      "note": "Короткое объяснение границы контекста в DDD — единица, по которой имеет смысл резать сервисы.",
      "level": "mid",
      "time": "20 мин",
      "free": true
    },
    {
      "id": "ms-ddd",
      "kind": "article",
      "title": "Designing a DDD-oriented microservice",
      "url": "https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice",
      "extraUrl": {
        "label": "Domain analysis for microservices",
        "href": "https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis"
      },
      "note": "Практическое введение в DDD на уровне сервиса: агрегаты, границы, что не должно протекать наружу.",
      "level": "mid",
      "time": "50 мин",
      "free": true
    },
    {
      "id": "ms-gateway",
      "kind": "article",
      "title": "API gateways (Azure Architecture Center)",
      "url": "https://learn.microsoft.com/en-us/azure/architecture/microservices/design/gateway",
      "extraUrl": {
        "label": "Gateway vs прямое обращение клиентов",
        "href": "https://learn.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/direct-client-to-microservice-communication-versus-the-api-gateway-pattern"
      },
      "note": "Зачем шлюз (аутентификация, маршрутизация, агрегация) и почему в нём не должно быть доменной логики.",
      "level": "mid",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "istio",
      "kind": "article",
      "title": "What is Istio?",
      "url": "https://istio.io/latest/docs/overview/what-is-istio/",
      "note": "Официальный обзор service mesh: mTLS, retries, трассировка, traffic shifting — что даёт сетка и чем она дорого обходится.",
      "level": "mid",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "microservices-ch",
      "kind": "book",
      "title": "Building Microservices: моделирование и разбиение",
      "authors": "Sam Newman",
      "url": "https://samnewman.io/books/building_microservices_2nd_edition/",
      "ru": {
        "title": "Создание микросервисов, 2-е издание",
        "url": "https://www.labirint.ru/books/937994/"
      },
      "note": "На этой неделе — главы про то, когда микросервисы уместны, как проводить границы и как не размазать данные.",
      "level": "mid",
      "time": "3 ч"
    },
    {
      "id": "hard-parts-ch",
      "kind": "book",
      "title": "The Hard Parts: декомпозиция и связность",
      "authors": "Neal Ford и др.",
      "url": "https://nealford.com/books/",
      "ru": {
        "title": "Современный подход к программной архитектуре: сложные компромиссы",
        "url": "https://www.piter.com/collection/programmirovanie-razrabotka-programnogo-obespecheniya/product/sovremennyy-podhod-k-programmnoy-arhitekture-slozhnye-kompromissy"
      },
      "note": "Главы про granularity, связность и распределённые рабочие процессы.",
      "level": "adv",
      "time": "2–3 ч"
    },
    {
      "id": "habr-sd-5",
      "kind": "article",
      "title": "System Design для начинающих (Хабр, часть 5)",
      "url": "https://habr.com/ru/articles/900396/",
      "note": "Завершение русскоязычного цикла, в том числе про распределённые системы и микросервисы.",
      "level": "intro",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "practice-w7-strangler",
      "kind": "practice",
      "title": "Практика: strangler fig и API gateway",
      "url": "https://paperdraw.dev/",
      "extraUrl": {
        "label": "Excalidraw",
        "href": "https://excalidraw.com/"
      },
      "note": "Возьмите знакомую монолитную систему и на канвасе покажите поэтапный вынос одного bounded context за gateway: маршрутизация, общая БД на время перехода, где mesh ещё не нужен.",
      "level": "adv",
      "time": "1.5–2 ч",
      "free": true
    },
    {
      "id": "sre-intro",
      "kind": "book",
      "title": "SRE Book: Introduction",
      "url": "https://sre.google/sre-book/introduction/",
      "note": "Бесплатная глава: чем SRE отличается от «просто эксплуатации».",
      "level": "mid",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "sre-risk",
      "kind": "book",
      "title": "SRE Book: Embracing Risk",
      "url": "https://sre.google/sre-book/embracing-risk/",
      "note": "Надёжность — не 100%, а выбор, сколько риска бизнес готов оплатить.",
      "level": "mid",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "sre-slo",
      "kind": "book",
      "title": "SRE Book: Service Level Objectives",
      "url": "https://sre.google/sre-book/service-level-objectives/",
      "note": "SLI, SLO, error budget — язык, на котором руководитель говорит с бизнесом о риске и скорости поставки.",
      "level": "mid",
      "time": "1 ч",
      "free": true
    },
    {
      "id": "sre-workbook",
      "kind": "article",
      "title": "The Site Reliability Workbook",
      "url": "https://sre.google/workbook/table-of-contents/",
      "note": "Практическое продолжение: как внедрять SLO в обычной компании. Выберите главы про SLO и error budget.",
      "level": "adv",
      "time": "1–1.5 ч",
      "free": true
    },
    {
      "id": "release-it-ch",
      "kind": "book",
      "title": "Release It!: паттерны устойчивости",
      "authors": "Michael T. Nygard",
      "url": "https://pragprog.com/titles/mnee2/release-it-second-edition/",
      "ru": {
        "title": "Release it!",
        "url": "https://www.piter.com/collection/programmirovanie-razrabotka-programnogo-obespecheniya/product/release-it-proektirovanie-i-dizayn-po-dlya-teh-komu-ne-vsyo-ravno"
      },
      "note": "Части про стабильность: таймауты, backpressure, circuit breaker, массовые повторы, ядовитые сообщения.",
      "level": "mid",
      "time": "3–4 ч"
    },
    {
      "id": "fowler-cb",
      "kind": "article",
      "title": "Circuit Breaker",
      "authors": "Martin Fowler",
      "url": "https://martinfowler.com/bliki/CircuitBreaker.html",
      "note": "Канонический текст про предохранитель вызовов: зачем рвать цепь и как не превратить его в вечный outage.",
      "level": "intro",
      "time": "20 мин",
      "free": true
    },
    {
      "id": "chaos",
      "kind": "article",
      "title": "Principles of Chaos Engineering",
      "url": "https://principlesofchaos.org/",
      "note": "Официальные принципы: гипотеза о поведении в отказе, осторожный эксперимент, автоматизация.",
      "level": "mid",
      "time": "20 мин",
      "free": true
    },
    {
      "id": "throttling",
      "kind": "article",
      "title": "Throttling pattern (Azure Architecture Center)",
      "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/throttling",
      "note": "Ограничение нагрузки, чтобы система деградировала управляемо, а не падала целиком.",
      "level": "mid",
      "time": "20 мин",
      "free": true
    },
    {
      "id": "yt-highload",
      "kind": "video",
      "title": "HighLoad Channel",
      "url": "https://www.youtube.com/channel/UCwHL6WHUarjGfUM_586me8w",
      "note": "Выберите один доклад HighLoad++ про инциденты, деградацию или нагрузку. Живая русскоязычная практика.",
      "level": "adv",
      "time": "1–1.5 ч",
      "free": true
    },
    {
      "id": "practice-w8-sre",
      "kind": "practice",
      "title": "Практика: SLO и отказы на уже нарисованной системе",
      "url": "https://paperdraw.dev/",
      "extraUrl": {
        "label": "Excalidraw",
        "href": "https://excalidraw.com/"
      },
      "note": "Возьмите схему shortener, ленты или уведомлений. Добавьте SLI/SLO, поведение при падении кэша, БД и брокера, таймауты, circuit breaker и троттлинг. Запишите error budget на месяц.",
      "level": "mid",
      "time": "1.5 ч",
      "free": true
    },
    {
      "id": "otel-docs",
      "kind": "article",
      "title": "OpenTelemetry documentation",
      "url": "https://opentelemetry.io/docs/",
      "extraUrl": {
        "label": "Observability primer",
        "href": "https://opentelemetry.io/docs/concepts/observability-primer/"
      },
      "note": "Traces, metrics, logs и зачем нужен единый стандарт вместо зоопарка агентов.",
      "level": "mid",
      "time": "1 ч",
      "free": true
    },
    {
      "id": "sre-monitoring",
      "kind": "book",
      "title": "SRE Book: Monitoring Distributed Systems",
      "url": "https://sre.google/sre-book/monitoring-distributed-systems/",
      "note": "Четыре золотых сигнала, что алертить, а что оставлять для отладки. Хорошо стыкуется с OpenTelemetry.",
      "level": "mid",
      "time": "50 мин",
      "free": true
    },
    {
      "id": "oauth2",
      "kind": "article",
      "title": "OAuth 2.0",
      "url": "https://oauth.net/2/",
      "note": "Официальный портал: роли, гранты, почему implicit устарел и зачем authorization code + PKCE.",
      "level": "mid",
      "time": "45 мин",
      "free": true
    },
    {
      "id": "oidc",
      "kind": "article",
      "title": "How OpenID Connect Works",
      "url": "https://openid.net/developers/how-connect-works/",
      "note": "OIDC поверх OAuth: ID token, userinfo, чем вход через провайдера отличается от простой выдачи access token.",
      "level": "mid",
      "time": "35 мин",
      "free": true
    },
    {
      "id": "beyondcorp",
      "kind": "article",
      "title": "Google BeyondCorp (Zero Trust)",
      "url": "https://cloud.google.com/beyondcorp",
      "note": "Практическая модель zero trust: не доверять сети, проверять устройство и личность на каждый запрос.",
      "level": "mid",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "hello-payments",
      "kind": "article",
      "title": "Hello Interview: Payment System like Stripe",
      "url": "https://www.hellointerview.com/learn/system-design/problem-breakdowns/payment-system",
      "note": "Кейс недели: идемпотентность, ledger, ретраи, внешний процессинг, согласованность денег.",
      "level": "adv",
      "time": "1.5 ч",
      "free": true
    },
    {
      "id": "sdi2-payments",
      "kind": "book",
      "title": "SDI vol. 2, главы Payment System и Digital Wallet",
      "authors": "Alex Xu, Sahn Lam",
      "url": "https://bytebytego.com/",
      "ru": {
        "title": "System Design II, главы про платежи и кошелёк",
        "url": "https://www.labirint.ru/books/1030640/"
      },
      "note": "Двойная запись, идемпотентные ключи, исходящие платежи, расхождение балансов.",
      "level": "adv",
      "time": "2.5–3 ч"
    },
    {
      "id": "aws-wa",
      "kind": "article",
      "title": "AWS Well-Architected Framework",
      "url": "https://docs.aws.amazon.com/wellarchitected/",
      "extraUrl": {
        "label": "Обзор столпов",
        "href": "https://aws.amazon.com/architecture/well-architected/"
      },
      "note": "На этой неделе — столпы Security и Operational Excellence: проверка системы чеклистом.",
      "level": "mid",
      "time": "1 ч",
      "free": true
    },
    {
      "id": "practice-w9-pay",
      "kind": "practice",
      "title": "Практика: платёжная система",
      "url": "https://paperdraw.dev/",
      "extraUrl": {
        "label": "Excalidraw",
        "href": "https://excalidraw.com/"
      },
      "note": "На канвасе: API с идемпотентным ключом, журнал проводок, outbox к провайдеру, ретраи, сверка, OAuth2/OIDC на входящем API, трассировка платежа через OpenTelemetry. Напишите SLO для authorize и webhook.",
      "level": "adv",
      "time": "2 ч",
      "free": true
    },
    {
      "id": "huyen-llm-prod",
      "kind": "ai",
      "title": "Building LLM applications for production",
      "authors": "Chip Huyen",
      "url": "https://huyenchip.com/2023/04/11/llm-engineering.html",
      "note": "Чем прототип на LLM отличается от продакшена: оценка, RAG, стоимость, задержка, надёжность.",
      "level": "mid",
      "time": "1 ч",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "huyen-pitfalls",
      "kind": "ai",
      "title": "Common pitfalls when building generative AI applications",
      "authors": "Chip Huyen",
      "url": "https://huyenchip.com/2025/01/16/ai-engineering-pitfalls.html",
      "note": "Типичные ошибки ИИ-инженерии — полезно сразу после вводной статьи.",
      "level": "mid",
      "time": "40 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "ai-eng-ch",
      "kind": "book",
      "title": "AI Engineering: инференс, оценка, стоимость",
      "authors": "Chip Huyen",
      "url": "https://huyenchip.com/books/",
      "ru": {
        "title": "AI-инженерия",
        "url": "https://www.dkmg.ru/tovar/1243836"
      },
      "note": "Главы про работу с моделями, инференс, оценку качества и экономику вызовов, не обязательно вся книга.",
      "level": "mid",
      "time": "3–4 ч",
      "tags": [
        "ai"
      ]
    },
    {
      "id": "openai-cache",
      "kind": "article",
      "title": "OpenAI: Prompt caching",
      "url": "https://developers.openai.com/api/docs/guides/prompt-caching",
      "note": "Как кэшируется префикс промпта и как это бьёт по цене и задержке, если меняется начало.",
      "level": "mid",
      "time": "25 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "anthropic-cache",
      "kind": "article",
      "title": "Anthropic: Prompt caching",
      "url": "https://platform.claude.com/docs/en/build-with-claude/prompt-caching",
      "note": "Явный cache_control и зачем выносить статичный системный промпт в начало.",
      "level": "mid",
      "time": "25 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "vllm",
      "kind": "article",
      "title": "vLLM: документация и обзор архитектуры",
      "url": "https://docs.vllm.ai/en/stable/",
      "extraUrl": {
        "label": "Architecture overview",
        "href": "https://docs.vllm.ai/en/latest/design/arch_overview/"
      },
      "note": "Self-hosted инференс: планировщик, KV-cache, батчинг. Нужно, чтобы сравнить свой GPU и API-провайдера.",
      "level": "adv",
      "time": "50 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "openai-limits",
      "kind": "article",
      "title": "OpenAI: Rate limits (токены и квоты)",
      "url": "https://platform.openai.com/docs/guides/rate-limits",
      "note": "Как провайдер считает RPM/TPM. База для оценки, упрётесь ли в квоту раньше, чем в GPU.",
      "level": "mid",
      "time": "20 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "dmls-serving",
      "kind": "book",
      "title": "Designing ML Systems: сервинг и мониторинг",
      "authors": "Chip Huyen",
      "url": "https://huyenchip.com/books/",
      "ru": {
        "title": "Проектирование систем машинного обучения",
        "url": "https://bhv.ru/product/proektirovanie-sistem-mashinnogo-obucheniya/"
      },
      "note": "Главы про выкатку моделей и наблюдение за ними. Даже для LLM полезно не путать «модель ответила» и «система работает».",
      "level": "mid",
      "time": "2 ч",
      "tags": [
        "ai"
      ]
    },
    {
      "id": "practice-w10-cost",
      "kind": "practice",
      "title": "Практика: инференс API vs GPU и стоимость",
      "url": "https://paperdraw.dev/",
      "extraUrl": {
        "label": "Статья Huyen про прод",
        "href": "https://huyenchip.com/2023/04/11/llm-engineering.html"
      },
      "note": "Опишите корпоративного ассистента: средний запрос в токенах, пиковый RPS, цена API с prompt caching и грубая оценка своего инференса (vLLM + GPU). На канвасе — шлюз, кэш префиксов, очередь и деградация при урезании квоты.",
      "level": "mid",
      "time": "1.5 ч",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "rag-paper",
      "kind": "article",
      "title": "Retrieval-Augmented Generation for Knowledge-Intensive NLP",
      "authors": "Lewis et al., 2020",
      "url": "https://arxiv.org/abs/2005.11401",
      "note": "Оригинальная работа про RAG. Не обязательно читать каждую формулу — важна постановка: модель + внешняя память.",
      "level": "adv",
      "time": "1 ч",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "ms-rag-guide",
      "kind": "article",
      "title": "Design and Develop a RAG Solution (Microsoft)",
      "url": "https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-solution-design-and-evaluation-guide",
      "extraUrl": {
        "label": "Information-retrieval phase",
        "href": "https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-information-retrieval"
      },
      "note": "Официальное руководство: чанкинг, извлечение, качество ответа, как итеративно улучшать пайплайн.",
      "level": "mid",
      "time": "1.5 ч",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "ms-hybrid",
      "kind": "article",
      "title": "Hybrid Search Overview (Azure AI Search)",
      "url": "https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview",
      "note": "Как сочетаются BM25 и векторный поиск, зачем RRF и когда гибрид лучше «просто эмбеддингов».",
      "level": "mid",
      "time": "35 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "weaviate-hybrid",
      "kind": "article",
      "title": "Weaviate: Hybrid Search",
      "url": "https://docs.weaviate.io/weaviate/concepts/search/hybrid-search",
      "extraUrl": {
        "label": "Зеркало документации",
        "href": "https://weaviate.io/developers/weaviate/concepts/search/hybrid-search"
      },
      "note": "Тот же паттерн на примере векторной БД: как смешиваются dense и keyword.",
      "level": "mid",
      "time": "30 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "ragas",
      "kind": "article",
      "title": "RAGAS: оценка RAG-пайплайнов",
      "url": "https://github.com/explodinggradients/ragas",
      "note": "Открытый фреймворк метрик: faithfulness, relevancy, recall извлечения. Без evals RAG нельзя улучшать системно.",
      "level": "mid",
      "time": "45 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "dmls-data",
      "kind": "book",
      "title": "Designing ML Systems: данные и признаки",
      "authors": "Chip Huyen",
      "url": "https://huyenchip.com/books/",
      "ru": {
        "title": "Проектирование систем машинного обучения",
        "url": "https://bhv.ru/product/proektirovanie-sistem-mashinnogo-obucheniya/"
      },
      "note": "Главы про качество данных и сдвиг. Для RAG это чанки, обновление индекса и устаревшие документы.",
      "level": "mid",
      "time": "2 ч",
      "tags": [
        "ai"
      ]
    },
    {
      "id": "dmls-repo",
      "kind": "ai",
      "title": "chiphuyen/dmls-book",
      "url": "https://github.com/chiphuyen/dmls-book",
      "note": "Сопроводительный репозиторий к книге — дополнительные материалы по данным и жизненному циклу.",
      "level": "ref",
      "time": "20 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "ai-eng-rag",
      "kind": "book",
      "title": "AI Engineering: RAG и оценка качества",
      "authors": "Chip Huyen",
      "url": "https://huyenchip.com/books/",
      "ru": {
        "title": "AI-инженерия",
        "url": "https://www.dkmg.ru/tovar/1243836"
      },
      "note": "Главы про retrieval-augmented приложения и evals. Читать после гайда Microsoft.",
      "level": "mid",
      "time": "2–3 ч",
      "tags": [
        "ai"
      ]
    },
    {
      "id": "practice-w11-rag",
      "kind": "practice",
      "title": "Практика: корпоративный RAG",
      "url": "https://paperdraw.dev/",
      "extraUrl": {
        "label": "Гайд Microsoft по RAG",
        "href": "https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-solution-design-and-evaluation-guide"
      },
      "note": "Спроектируйте поиск по внутренней базе: парсинг и чанкинг, эмбеддинги, векторная БД, гибридный поиск, реранкинг, генерация, слой evals. Отметьте обновление индекса и что делать при галлюцинации.",
      "level": "adv",
      "time": "2 ч",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "mcp-intro",
      "kind": "ai",
      "title": "Model Context Protocol: Introduction",
      "url": "https://modelcontextprotocol.io/introduction",
      "extraUrl": {
        "label": "Официальный репозиторий спецификации",
        "href": "https://github.com/modelcontextprotocol/modelcontextprotocol"
      },
      "note": "Официальное введение: хост, клиент, сервер, инструменты и ресурсы. Это контур корпоративных агентов.",
      "level": "mid",
      "time": "45 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "openai-tools",
      "kind": "article",
      "title": "OpenAI: Function / tool calling",
      "url": "https://developers.openai.com/api/docs/guides/function-calling",
      "note": "Как модель вызывает инструменты: схема, цикл tool → observation → следующий шаг, ограничения.",
      "level": "mid",
      "time": "40 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "anthropic-tools",
      "kind": "article",
      "title": "Anthropic: Tool use",
      "url": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview",
      "note": "Официальный взгляд на tool use: когда давать модели инструменты и как описывать их безопасно.",
      "level": "mid",
      "time": "40 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "owasp-llm",
      "kind": "article",
      "title": "OWASP Top 10 for LLM Applications",
      "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
      "extraUrl": {
        "label": "Репозиторий Top 10 (2026)",
        "href": "https://github.com/GenAI-Security-Project/GenAI-LLM-Top10"
      },
      "note": "Канонический список рисков, начиная с prompt injection. Чеклист для guardrails.",
      "level": "mid",
      "time": "45 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "willison-trifecta",
      "kind": "article",
      "title": "The lethal trifecta for AI agents",
      "authors": "Simon Willison",
      "url": "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/",
      "note": "Три вещи, которые вместе опасны: доступ к частным данным, недоверенный контент и возможность внешней коммуникации.",
      "level": "mid",
      "time": "25 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "langfuse",
      "kind": "article",
      "title": "Langfuse docs (LLM observability)",
      "url": "https://langfuse.com/docs",
      "note": "Трассировка промптов, инструментов, стоимости и качества — наблюдаемость именно LLM-контура рядом с OpenTelemetry.",
      "level": "mid",
      "time": "40 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "huyen-platform",
      "kind": "ai",
      "title": "Building A Generative AI Platform",
      "authors": "Chip Huyen",
      "url": "https://huyenchip.com/2024/07/25/genai-platform.html",
      "note": "Платформа вокруг моделей: шлюз, оркестрация, оценка, наблюдаемость. Про корпоративных агентов, а не про один чат.",
      "level": "adv",
      "time": "1 ч",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "aie-repo",
      "kind": "ai",
      "title": "chiphuyen/aie-book",
      "url": "https://github.com/chiphuyen/aie-book",
      "note": "Сопроводительный репозиторий к AI Engineering, включая ссылки на переводы.",
      "level": "ref",
      "time": "15 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "practice-w12-mcp",
      "kind": "practice",
      "title": "Практика: агенты, MCP и guardrails",
      "url": "https://paperdraw.dev/",
      "extraUrl": {
        "label": "Введение в MCP",
        "href": "https://modelcontextprotocol.io/introduction"
      },
      "note": "Спроектируйте контур корпоративных агентов: шлюз, MCP-серверы, политики доступа, защита от prompt injection, трассировка шагов, человек в контуре для опасных действий. Учтите lethal trifecta.",
      "level": "adv",
      "time": "2 ч",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "adr-nygard",
      "kind": "article",
      "title": "Documenting Architecture Decisions",
      "authors": "Michael Nygard",
      "url": "https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions",
      "note": "Исходный текст про ADR: короткий файл в репозитории, контекст, решение, статус, последствия. Рабочий формат для техрадара и build vs buy.",
      "level": "intro",
      "time": "20 мин",
      "free": true
    },
    {
      "id": "adr-site",
      "kind": "article",
      "title": "Architecture Decision Records (adr.github.io)",
      "url": "https://adr.github.io/",
      "extraUrl": {
        "label": "Lightweight ADRs в Technology Radar",
        "href": "https://www.thoughtworks.com/en-us/radar/techniques/lightweight-architecture-decision-records"
      },
      "note": "Каталог практик вокруг ADR плюс позиция Thoughtworks: держать решения рядом с кодом, а не в вики.",
      "level": "intro",
      "time": "25 мин",
      "free": true
    },
    {
      "id": "tw-radar",
      "kind": "article",
      "title": "Thoughtworks Technology Radar",
      "url": "https://www.thoughtworks.com/radar",
      "note": "Эталон техрадара: Adopt / Trial / Assess / Hold. Полезно сравнить с корпоративным радаром, который вы строили в банке.",
      "level": "mid",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "finops",
      "kind": "article",
      "title": "What is FinOps?",
      "url": "https://www.finops.org/introduction/what-is-finops/",
      "extraUrl": {
        "label": "FinOps Foundation",
        "href": "https://www.finops.org/"
      },
      "note": "Стоимость облака как инженерная дисциплина. Нужно и для обычных систем, и для GPU/API ИИ.",
      "level": "mid",
      "time": "40 мин",
      "free": true
    },
    {
      "id": "aws-wa-w13",
      "kind": "article",
      "title": "AWS Well-Architected и Architecture Center",
      "url": "https://aws.amazon.com/architecture/well-architected/",
      "extraUrl": {
        "label": "AWS Architecture Center",
        "href": "https://aws.amazon.com/architecture/"
      },
      "note": "На этой неделе — столпы Cost Optimization и эталонные схемы как аргумент в споре build vs buy.",
      "level": "mid",
      "time": "1 ч",
      "free": true
    },
    {
      "id": "fosa-role",
      "kind": "book",
      "title": "Fundamentals of Software Architecture: роль архитектора",
      "authors": "Mark Richards, Neal Ford",
      "url": "https://www.developertoarchitect.com/books.html",
      "ru": {
        "title": "Фундаментальный подход к программной архитектуре",
        "url": "https://www.labirint.ru/books/1032887/"
      },
      "note": "Главы про характеристики архитектуры, торгоффы и работу архитектора с организацией — ближе всего к уровню CTO.",
      "level": "mid",
      "time": "2–3 ч"
    },
    {
      "id": "huyen-platform-w13",
      "kind": "ai",
      "title": "AI-стратегия: Building A Generative AI Platform",
      "authors": "Chip Huyen",
      "url": "https://huyenchip.com/2024/07/25/genai-platform.html",
      "note": "Перечитайте статью уже как стратегию: что делать платформой, что отдавать командам, где оценка и контроль риска.",
      "level": "adv",
      "time": "40 мин",
      "free": true,
      "tags": [
        "ai"
      ]
    },
    {
      "id": "yt-balun-ch",
      "kind": "video",
      "title": "Канал Владимира Балуна (закрепление архитектуры)",
      "authors": "Владимир Балун",
      "url": "https://www.youtube.com/@vladimir_balun_programming",
      "extraUrl": {
        "label": "Платный курс System Design, если нужен интенсив",
        "href": "https://balun.courses/courses/system_design"
      },
      "note": "Выберите разбор реальной архитектуры на русском. Платный курс не обязателен.",
      "level": "mid",
      "time": "1 ч",
      "free": true
    },
    {
      "id": "practice-w13-adr",
      "kind": "practice",
      "title": "Практика: ADR, техрадар и build vs buy",
      "url": "https://adr.github.io/",
      "extraUrl": {
        "label": "Шаблон мысли: Technology Radar",
        "href": "https://www.thoughtworks.com/radar"
      },
      "note": "Напишите один ADR (контекст, решение, последствия) по реальному выбору стека и одностраничный техрадар Adopt/Trial/Hold. Отдельно зафиксируйте build vs buy и грубую стоимость владения, включая ИИ-API или GPU.",
      "level": "adv",
      "time": "2 ч",
      "free": true
    },
    {
      "id": "hello-delivery",
      "kind": "article",
      "title": "Hello Interview: как вести разговор о системе",
      "url": "https://www.hellointerview.com/learn/system-design/in-a-hurry/delivery",
      "extraUrl": {
        "label": "System Design in a Hurry, введение",
        "href": "https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction"
      },
      "note": "Перед моками: как уточнять требования, давать оценку, идти по слоям и обсуждать узкие места.",
      "level": "mid",
      "time": "30 мин",
      "free": true
    },
    {
      "id": "hello-practice",
      "kind": "practice",
      "title": "Hello Interview — Guided Practice",
      "url": "https://www.hellointerview.com/practice/system-design",
      "note": "Тренажёр с задачами и обратной связью. Часть материала бесплатная, часть — по подписке. Удобно разогреться перед живым моком.",
      "level": "mid",
      "time": "1 ч"
    },
    {
      "id": "pramp",
      "kind": "practice",
      "title": "Pramp: парный мок-интервью",
      "url": "https://www.pramp.com/",
      "note": "Живой формат: вы проводите собеседование и сами проходите его. Один из трёх моков лучше сделать здесь с напарником.",
      "level": "mid",
      "time": "1–1.5 ч",
      "free": true
    },
    {
      "id": "primer-solutions",
      "kind": "article",
      "title": "System Design Primer: список задач с решениями",
      "url": "https://github.com/donnemartin/system-design-primer/tree/master/solutions/system_design",
      "note": "После мока сверяйтесь с готовыми решениями, но сначала рисуйте сами.",
      "level": "mid",
      "time": "по 40 мин на разбор",
      "free": true
    },
    {
      "id": "yt-gkcs",
      "kind": "video",
      "title": "Gaurav Sen — System Design (повтор перед экзаменом)",
      "authors": "Gaurav Sen",
      "url": "https://www.youtube.com/@gkcs",
      "extraUrl": {
        "label": "Плейлист System Design",
        "href": "https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX"
      },
      "note": "Перед моками пересмотрите 1–2 разбора, где автор вслух обсуждает компромиссы.",
      "level": "mid",
      "time": "1 ч",
      "free": true
    },
    {
      "id": "excalidraw",
      "kind": "practice",
      "title": "Excalidraw — запасной канвас для моков",
      "url": "https://excalidraw.com/",
      "note": "Если paperdraw или свой симулятор неудобны в мок-формате, рисуйте здесь. Главное — таймер и структура рассказа.",
      "level": "intro",
      "time": "по ходу моков",
      "free": true
    },
    {
      "id": "mock-1",
      "kind": "practice",
      "title": "Мок 1: классическая система (URL shortener или лента)",
      "url": "https://www.hellointerview.com/learn/system-design/problem-breakdowns/bitly",
      "extraUrls": [
        {
          "label": "Разбор ленты",
          "href": "https://www.hellointerview.com/learn/system-design/problem-breakdowns/fb-news-feed"
        },
        {
          "label": "Канвас paperdraw",
          "href": "https://paperdraw.dev/"
        }
      ],
      "note": "45–60 минут у доски или в paperdraw/симуляторе: требования, оценка, схема, узкие места, SLO. Затем сверка с разбором. Можно провести с напарником на Pramp.",
      "level": "mid",
      "time": "1.5 ч (включая разбор)",
      "free": true
    },
    {
      "id": "mock-2",
      "kind": "practice",
      "title": "Мок 2: сложная система (чат, уведомления или платежи)",
      "url": "https://www.hellointerview.com/learn/system-design/problem-breakdowns/payment-system",
      "extraUrls": [
        {
          "label": "WhatsApp / чат",
          "href": "https://www.hellointerview.com/learn/system-design/problem-breakdowns/whatsapp"
        },
        {
          "label": "Уведомления",
          "href": "https://www.hellointerview.com/learn/system-design/problem-breakdowns/notification-system"
        },
        {
          "label": "Канвас paperdraw",
          "href": "https://paperdraw.dev/"
        }
      ],
      "note": "Второй мок — на согласованность, очереди и отказы. Для платежей обязательны идемпотентность и ledger. 45–60 минут плюс разбор.",
      "level": "adv",
      "time": "1.5–2 ч",
      "free": true
    },
    {
      "id": "mock-3-ai",
      "kind": "practice",
      "title": "Мок 3: AI-платформа (обязательный)",
      "url": "https://huyenchip.com/2024/07/25/genai-platform.html",
      "extraUrls": [
        {
          "label": "MCP",
          "href": "https://modelcontextprotocol.io/introduction"
        },
        {
          "label": "Канвас paperdraw",
          "href": "https://paperdraw.dev/"
        }
      ],
      "note": "Спроектируйте корпоративную ИИ-платформу: шлюз к моделям, API vs GPU, RAG, агенты/MCP, оценка, наблюдаемость, guardrails, стоимость. Сначала своя схема, потом сверка со статьёй Huyen.",
      "level": "adv",
      "time": "2 ч",
      "free": true,
      "tags": [
        "ai"
      ]
    }
  ],
  "weeks": [
    {
      "id": "w1",
      "n": 1,
      "title": "Сети и веб",
      "case": "Путь HTTP-запроса",
      "goal": "Понять путь запроса: DNS, TCP, TLS, HTTP, CDN, балансировщик, WebSocket — и уметь нарисовать его с задержками.",
      "work": "Прочитайте обзор HTTP на русском и главы HPBN про задержку, TCP, TLS и HTTP/2. Посмотрите лекцию Яндекса про проектирование API. Соберите на канвасе цепочку DNS → CDN → LB → сервис и подпишите, где теряется время.",
      "items": [
        "mdn-http-ru",
        "hpbn-latency",
        "hpbn-tcp",
        "hpbn-tls",
        "hpbn-http",
        "hpbn-ws",
        "yandex-http-api",
        "yt-hnasr",
        "c4",
        "practice-w1-path"
      ]
    },
    {
      "id": "w2",
      "n": 2,
      "title": "Масштабирование и оценки",
      "case": "URL shortener",
      "goal": "Научиться оценивать QPS, объём данных и узкие места и собрать первую систему целиком — сокращатель ссылок.",
      "work": "Главы 1–2 Xu, шпаргалка по задержкам, разборы Bitly/Pastebin. Практику начинайте со своей оценки и схемы, разбор открывайте после.",
      "items": [
        "sdi1-ch1-2",
        "latency-numbers",
        "hs-building-blocks",
        "hello-bitly",
        "primer-pastebin",
        "balun-sd-intro",
        "habr-sd-1",
        "yt-bbg",
        "primer",
        "practice-w2-shortener"
      ]
    },
    {
      "id": "w3",
      "n": 3,
      "title": "Базы данных",
      "case": "Хранилище Instagram",
      "goal": "Выбирать модель данных, репликацию и ключ шардирования осмысленно, на примере фотосервиса.",
      "work": "Главы 2–3 и 5–6 DDIA — главная нагрузка недели. Дополните документацией Postgres и разбором Instagram. На канвасе разделите метаданные и блобы.",
      "items": [
        "ddia-ch2-3",
        "ddia-ch5-6",
        "pg-ha",
        "use-the-index",
        "hello-instagram",
        "habr-sd-2",
        "yt-yandex-be",
        "sds",
        "practice-w3-instagram"
      ]
    },
    {
      "id": "w4",
      "n": 4,
      "title": "Кэширование",
      "case": "News feed",
      "goal": "Понять cache-aside, TTL, инвалидацию и применить это к ленте: fan-out, кэш таймлайна, исключение знаменитостей.",
      "work": "Сначала паттерны Redis/Azure, затем разборы ленты (Xu, Hello Interview, primer, TAO). Лаборатория SDS и своя схема в paperdraw.",
      "items": [
        "redis-cache-aside",
        "azure-cache-aside",
        "sdi1-feed",
        "hello-feed",
        "primer-twitter",
        "tao",
        "primer-query-cache",
        "sds-labs",
        "habr-sd-cache",
        "practice-w4-feed"
      ]
    },
    {
      "id": "w5",
      "n": 5,
      "title": "Асинхронность: очереди, Kafka, saga, outbox",
      "case": "Система уведомлений",
      "goal": "Надёжно связать запись в БД и публикацию события и спроектировать конвейер уведомлений без dual-write.",
      "work": "Официальный ввод в Kafka, паттерны saga и outbox, русские статьи и видео Балуна, затем разбор уведомлений и своя схема с DLQ.",
      "items": [
        "kafka-intro",
        "kafka-semantics",
        "saga-pattern",
        "outbox-pattern",
        "habr-saga",
        "habr-outbox",
        "hello-notifications",
        "sdi1-notifications",
        "balun-kafka",
        "practice-w5-notif"
      ]
    },
    {
      "id": "w6",
      "n": 6,
      "title": "Теория распределённых систем",
      "case": "Чат",
      "goal": "Уверенно говорить про CAP/PACELC, часы, блокировки и Raft и применить это к порядку сообщений в чате.",
      "work": "Статьи Brewer и Abadi, визуализация Raft, главы 8–9 DDIA, Jepsen, одна-две лекции MIT 6.824. Кейс — WhatsApp/чат на канвасе.",
      "items": [
        "cap-twelve",
        "pacelc",
        "raft-site",
        "raft-viz",
        "ddia-ch8-9",
        "jepsen",
        "mit-6824",
        "hello-whatsapp",
        "sdi1-chat",
        "practice-w6-chat"
      ]
    },
    {
      "id": "w7",
      "n": 7,
      "title": "Микросервисы: DDD, API gateway, mesh, strangler fig",
      "case": "Вынос bounded context из монолита",
      "goal": "Резать систему по границам домена и уметь объяснить gateway, mesh и поэтапную миграцию.",
      "work": "Fowler (микросервисы, strangler, bounded context), Microsoft про DDD и gateway, Istio, выборочно Newman и Hard Parts. Практика — strangler для знакомой системы.",
      "items": [
        "fowler-ms",
        "fowler-strangler",
        "fowler-bc",
        "ms-ddd",
        "ms-gateway",
        "istio",
        "microservices-ch",
        "hard-parts-ch",
        "habr-sd-5",
        "practice-w7-strangler"
      ]
    },
    {
      "id": "w8",
      "n": 8,
      "title": "Надёжность и SRE",
      "case": "SLO и деградация уже спроектированной системы",
      "goal": "Формулировать SLI/SLO и error budget и встраивать таймауты, предохранители и троттлинг в схему.",
      "work": "Бесплатные главы SRE и workbook, паттерны из Release It!, circuit breaker, chaos, один доклад HighLoad++. Доработайте прошлую схему.",
      "items": [
        "sre-intro",
        "sre-risk",
        "sre-slo",
        "sre-workbook",
        "release-it-ch",
        "fowler-cb",
        "chaos",
        "throttling",
        "yt-highload",
        "practice-w8-sre"
      ]
    },
    {
      "id": "w9",
      "n": 9,
      "title": "Наблюдаемость и безопасность",
      "case": "Платёжная система",
      "goal": "Собрать контур, где видны трассы, понятна аутентификация (OAuth2/OIDC, zero trust) и деньги не расходятся при ретраях.",
      "work": "OpenTelemetry и глава SRE про мониторинг, OAuth/OIDC, BeyondCorp, разборы Stripe-подобной системы. Практика — платежи с идемпотентностью, ledger и трассировкой.",
      "items": [
        "otel-docs",
        "sre-monitoring",
        "oauth2",
        "oidc",
        "beyondcorp",
        "hello-payments",
        "sdi2-payments",
        "aws-wa",
        "practice-w9-pay"
      ]
    },
    {
      "id": "w10",
      "n": 10,
      "title": "Основы LLM-систем",
      "case": "Инференс, токены, API vs GPU, стоимость",
      "goal": "Считать токены, задержку и деньги и выбирать, когда хватит API с prompt caching, а когда нужен свой инференс.",
      "work": "Статьи и главы Chip Huyen, документация OpenAI/Anthropic по кэшу и квотам, обзор vLLM. Практическое упражнение — смета для корпоративного ассистента.",
      "items": [
        "huyen-llm-prod",
        "huyen-pitfalls",
        "ai-eng-ch",
        "openai-cache",
        "anthropic-cache",
        "vllm",
        "openai-limits",
        "dmls-serving",
        "practice-w10-cost"
      ]
    },
    {
      "id": "w11",
      "n": 11,
      "title": "RAG и данные",
      "case": "Корпоративный поиск с генерацией",
      "goal": "Спроектировать RAG-контур: чанкинг, эмбеддинги, векторная БД, гибридный поиск, реранкинг и оценка качества.",
      "work": "Оригинальная статья RAG, гайд Microsoft и hybrid search, RAGAS, главы Huyen про данные и evals. Своя схема с обновлением индекса.",
      "items": [
        "rag-paper",
        "ms-rag-guide",
        "ms-hybrid",
        "weaviate-hybrid",
        "ragas",
        "dmls-data",
        "dmls-repo",
        "ai-eng-rag",
        "practice-w11-rag"
      ]
    },
    {
      "id": "w12",
      "n": 12,
      "title": "Агенты и MCP",
      "case": "Корпоративные агенты с инструментами",
      "goal": "Собрать контур tool calling и MCP с guardrails, защитой от prompt injection и наблюдаемостью шагов агента.",
      "work": "Спецификация MCP, tool calling OpenAI/Anthropic, OWASP LLM Top 10, lethal trifecta, Langfuse, статья Huyen про платформу. Практика — агентская схема для банка.",
      "items": [
        "mcp-intro",
        "openai-tools",
        "anthropic-tools",
        "owasp-llm",
        "willison-trifecta",
        "langfuse",
        "huyen-platform",
        "aie-repo",
        "practice-w12-mcp"
      ]
    },
    {
      "id": "w13",
      "n": 13,
      "title": "Архитектура уровня компании",
      "case": "ADR, техрадар, build vs buy, FinOps, ИИ-стратегия",
      "goal": "Принимать и документировать решения уровня компании: что строить, что покупать, сколько это стоит, как выглядит ИИ-платформа.",
      "work": "Оригинальный ADR Nygard, Thoughtworks Radar, FinOps, Well-Architected, главы про роль архитектора, перечитать Huyen уже как стратегию. Итог недели — свой ADR и одностраничный радар.",
      "items": [
        "adr-nygard",
        "adr-site",
        "tw-radar",
        "finops",
        "aws-wa-w13",
        "fosa-role",
        "huyen-platform-w13",
        "yt-balun-ch",
        "practice-w13-adr"
      ]
    },
    {
      "id": "w14",
      "n": 14,
      "title": "Экзамен",
      "case": "Три мок-интервью, включая AI-платформу",
      "goal": "Собрать всё в три устных дизайна: классика, сложная распределённая система и корпоративная ИИ-платформа.",
      "work": "Сначала прочитайте, как вести разговор. Затем три мока по 45–60 минут (один лучше с напарником на Pramp). Третий мок обязателен про AI-платформу. Разборы открывайте только после своей схемы.",
      "items": [
        "hello-delivery",
        "hello-practice",
        "pramp",
        "primer-solutions",
        "yt-gkcs",
        "excalidraw",
        "mock-1",
        "mock-2",
        "mock-3-ai"
      ]
    }
  ]
};
