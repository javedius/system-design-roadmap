# Роадмап System Design

Статичный сайт с восьминедельным планом изучения проектирования систем: книги, статьи, видео, практика и блок про ИИ-системы.

- Сайт: https://javedius.github.io/system-design-roadmap/
- Репозиторий: https://github.com/javedius/system-design-roadmap

Прогресс отмечается галочками и хранится в `localStorage` браузера. Фильтры и поиск работают без сервера.

Подборка собрана 11 ноября 2026 для руководителя разработки, который хочет увереннее проектировать системы и расти в сторону CTO, в том числе в задачах с ИИ. В список попали только проверенные URL.

## Как открыть локально

Откройте `index.html` в браузере или поднимите любой статический сервер в этой папке.

## Порядок на 8 недель

1. Каркас мышления: primer, Hello Interview, SDI vol. 1 (гл. 1–3), C4, ByteByteGo, Excalidraw.
2. Данные и распределённые системы: DDIA, разделы primer, при необходимости Hussein Nasser.
3. Масштаб: кэш, очереди, балансировка, CDN — DDIA, Хабр, High Scalability, paperdraw.
4. Архитектурные стили и компромиссы: Fundamentals of Software Architecture, Fowler, Building Microservices, AWS Well-Architected.
5. Надёжность в проде: Release It!, SRE book, инженерные блоги, HighLoad++.
6. Практика проектирования: кейсы SDI, The Hard Parts, мок-интервью, схемы на канвасе.
7. Проектирование ИИ-систем: книги и статьи Chip Huyen.
8. Синтез уровня CTO: дочитать ключевые книги, выборочно MIT 6.824, итоговое описание своей системы в C4 со SLO.

## Книги

