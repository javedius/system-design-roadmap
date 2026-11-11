(function () {
  const DATA = window.SD_DATA;
  const STORAGE_KEY = "sd-roadmap-progress-v1";
  const byId = Object.fromEntries(DATA.items.map((item) => [item.id, item]));

  const state = {
    done: loadDone(),
    query: "",
    kind: "all",
  };

  const els = {
    search: document.querySelector("#search"),
    filters: document.querySelector("#filters"),
    rail: document.querySelector("#rail"),
    weeks: document.querySelector("#weeks"),
    library: document.querySelector("#library-lists"),
    coreBooks: document.querySelector("#core-books-list"),
    progressFill: document.querySelector("#progress-fill"),
    progressText: document.querySelector("#progress-text"),
    empty: document.querySelector("#empty"),
    reset: document.querySelector("#reset-progress"),
    count: document.querySelector("#visible-count"),
  };

  function loadDone() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(parsed) ? parsed : []);
    } catch {
      return new Set();
    }
  }

  function saveDone() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.done]));
  }

  function uniqueWeekItems(week) {
    return [...new Set(week.items)].map((id) => byId[id]).filter(Boolean);
  }

  function allTrackedIds() {
    return DATA.items.map((item) => item.id);
  }

  function matches(item) {
    if (state.kind !== "all" && item.kind !== state.kind) return false;
    const q = state.query.trim().toLowerCase();
    if (!q) return true;
    const blob = [
      item.title,
      item.authors,
      item.note,
      item.ru && item.ru.title,
      DATA.kinds[item.kind],
      DATA.levels[item.level],
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return blob.includes(q);
  }

  function extraLinks(item) {
    const links = [];
    if (item.extraUrls) links.push(...item.extraUrls);
    else if (item.extraUrl) links.push(item.extraUrl);
    if (item.ru && item.ru.url) {
      links.push({
        label: "Русский перевод: " + item.ru.title,
        href: item.ru.url,
      });
    }
    return links;
  }

  function itemCard(item, options) {
    const checked = state.done.has(item.id);
    const visible = matches(item);
    const links = extraLinks(item)
      .map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`)
      .join("");
    const hint = item.ru && item.ru.note ? ` <span class="item-authors">(${escapeHtml(item.ru.note)})</span>` : "";
    return `
      <article class="item${checked ? " checked" : ""}${visible ? "" : " hidden"}" data-id="${item.id}" data-kind="${item.kind}">
        <input class="check" type="checkbox" ${checked ? "checked" : ""} data-id="${item.id}" aria-label="Отметить: ${escapeHtml(item.title)}">
        <div>
          <div class="item-top">
            <a class="item-title" href="${item.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a>
            <span class="badge ${item.kind}">${escapeHtml(DATA.kinds[item.kind])}</span>
            <span class="badge level">${escapeHtml(DATA.levels[item.level])}</span>
            ${item.time ? `<span class="badge time">${escapeHtml(item.time)}</span>` : ""}
            ${item.free ? '<span class="badge level">бесплатно</span>' : ""}
            ${item.authors ? `<span class="item-authors">${escapeHtml(item.authors)}</span>` : ""}
          </div>
          <p class="item-note">${escapeHtml(item.note)}</p>
          ${links ? `<div class="item-links">${links}${hint}</div>` : hint ? `<div class="item-links">${hint}</div>` : ""}
        </div>
      </article>
    `;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function weekProgress(week) {
    const ids = [...new Set(week.items)];
    const done = ids.filter((id) => state.done.has(id)).length;
    return { done, total: ids.length };
  }

  function renderRail() {
    els.rail.innerHTML = DATA.weeks
      .map((week) => {
        const { done, total } = weekProgress(week);
        return `
          <a class="rail-item" href="#${week.id}">
            <span class="rail-n">Неделя ${week.n}</span>
            <span class="rail-title">${escapeHtml(week.title)}</span>
            ${week.case ? `<span class="rail-case">${escapeHtml(week.case)}</span>` : ""}
            <span class="rail-prog" data-week-prog="${week.id}">${done}/${total}</span>
          </a>
        `;
      })
      .join("");
  }

  function renderWeeks() {
    const openId = currentOpenWeek();
    els.weeks.innerHTML = DATA.weeks
      .map((week) => {
        const { done, total } = weekProgress(week);
        const open = openId === week.id ? " open" : "";
        const finished = done === total && total > 0 ? " done" : "";
        const items = uniqueWeekItems(week).map((item) => itemCard(item)).join("");
        return `
          <section class="week${open}${finished}" id="${week.id}" data-week="${week.id}">
            <div class="week-axis"><div class="week-dot">${week.n}</div></div>
            <div class="week-card">
              <button class="week-head" type="button" aria-expanded="${open ? "true" : "false"}">
                <div>
                  ${week.case ? `<span class="week-case">Кейс: ${escapeHtml(week.case)}</span>` : ""}
                  <h3>${escapeHtml(week.title)}</h3>
                  <p>${escapeHtml(week.goal)}</p>
                </div>
                <div class="week-toggle"><span data-week-prog="${week.id}">${done}/${total}</span> · открыть</div>
              </button>
              <div class="week-body">
                <p class="week-work">${escapeHtml(week.work)}</p>
                <div class="list">${items}</div>
              </div>
            </div>
          </section>
        `;
      })
      .join("");
  }

  function currentOpenWeek() {
    const open = document.querySelector(".week.open");
    if (open) return open.dataset.week;
    const hash = location.hash.replace("#", "");
    if (DATA.weeks.some((week) => week.id === hash)) return hash;
    return "w1";
  }

  function renderCoreBooks() {
    if (!els.coreBooks || !DATA.coreBooks) return;
    const books = DATA.coreBooks.map((id) => byId[id]).filter(Boolean);
    els.coreBooks.innerHTML = `<div class="list">${books.map((item) => itemCard(item)).join("")}</div>`;
  }

  function renderLibrary() {
    const order = ["book", "article", "video", "practice", "ai"];
    els.library.innerHTML = order
      .map((kind) => {
        const items = DATA.items.filter((item) => item.kind === kind);
        return `
          <section class="kind-block" data-kind-block="${kind}">
            <h3>${escapeHtml(DATA.kinds[kind])}</h3>
            <div class="list">${items.map((item) => itemCard(item)).join("")}</div>
          </section>
        `;
      })
      .join("");
  }

  function updateProgress() {
    const ids = allTrackedIds();
    const done = ids.filter((id) => state.done.has(id)).length;
    const pct = ids.length ? Math.round((done / ids.length) * 100) : 0;
    els.progressFill.style.width = pct + "%";
    els.progressText.textContent = `${done} из ${ids.length} · ${pct}%`;
    DATA.weeks.forEach((week) => {
      const { done: d, total } = weekProgress(week);
      document.querySelectorAll(`[data-week-prog="${week.id}"]`).forEach((node) => {
        node.textContent = `${d}/${total}`;
      });
      const section = document.querySelector(`.week[data-week="${week.id}"]`);
      if (section) section.classList.toggle("done", d === total && total > 0);
    });
  }

  function applyFilters() {
    const cards = document.querySelectorAll(".item");
    let visible = 0;
    cards.forEach((card) => {
      const item = byId[card.dataset.id];
      const show = matches(item);
      card.classList.toggle("hidden", !show);
      if (show) visible += 1;
    });
    const core = document.querySelector("#core-books");
    if (core) {
      const any = [...core.querySelectorAll(".item")].some((card) => !card.classList.contains("hidden"));
      core.style.display = any ? "" : "none";
    }
    document.querySelectorAll("[data-kind-block]").forEach((block) => {
      const any = [...block.querySelectorAll(".item")].some((card) => !card.classList.contains("hidden"));
      block.style.display = any ? "" : "none";
    });
    document.querySelectorAll(".week").forEach((week) => {
      const any = [...week.querySelectorAll(".item")].some((card) => !card.classList.contains("hidden"));
      week.style.display = any ? "" : "none";
    });
    document.querySelectorAll(".rail-item").forEach((link) => {
      const id = link.getAttribute("href").slice(1);
      const week = document.getElementById(id);
      link.style.display = week && week.style.display === "none" ? "none" : "";
    });
    els.empty.classList.toggle("show", visible === 0);
    if (els.count) {
      const libVisible = document.querySelectorAll("#library-lists .item:not(.hidden)").length;
      els.count.textContent = String(libVisible);
    }
  }

  function bind() {
    els.search.addEventListener("input", () => {
      state.query = els.search.value;
      applyFilters();
    });

    els.filters.addEventListener("click", (event) => {
      const btn = event.target.closest(".filter-btn");
      if (!btn) return;
      state.kind = btn.dataset.kind;
      els.filters.querySelectorAll(".filter-btn").forEach((node) => {
        node.setAttribute("aria-pressed", node === btn ? "true" : "false");
      });
      applyFilters();
    });

    document.body.addEventListener("change", (event) => {
      const box = event.target.closest(".check");
      if (!box) return;
      const id = box.dataset.id;
      if (box.checked) state.done.add(id);
      else state.done.delete(id);
      saveDone();
      document.querySelectorAll(`.check[data-id="${id}"]`).forEach((node) => {
        node.checked = box.checked;
        node.closest(".item").classList.toggle("checked", box.checked);
      });
      updateProgress();
    });

    els.weeks.addEventListener("click", (event) => {
      const head = event.target.closest(".week-head");
      if (!head) return;
      const week = head.closest(".week");
      const willOpen = !week.classList.contains("open");
      document.querySelectorAll(".week").forEach((node) => {
        node.classList.remove("open");
        node.querySelector(".week-head").setAttribute("aria-expanded", "false");
      });
      if (willOpen) {
        week.classList.add("open");
        week.querySelector(".week-head").setAttribute("aria-expanded", "true");
        history.replaceState(null, "", "#" + week.id);
      }
    });

    els.reset.addEventListener("click", () => {
      if (!confirm("Сбросить весь прогресс в этом браузере?")) return;
      state.done.clear();
      saveDone();
      document.querySelectorAll(".check").forEach((node) => {
        node.checked = false;
        node.closest(".item").classList.remove("checked");
      });
      updateProgress();
    });

    window.addEventListener("hashchange", () => {
      const id = location.hash.replace("#", "");
      const week = document.getElementById(id);
      if (!week || !week.classList.contains("week")) return;
      document.querySelectorAll(".week").forEach((node) => node.classList.remove("open"));
      week.classList.add("open");
      week.querySelector(".week-head").setAttribute("aria-expanded", "true");
    });
  }

  renderCoreBooks();
  renderRail();
  renderWeeks();
  renderLibrary();
  bind();
  updateProgress();
  applyFilters();
})();
