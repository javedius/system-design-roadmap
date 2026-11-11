# Роадмап System Design — 14 недель

Статичный сайт с согласованной 14-недельной программой проектирования систем: базовые книги, статьи, видео (включая русскоязычные) и практика на канвасе.

- Сайт: https://javedius.github.io/system-design-roadmap/
- Репозиторий: https://github.com/javedius/system-design-roadmap

Прогресс отмечается галочками и хранится в `localStorage` браузера. Фильтры и поиск работают без сервера.

Подборка собрана 11 ноября 2026. В список попали только проверенные URL.

## Сколько материалов в каждой неделе

1. Сети и веб — 10 (кейс: путь HTTP-запроса)
2. Масштабирование и оценки — 10 (кейс: URL shortener)
3. Базы данных — 9 (кейс: хранилище Instagram)
4. Кэширование — 10 (кейс: news feed)
5. Асинхронность: очереди, Kafka, saga, outbox — 10 (кейс: уведомления)
6. Теория распределённых систем — 10 (кейс: чат)
7. Микросервисы: DDD, API gateway, mesh, strangler fig — 10 (кейс: вынос bounded context)
8. Надёжность и SRE — 10 (кейс: SLO и деградация)
9. Наблюдаемость и безопасность — 9 (кейс: платёжная система)
10. Основы LLM-систем — 9 (кейс: инференс, токены, API vs GPU)
11. RAG и данные — 9 (кейс: корпоративный поиск с генерацией)
12. Агенты и MCP — 9 (кейс: корпоративные агенты)
13. Архитектура уровня компании — 9 (кейс: ADR, техрадар, FinOps, ИИ-стратегия)
14. Экзамен — 9 (три мок-интервью, включая AI-платформу)

Всего 133 слота в неделях, 143 уникальных материала (базовые книги плюс недельные главы, статьи, видео и практики).

## Базовые книги

- [Designing Data-Intensive Applications](https://dataintensive.net/) — русский перевод 1-го изд.: [Высоконагруженные приложения](https://www.labirint.ru/books/632959)
- [System Design Interview. Volume 1](https://bytebytego.com/) — [русское издание](https://www.chitai-gorod.ru/product/system-design-podgotovka-k-slozhnomu-intervyu-2898161)
- [System Design Interview. Volume 2](https://bytebytego.com/) — [русское издание](https://www.labirint.ru/books/1030640/)
- [Fundamentals of Software Architecture, 2nd Edition](https://www.developertoarchitect.com/books.html) — [русское издание](https://www.labirint.ru/books/1032887/)
- [Building Microservices, 2nd Edition](https://samnewman.io/books/building_microservices_2nd_edition/) — [русское издание](https://www.labirint.ru/books/937994/)
- [Software Architecture: The Hard Parts](https://nealford.com/books/) — [русское издание](https://www.piter.com/collection/programmirovanie-razrabotka-programnogo-obespecheniya/product/sovremennyy-podhod-k-programmnoy-arhitekture-slozhnye-kompromissy)
- [Release It!, 2nd Edition](https://pragprog.com/titles/mnee2/release-it-second-edition/) — [русское издание](https://www.piter.com/collection/programmirovanie-razrabotka-programnogo-obespecheniya/product/release-it-proektirovanie-i-dizayn-po-dlya-teh-komu-ne-vsyo-ravno)
- [Site Reliability Engineering](https://sre.google/sre-book/table-of-contents/) — бесплатно; [русский перевод](https://www.litres.ru/book/betsi-beyer-17338311/site-reliability-engineering-nadezhnost-i-bezotkaznos-39123367/)
- [AI Engineering](https://huyenchip.com/books/) — [русское издание](https://www.dkmg.ru/tovar/1243836)
- [Designing Machine Learning Systems](https://huyenchip.com/books/) — [русское издание](https://bhv.ru/product/proektirovanie-sistem-mashinnogo-obucheniya/)

Полный список с URL, типом, оценкой времени и заметками — на сайте.

## Как открыть локально

Откройте `index.html` в браузере или поднимите любой статический сервер в этой папке.