- [Designing Data-Intensive Applications](https://dataintensive.net/), фундамент по данным, репликации и согласованности; [о 2-м издании](https://martin.kleppmann.com/2026/03/24/designing-data-intensive-applications-2e.html). Русский перевод 1-го издания: [Высоконагруженные приложения](https://www.labirint.ru/books/632959). Уровень: продвинутый.
- [System Design Interview. Volume 1](https://bytebytego.com/), каркас интервью и разобранные системы со схемами. Русский перевод: [System Design. Подготовка к сложному интервью](https://www.chitai-gorod.ru/product/system-design-podgotovka-k-slozhnomu-intervyu-2898161). Уровень: средний.
- [System Design Interview. Volume 2](https://bytebytego.com/), более сложные кейсы: очереди, объектное хранилище, платежи. Русский перевод: [System Design II](https://www.labirint.ru/books/1030640/). Уровень: продвинутый.
- [Fundamentals of Software Architecture, 2nd Edition](https://www.developertoarchitect.com/books.html), стили архитектуры и роль архитектора. Русский перевод: [Фундаментальный подход к программной архитектуре](https://www.labirint.ru/books/1032887/). Уровень: средний.
- [Building Microservices, 2nd Edition](https://samnewman.io/books/building_microservices_2nd_edition/), когда дробить систему и как делить данные. Русский перевод: [Создание микросервисов](https://www.labirint.ru/books/937994/). Уровень: средний.
- [Software Architecture: The Hard Parts](https://nealford.com/books/), трудные компромиссы декомпозиции. Русский перевод: [Современный подход к программной архитектуре: сложные компромиссы](https://www.piter.com/collection/programmirovanie-razrabotka-programnogo-obespecheniya/product/sovremennyy-podhod-k-programmnoy-arhitekture-slozhnye-kompromissy). Уровень: продвинутый.
- [Release It!, 2nd Edition](https://pragprog.com/titles/mnee2/release-it-second-edition/), устойчивость в проде. Русский перевод: [Release it!](https://www.piter.com/collection/programmirovanie-razrabotka-programnogo-obespecheniya/product/release-it-proektirovanie-i-dizayn-po-dlya-teh-komu-ne-vsyo-ravno). Уровень: средний.
- [Site Reliability Engineering](https://sre.google/sre-book/table-of-contents/), бесплатная книга Google про SLO и культуру надёжности. Русский перевод: [SRE. Надежность и безотказность как в Google](https://www.litres.ru/book/betsi-beyer-17338311/site-reliability-engineering-nadezhnost-i-bezotkaznos-39123367/). Уровень: средний.
- [AI Engineering](https://huyenchip.com/books/), продукты на фундаментных моделях. Русский перевод: [AI-инженерия](https://www.dkmg.ru/tovar/1243836). Уровень: средний.
- [Designing Machine Learning Systems](https://huyenchip.com/books/), жизненный цикл ML-системы. Русский перевод: [Проектирование систем машинного обучения](https://bhv.ru/product/proektirovanie-sistem-mashinnogo-obucheniya/). Уровень: средний.

## Статьи и репозитории

- [The System Design Primer](https://github.com/donnemartin/system-design-primer), лучшая бесплатная карта тем и задач. Уровень: начальный.
- [Блог ByteByteGo](https://blog.bytebytego.com/), короткие разборы архитектур со схемами. Уровень: средний.
- [High Scalability](https://highscalability.com/), реальные архитектуры компаний и паттерны масштабирования. Уровень: средний.
- [Microservices Guide](https://martinfowler.com/microservices/), спокойное определение микросервисов и их цены. Уровень: средний.
- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/), чеклист из шести столпов качества. Уровень: средний.
- [AWS Architecture Center](https://aws.amazon.com/architecture/), эталонные облачные схемы. Уровень: справочник.
- [C4 Model](https://c4model.com/), простой язык архитектурных диаграмм. Уровень: начальный.
- [Hello Interview: System Design in a Hurry](https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction), короткий гайд по ведению разговора о системе. Уровень: начальный.
- [Netflix TechBlog](https://netflixtechblog.com/), отказоустойчивость и платформа в большом масштабе. Уровень: продвинутый.
- [Uber Engineering Blog](https://eng.uber.com/), геораспределённые системы и данные. Уровень: продвинутый.
- [Engineering at Meta](https://engineering.fb.com/), инфраструктура на масштабе миллиардов пользователей. Уровень: продвинутый.
- [Cloudflare Blog](https://blog.cloudflare.com/), CDN, сети и доставка трафика. Уровень: средний.
- [System Design для начинающих (Хабр, часть 1)](https://habr.com/ru/articles/873388/), связный русскоязычный цикл; также [часть 2](https://habr.com/ru/articles/877312/), [3](https://habr.com/ru/articles/885054/), [4](https://habr.com/ru/articles/893548/), [5](https://habr.com/ru/articles/900396/). Уровень: начальный.
- [System Design Space](https://system-design.space/), русскоязычные разборы и лаборатории. Уровень: средний.
- [The Site Reliability Workbook](https://sre.google/workbook/table-of-contents/), практика внедрения SLO. Уровень: продвинутый.

## Видео и курсы

- [ByteByteGo на YouTube](https://www.youtube.com/@ByteByteGo), короткие визуальные разборы систем. Уровень: начальный.
- [Gaurav Sen](https://www.youtube.com/@gkcs), компромиссы у доски; [плейлист System Design](https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX). Уровень: средний.
- [Hussein Nasser](https://www.youtube.com/@hnasr), протоколы, БД и внутренности бэкенда. Уровень: продвинутый.
- [MIT 6.824 / 6.5840 Distributed Systems](https://pdos.csail.mit.edu/6.824/), академический курс; [лекции 2020 на YouTube](https://www.youtube.com/@6.824). Уровень: продвинутый.
- [Vladimir Balun — Programming](https://www.youtube.com/@vladimir_balun_programming), русскоязычные разборы; отдельно есть [платный курс](https://balun.courses/courses/system_design). Уровень: средний.
- [HighLoad Channel](https://www.youtube.com/channel/UCwHL6WHUarjGfUM_586me8w), доклады HighLoad++. Уровень: продвинутый.
- [Школа бэкенд-разработки Яндекса](https://education.yandex.ru/journal/15-lektsiy-po-bekend-razrabotke), 15 лекций; [плейлист](https://www.youtube.com/playlist?list=PLQC2_0cDcSKCMKnywAS8eI_EgCcE3yx0r). Уровень: средний.

## Практика

- [paperdraw.dev](https://paperdraw.dev/), канвас с сервисами, БД, репликами и нагрузкой — ближе всего к симулятору архитектуры. Уровень: средний.
- [Excalidraw](https://excalidraw.com/), быстрые схемы «от руки». Уровень: начальный.
- [Hello Interview — практика](https://www.hellointerview.com/practice/system-design), управляемые задачи и разборы. Уровень: средний.
- [Pramp](https://www.pramp.com/), парные мок-интервью. Уровень: средний.
- [Eraser](https://www.eraser.io/), диаграммы, в том числе C4. Уровень: средний.
- [IcePanel](https://icepanel.io/), модель C4 для рабочей документации. Уровень: средний.
- [Structurizr](https://structurizr.com/), архитектура как код по модели C4. Уровень: средний.
- [Лаборатории System Design Space](https://system-design.space/labs/), браузерные опыты на русском. Уровень: начальный.

## ИИ-системы

- [AI Engineering](https://huyenchip.com/books/) и [Designing Machine Learning Systems](https://huyenchip.com/books/), две основные книги Chip Huyen.
- [Building LLM applications for production](https://huyenchip.com/2023/04/11/llm-engineering.html), чем прототип отличается от продакшена. Уровень: средний.
- [Building A Generative AI Platform](https://huyenchip.com/2024/07/25/genai-platform.html), платформенный контур вокруг моделей. Уровень: продвинутый.
- [Common pitfalls when building generative AI applications](https://huyenchip.com/2025/01/16/ai-engineering-pitfalls.html), типичные ошибки ИИ-инженерии. Уровень: средний.
- [chiphuyen/aie-book](https://github.com/chiphuyen/aie-book) и [chiphuyen/dmls-book](https://github.com/chiphuyen/dmls-book), сопроводительные репозитории.
