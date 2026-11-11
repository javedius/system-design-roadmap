/* Curated 2026-11-11. Only URLs that were checked live (HTTP 200, or a known official host that blocks bots). */
window.SD_DATA = {
  updated: "2026-11-11",
  levels: {
    intro: "начальный",
    mid: "средний",
    adv: "продвинутый",
    ref: "справочник"
  },
  kinds: {
    book: "Книги",
    article: "Статьи и репозитории",
    video: "Видео и курсы",
    practice: "Практика",
    ai: "ИИ-системы"
  },
  items: [
    {
      id: "ddia",
      kind: "book",
      title: "Designing Data-Intensive Applications",
      authors: "Martin Kleppmann, Chris Riccomini (2-е изд.)",
      url: "https://dataintensive.net/",
      extraUrl: { label: "О 2-м издании (март 2026)", href: "https://martin.kleppmann.com/2026/03/24/designing-data-intensive-applications-2e.html" },
      ru: { title: "Высоконагруженные приложения. Программирование, масштабирование, поддержка", url: "https://www.labirint.ru/books/632959", note: "перевод 1-го издания, «Питер»" },
      note: "Главная книга про хранение данных, репликацию, партиционирование и согласованность — фундамент для архитектора и CTO.",
      level: "adv"
    },
    {
      id: "sdi1",
      kind: "book",
      title: "System Design Interview. Volume 1",
      authors: "Alex Xu",
      url: "https://bytebytego.com/",
      extraUrl: { label: "Чем том 1 отличается от тома 2", href: "https://blog.bytebytego.com/p/system-design-interview-books-volume" },
      ru: { title: "System Design. Подготовка к сложному интервью", url: "https://www.chitai-gorod.ru/product/system-design-podgotovka-k-slozhnomu-intervyu-2898161" },
      note: "Пошаговый каркас и разобранные системы (лента, чат, YouTube, Drive) с сильными схемами — удобно тренировать постановку задачи.",
      level: "mid"
    },
    {
      id: "sdi2",
      kind: "book",
      title: "System Design Interview. Volume 2",
      authors: "Alex Xu, Sahn Lam",
      url: "https://bytebytego.com/",
      ru: { title: "System Design II. Распределенные системы. Подготовка к сложному интервью", url: "https://www.labirint.ru/books/1030640/" },
      note: "Более сложные кейсы: очередь сообщений, объектное хранилище, платежи, биржа — полезно, когда базовые паттерны уже знакомы.",
      level: "adv"
    },
    {
      id: "fosa",
      kind: "book",
      title: "Fundamentals of Software Architecture, 2nd Edition",
      authors: "Mark Richards, Neal Ford",
      url: "https://www.developertoarchitect.com/books.html",
      extraUrl: { label: "Страница Нила Форда", href: "https://nealford.com/books/" },
      ru: { title: "Фундаментальный подход к программной архитектуре", url: "https://www.labirint.ru/books/1032887/" },
      note: "Стили архитектуры, характеристики качества и роль архитектора — ближе к работе руководителя, чем интервью-книги.",
      level: "mid"
    },
    {
      id: "microservices",
      kind: "book",
      title: "Building Microservices, 2nd Edition",
      authors: "Sam Newman",
      url: "https://samnewman.io/books/building_microservices_2nd_edition/",
      ru: { title: "Создание микросервисов, 2-е издание", url: "https://www.labirint.ru/books/937994/" },
      note: "Когда дробить систему, как делить данные, как выстраивать взаимодействие и организацию команд — без моды ради моды.",
      level: "mid"
    },
    {
      id: "hard-parts",
      kind: "book",
      title: "Software Architecture: The Hard Parts",
      authors: "Neal Ford, Mark Richards, Pramod Sadalage, Zhamak Dehghani",
      url: "https://nealford.com/books/",
      ru: { title: "Современный подход к программной архитектуре: сложные компромиссы", url: "https://www.piter.com/collection/programmirovanie-razrabotka-programnogo-obespecheniya/product/sovremennyy-podhod-k-programmnoy-arhitekture-slozhnye-kompromissy" },
      note: "Разложение монолита, связность, саги, granularity — книга про трудные решения, а не про красивые диаграммы.",
      level: "adv"
    },
    {
      id: "release-it",
      kind: "book",
      title: "Release It!, 2nd Edition",
      authors: "Michael T. Nygard",
      url: "https://pragprog.com/titles/mnee2/release-it-second-edition/",
      ru: { title: "Release it! Проектирование и дизайн ПО для тех, кому не всё равно", url: "https://www.piter.com/collection/programmirovanie-razrabotka-programnogo-obespecheniya/product/release-it-proektirovanie-i-dizayn-po-dlya-teh-komu-ne-vsyo-ravno" },
      note: "Устойчивость в проде: каскадные отказы, таймауты, circuit breaker, backpressure — то, чем система живёт после релиза.",
      level: "mid"
    },
    {
      id: "sre-book",
      kind: "book",
      title: "Site Reliability Engineering",
      authors: "Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy (Google)",
      url: "https://sre.google/sre-book/table-of-contents/",
      extraUrl: { label: "Все книги SRE от Google, бесплатно", href: "https://sre.google/books/" },
      ru: { title: "Site Reliability Engineering. Надежность и безотказность как в Google", url: "https://www.litres.ru/book/betsi-beyer-17338311/site-reliability-engineering-nadezhnost-i-bezotkaznos-39123367/" },
      note: "Официальная бесплатная книга Google: SLO, error budget, дежурства и культура надёжности — язык, на котором CTO говорит с бизнесом о риске.",
      level: "mid",
      free: true
    },
    {
      id: "ai-engineering",
      kind: "book",
      title: "AI Engineering",
      authors: "Chip Huyen",
      url: "https://huyenchip.com/books/",
      ru: { title: "AI-инженерия. Построение приложений с использованием базовых моделей", url: "https://www.dkmg.ru/tovar/1243836" },
      note: "Как строить продукты на фундаментных моделях: RAG, оценка качества, архитектура приложения, а не только промпты.",
      level: "mid",
      tags: ["ai"]
    },
    {
      id: "dmls",
      kind: "book",
      title: "Designing Machine Learning Systems",
      authors: "Chip Huyen",
      url: "https://huyenchip.com/books/",
      ru: { title: "Проектирование систем машинного обучения", url: "https://bhv.ru/product/proektirovanie-sistem-mashinnogo-obucheniya/" },
      note: "Жизненный цикл ML-системы: данные, обучение, сервинг, мониторинг дрейфа — проектирование пайплайна, а не выбор модели.",
      level: "mid",
      tags: ["ai"]
    },

    {
      id: "primer",
      kind: "article",
      title: "The System Design Primer",
      authors: "Donne Martin",
      url: "https://github.com/donnemartin/system-design-primer",
      note: "Лучшая бесплатная карта тем: масштабирование, кэш, очереди, БД и разобранные задачи. Официального русского перевода в основном репозитории пока нет.",
      level: "intro",
      free: true
    },
    {
      id: "bbg-blog",
      kind: "article",
      title: "Блог ByteByteGo",
      authors: "Alex Xu, Sahn Lam",
      url: "https://blog.bytebytego.com/",
      note: "Короткие разборы архитектур с понятными схемами — удобно закреплять паттерны по одному за раз.",
      level: "mid",
      free: true
    },
    {
      id: "highscalability",
      kind: "article",
      title: "High Scalability",
      url: "https://highscalability.com/",
      note: "Архивы реальных архитектур (как устроена компания X) и набор паттернов масштабирования — хорошая «насмотренность».",
      level: "mid",
      free: true
    },
    {
      id: "fowler-ms",
      kind: "article",
      title: "Microservices Guide",
      authors: "Martin Fowler",
      url: "https://martinfowler.com/microservices/",
      extraUrl: { label: "Классическая статья Microservices", href: "https://martinfowler.com/articles/microservices.html" },
      note: "Спокойное определение микросервисов, предпосылки и цена сложности — чтобы не путать модульность с модой.",
      level: "mid",
      free: true
    },
    {
      id: "aws-wa",
      kind: "article",
      title: "AWS Well-Architected Framework",
      url: "https://docs.aws.amazon.com/wellarchitected/",
      extraUrl: { label: "Обзор столпов фреймворка", href: "https://aws.amazon.com/architecture/well-architected/" },
      note: "Шесть столпов (надёжность, безопасность, эффективность, стоимость, эксплуатация, устойчивость) — чеклист для разбора любой системы.",
      level: "mid",
      free: true
    },
    {
      id: "aws-arch",
      kind: "article",
      title: "AWS Architecture Center",
      url: "https://aws.amazon.com/architecture/",
      note: "Эталонные схемы и практики AWS — смотреть как набор приёмов, даже если стек не полностью облачный.",
      level: "ref",
      free: true
    },
    {
      id: "c4",
      kind: "article",
      title: "C4 Model",
      authors: "Simon Brown",
      url: "https://c4model.com/",
      note: "Простая иерархия диаграмм (context, container, component, code) — общий язык, чтобы архитектуру можно было обсуждать с командой и бизнесом.",
      level: "intro",
      free: true
    },
    {
      id: "hello-hurry",
      kind: "article",
      title: "Hello Interview: System Design in a Hurry",
      url: "https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction",
      note: "Короткий бесплатный гайд: как вести разговор о проектировании, какие концепции обязательны, разобранные задачи.",
      level: "intro",
      free: true
    },
    {
      id: "netflix",
      kind: "article",
      title: "Netflix TechBlog",
      url: "https://netflixtechblog.com/",
      note: "Сильные разборы отказоустойчивости, микросервисов и платформенной инженерии в очень большом масштабе.",
      level: "adv",
      free: true
    },
    {
      id: "uber-eng",
      kind: "article",
      title: "Uber Engineering Blog",
      url: "https://eng.uber.com/",
      note: "Геораспределённые системы, нагрузка в реальном времени, данные и платёжные контуры — живые кейсы, не учебник.",
      level: "adv",
      free: true
    },
    {
      id: "meta-eng",
      kind: "article",
      title: "Engineering at Meta",
      url: "https://engineering.fb.com/",
      note: "Инфраструктура, хранение и доставка контента на масштабе миллиардов пользователей.",
      level: "adv",
      free: true
    },
    {
      id: "cloudflare",
      kind: "article",
      title: "Cloudflare Blog",
      url: "https://blog.cloudflare.com/",
      note: "CDN, сети, DDoS, edge и производительность — полезно, когда думаешь о балансировке и доставке трафика.",
      level: "mid",
      free: true
    },
    {
      id: "habr-sd-1",
      kind: "article",
      title: "System Design для начинающих (Хабр, части 1–5)",
      authors: "перевод/адаптация на Хабре",
      url: "https://habr.com/ru/articles/873388/",
      extraUrl: { label: "Часть 2", href: "https://habr.com/ru/articles/877312/" },
      extraUrls: [
        { label: "Часть 2", href: "https://habr.com/ru/articles/877312/" },
        { label: "Часть 3", href: "https://habr.com/ru/articles/885054/" },
        { label: "Часть 4", href: "https://habr.com/ru/articles/893548/" },
        { label: "Часть 5", href: "https://habr.com/ru/articles/900396/" }
      ],
      note: "Связный русскоязычный курс: масштабирование, CAP, шардирование, кэш, очереди, микросервисы и CDN.",
      level: "intro",
      free: true
    },
    {
      id: "sds",
      kind: "article",
      title: "System Design Space",
      url: "https://system-design.space/",
      extraUrl: { label: "Лаборатории", href: "https://system-design.space/labs/" },
      note: "Русскоязычный сайт с разбором подходов, кейсов и интерактивными лабораториями по кэшу, балансировке и репликации.",
      level: "mid",
      free: true
    },
    {
      id: "sre-workbook",
      kind: "article",
      title: "The Site Reliability Workbook",
      authors: "Google",
      url: "https://sre.google/workbook/table-of-contents/",
      note: "Практическое продолжение SRE-книги: как внедрять SLO и error budget в обычной компании, не только в Google.",
      level: "adv",
      free: true
    },

    {
      id: "yt-bbg",
      kind: "video",
      title: "ByteByteGo на YouTube",
      authors: "Alex Xu, Sahn Lam",
      url: "https://www.youtube.com/@ByteByteGo",
      note: "Короткие визуальные разборы систем и паттернов — лучший старт, если хочется «увидеть» архитектуру, а не только прочитать.",
      level: "intro",
      free: true
    },
    {
      id: "yt-gkcs",
      kind: "video",
      title: "Gaurav Sen — System Design",
      authors: "Gaurav Sen",
      url: "https://www.youtube.com/@gkcs",
      extraUrl: { label: "Плейлист System Design", href: "https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX" },
      note: "Объясняет компромиссы у доски: зачем нужен кэш, как резать сервисы, как думать о нагрузке — хорошо ставит интуицию.",
      level: "mid",
      free: true
    },
    {
      id: "yt-hnasr",
      kind: "video",
      title: "Hussein Nasser",
      url: "https://www.youtube.com/@hnasr",
      note: "Глубоко про протоколы, БД, прокси и внутренности бэкенда — когда уже знаешь паттерны и хочешь понять, как это устроено в сети.",
      level: "adv",
      free: true
    },
    {
      id: "mit-6824",
      kind: "video",
      title: "MIT 6.824 / 6.5840 Distributed Systems",
      authors: "MIT PDOS",
      url: "https://pdos.csail.mit.edu/6.824/",
      extraUrl: { label: "Лекции на YouTube (весна 2020)", href: "https://www.youtube.com/@6.824" },
      note: "Академический курс по распределённым системам: Raft, репликация, шардирование. Сайт курса — весна 2026, видеолекций в открытом доступе — 2020.",
      level: "adv",
      free: true
    },
    {
      id: "yt-balun",
      kind: "video",
      title: "Vladimir Balun — Programming",
      authors: "Владимир Балун",
      url: "https://www.youtube.com/@vladimir_balun_programming",
      extraUrl: { label: "Платный курс System Design (4 недели)", href: "https://balun.courses/courses/system_design" },
      note: "Русскоязычные ролики про проектирование систем от ex-тимлида Яндекса. На канале — бесплатные разборы; отдельный курс на сайте — платный.",
      level: "mid",
      free: true
    },
    {
      id: "yt-highload",
      kind: "video",
      title: "HighLoad Channel",
      url: "https://www.youtube.com/channel/UCwHL6WHUarjGfUM_586me8w",
      note: "Официальный канал конференции HighLoad++: доклады про реальную высокую нагрузку в российских и зарубежных компаниях.",
      level: "adv",
      free: true
    },
    {
      id: "yt-yandex-be",
      kind: "video",
      title: "Школа бэкенд-разработки Яндекса",
      authors: "Яндекс",
      url: "https://education.yandex.ru/journal/15-lektsiy-po-bekend-razrabotke",
      extraUrl: { label: "Плейлист на YouTube (2021)", href: "https://www.youtube.com/playlist?list=PLQC2_0cDcSKCMKnywAS8eI_EgCcE3yx0r" },
      note: "15 лекций: архитектура бэкенда, тестирование, мониторинг, асинхронность — сильная русскоязычная база от Яндекса.",
      level: "mid",
      free: true
    },

    {
      id: "paperdraw",
      kind: "practice",
      title: "paperdraw.dev",
      url: "https://paperdraw.dev/",
      note: "Канвас, где можно расставлять сервисы, БД, балансировщики и реплики, задавать нагрузку и смотреть, где система ломается. Ближе всего к «симулятору архитектуры».",
      level: "mid",
      free: true
    },
    {
      id: "excalidraw",
      kind: "practice",
      title: "Excalidraw",
      url: "https://excalidraw.com/",
      note: "Быстрые схемы «от руки» для проработки системы или мок-интервью. Простой и бесплатный стандарт для совместного рисования.",
      level: "intro",
      free: true
    },
    {
      id: "hello-practice",
      kind: "practice",
      title: "Hello Interview — практика System Design",
      url: "https://www.hellointerview.com/practice/system-design",
      note: "Управляемая практика и разборы задач, в том числе с обратной связью. Часть материала бесплатная, часть — по подписке.",
      level: "mid"
    },
    {
      id: "pramp",
      kind: "practice",
      title: "Pramp",
      url: "https://www.pramp.com/",
      note: "Парные мок-интервью, в том числе по проектированию систем: ты проводишь собеседование и сам проходишь его.",
      level: "mid",
      free: true
    },
    {
      id: "eraser",
      kind: "practice",
      title: "Eraser",
      url: "https://www.eraser.io/",
      note: "Диаграммы и документы по архитектуре, в том числе генерация C4 из описания. Удобно, если нужно быстро набросать схему.",
      level: "mid"
    },
    {
      id: "icepanel",
      kind: "practice",
      title: "IcePanel",
      url: "https://icepanel.io/",
      note: "Модель C4 с несколькими уровнями и потоками — ближе к рабочей документации системы, чем к наброску на собеседовании.",
      level: "mid"
    },
    {
      id: "structurizr",
      kind: "practice",
      title: "Structurizr",
      url: "https://structurizr.com/",
      note: "Оригинальный инструмент Саймона Брауна: архитектура как код (DSL), из одной модели получаются разные виды C4.",
      level: "mid",
      free: true
    },
    {
      id: "sds-labs",
      kind: "practice",
      title: "Лаборатории System Design Space",
      url: "https://system-design.space/labs/",
      note: "Браузерные лаборатории на русском: кэш, балансировка, репликация — чтобы пощупать поведение, а не только прочитать определение.",
      level: "intro",
      free: true
    },

    {
      id: "huyen-llm-prod",
      kind: "ai",
      title: "Building LLM applications for production",
      authors: "Chip Huyen",
      url: "https://huyenchip.com/2023/04/11/llm-engineering.html",
      note: "Сжатый разбор, чем прототип на LLM отличается от продакшена: оценка, RAG, стоимость, надёжность.",
      level: "mid",
      free: true,
      tags: ["ai"]
    },
    {
      id: "huyen-genai-platform",
      kind: "ai",
      title: "Building A Generative AI Platform",
      authors: "Chip Huyen",
      url: "https://huyenchip.com/2024/07/25/genai-platform.html",
      note: "Как собирать платформу вокруг моделей: шлюзы, оценка, оркестрация, наблюдаемость — полезно, если ИИ внедряется по всей компании.",
      level: "adv",
      free: true,
      tags: ["ai"]
    },
    {
      id: "huyen-pitfalls",
      kind: "ai",
      title: "Common pitfalls when building generative AI applications",
      authors: "Chip Huyen",
      url: "https://huyenchip.com/2025/01/16/ai-engineering-pitfalls.html",
      note: "Типичные ошибки ИИ-инженерии: от оценки качества до архитектуры. Коротко и по делу, хорошо читать после книги или вместо длинной главы.",
      level: "mid",
      free: true,
      tags: ["ai"]
    },
    {
      id: "aie-repo",
      kind: "ai",
      title: "chiphuyen/aie-book",
      url: "https://github.com/chiphuyen/aie-book",
      note: "Сопроводительный репозиторий к книге AI Engineering: материалы и ссылки на переводы.",
      level: "ref",
      free: true,
      tags: ["ai"]
    },
    {
      id: "dmls-repo",
      kind: "ai",
      title: "chiphuyen/dmls-book",
      url: "https://github.com/chiphuyen/dmls-book",
      note: "Сопроводительный репозиторий к Designing Machine Learning Systems.",
      level: "ref",
      free: true,
      tags: ["ai"]
    }
  ],
  weeks: [
    {
      id: "w1",
      n: 1,
      title: "Каркас мышления",
      goal: "Собрать общий язык: как ставить требования, оценивать нагрузку, рисовать систему и вести разговор о компромиссах.",
      work: "Просмотреть primer и гайд Hello Interview, прочитать главы 1–3 System Design Interview vol. 1, освоить C4, посмотреть несколько роликов ByteByteGo.",
      items: ["primer", "hello-hurry", "sdi1", "c4", "yt-bbg", "excalidraw"]
    },
    {
      id: "w2",
      n: 2,
      title: "Данные и распределённые системы",
      goal: "Понять, как устроены хранилища: модели данных, репликация, партиции, согласованность.",
      work: "Начать DDIA (или русский перевод 1-го издания). Параллельно разделы primer про БД и CAP. При необходимости — ролики Hussein Nasser про базы и протоколы.",
      items: ["ddia", "primer", "yt-hnasr"]
    },
    {
      id: "w3",
      n: 3,
      title: "Масштаб: кэш, очереди, балансировка, CDN",
      goal: "Научиться собирать типичный высоконагруженный контур и объяснять, зачем каждый слой.",
      work: "Продолжить DDIA (партиционирование, производные данные). Прочитать серию на Хабре и паттерны High Scalability. Нарисовать и «нагрузить» URL shortener или ленту в paperdraw / Excalidraw.",
      items: ["ddia", "habr-sd-1", "highscalability", "sds", "sds-labs", "paperdraw", "cloudflare"]
    },
    {
      id: "w4",
      n: 4,
      title: "Архитектурные стили и компромиссы",
      goal: "Перейти от «как устроен кэш» к «какой стиль системы выбрать и чем придётся заплатить».",
      work: "Fundamentals of Software Architecture (стили и характеристики качества). Гайд Фаулера и выборочные главы Building Microservices. Проглядеть столпы AWS Well-Architected.",
      items: ["fosa", "fowler-ms", "microservices", "aws-wa", "aws-arch"]
    },
    {
      id: "w5",
      n: 5,
      title: "Надёжность в проде",
      goal: "Научиться формулировать SLO, думать об отказах и защищать систему от каскадных падений.",
      work: "Release It! (паттерны устойчивости). Из SRE-книги — введение, риск, SLO и error budget. 2–3 разбора в блогах Netflix/Uber и один доклад с HighLoad++.",
      items: ["release-it", "sre-book", "sre-workbook", "netflix", "uber-eng", "yt-highload"]
    },
    {
      id: "w6",
      n: 6,
      title: "Практика проектирования",
      goal: "Собрать две-три системы целиком: требования, оценка, схема, узкие места, план деградации.",
      work: "Кейсы из SDI vol. 1 (чат, лента или YouTube). Начать The Hard Parts (декомпозиция и связность). Две полные схемы в paperdraw или Excalidraw. Одно мок-интервью на Hello Interview или Pramp.",
      items: ["sdi1", "hard-parts", "paperdraw", "excalidraw", "hello-practice", "pramp"]
    },
    {
      id: "w7",
      n: 7,
      title: "Проектирование ИИ-систем",
      goal: "Связать обычный system design с ML/LLM: данные, сервинг, оценка, платформа для агентов.",
      work: "Designing ML Systems или AI Engineering — выбрать одну книгу как основную, вторую просмотреть. Три статьи Chip Huyen. Набросать архитектуру корпоративного контура с агентами (шлюз, инструменты, оценка, наблюдаемость).",
      items: ["dmls", "ai-engineering", "huyen-llm-prod", "huyen-genai-platform", "huyen-pitfalls", "aie-repo", "dmls-repo"]
    },
    {
      id: "w8",
      n: 8,
      title: "Синтез уровня CTO",
      goal: "Сложить стратегию, надёжность и ИИ в одно описание системы, которое можно защищать перед бизнесом.",
      work: "Дочитать оставшиеся главы DDIA или Hard Parts. По желанию — лекции 1–4 MIT 6.824, не весь курс. Закрепить русскоязычными докладами Балуна или Яндекса. Итоговое упражнение: описать в C4 реальную систему (техрадар, middleware, цикл ИИ-разработки), со SLO, рисками и планом эволюции.",
      items: ["ddia", "hard-parts", "sdi2", "mit-6824", "yt-balun", "yt-yandex-be", "c4", "meta-eng"]
    }
  ]
};
