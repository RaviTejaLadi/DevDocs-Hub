import type { PresetConfig } from '../types';

export const HTML_PRESET: PresetConfig = {
  id: 'html',
  label: 'HTML',
  template: 'static',
  activeFile: '/index.html',
  files: {
    '/index.html': {
      code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Pricing Card</title>
    <style>
      :root {
        --bg: #f8fafc;
        --surface: #ffffff;
        --border: #e2e8f0;
        --txt: #0f172a;
        --muted: #64748b;
        --accent: #6366f1;
        --accent-soft: #eef2ff;
        --accent-txt: #4338ca;
        --shadow: 0 4px 24px rgba(0,0,0,0.07);
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --bg: #0f172a;
          --surface: #1e293b;
          --border: #334155;
          --txt: #f1f5f9;
          --muted: #94a3b8;
          --accent: #818cf8;
          --accent-soft: #1e1b4b;
          --accent-txt: #a5b4fc;
          --shadow: 0 4px 24px rgba(0,0,0,0.4);
        }
      }
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        background: var(--bg);
        color: var(--txt);
        font-family: system-ui, -apple-system, sans-serif;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      }
      .cards {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 20px;
        padding: 2rem;
        width: 260px;
        box-shadow: var(--shadow);
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0,0,0,0.12);
      }
      .card.featured {
        border-color: var(--accent);
        background: var(--accent-soft);
      }
      .badge {
        display: inline-block;
        background: var(--accent);
        color: white;
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 0.25rem 0.6rem;
        border-radius: 99px;
        margin-bottom: 1rem;
      }
      .plan { font-size: 0.8rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.5rem; }
      .price { font-size: 2.5rem; font-weight: 800; line-height: 1; margin-bottom: 0.25rem; }
      .price span { font-size: 1rem; font-weight: 500; color: var(--muted); }
      .desc { font-size: 0.85rem; color: var(--muted); margin-bottom: 1.5rem; margin-top: 0.5rem; line-height: 1.5; }
      .features { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.75rem; }
      .features li { font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; color: var(--txt); }
      .features li::before { content: "✓"; color: var(--accent); font-weight: 700; }
      .btn {
        width: 100%;
        padding: 0.7rem;
        border-radius: 12px;
        border: 1.5px solid var(--border);
        background: transparent;
        color: var(--txt);
        font-weight: 600;
        font-size: 0.9rem;
        cursor: pointer;
        transition: background 0.15s, color 0.15s;
      }
      .card.featured .btn {
        background: var(--accent);
        color: white;
        border-color: var(--accent);
      }
      .btn:hover { opacity: 0.85; }
    </style>
  </head>
  <body>
    <div class="cards">
      <div class="card">
        <div class="plan">Starter</div>
        <div class="price">$0 <span>/ mo</span></div>
        <p class="desc">Perfect for side projects and exploration.</p>
        <ul class="features">
          <li>3 projects</li>
          <li>5GB storage</li>
          <li>Community support</li>
        </ul>
        <button class="btn">Get started free</button>
      </div>
      <div class="card featured">
        <div class="badge">Most Popular</div>
        <div class="plan">Pro</div>
        <div class="price">$19 <span>/ mo</span></div>
        <p class="desc">For teams that need more power and flexibility.</p>
        <ul class="features">
          <li>Unlimited projects</li>
          <li>100GB storage</li>
          <li>Priority support</li>
          <li>Custom domains</li>
        </ul>
        <button class="btn">Start free trial</button>
      </div>
      <div class="card">
        <div class="plan">Enterprise</div>
        <div class="price">$99 <span>/ mo</span></div>
        <p class="desc">Advanced features for large-scale deployments.</p>
        <ul class="features">
          <li>Everything in Pro</li>
          <li>SSO & audit logs</li>
          <li>SLA guarantee</li>
        </ul>
        <button class="btn">Contact sales</button>
      </div>
    </div>
  </body>
</html>`,
    },
  },
};

export const CSS_PRESET: PresetConfig = {
  id: 'css',
  label: 'CSS',
  template: 'static',
  activeFile: '/styles.css',
  files: {
    '/index.html': {
      code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>CSS — Notification Feed</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="shell">
      <div class="panel">
        <div class="panel-header">
          <h2>Notifications</h2>
          <button class="clear-btn">Mark all read</button>
        </div>
        <ul class="feed">
          <li class="item unread">
            <div class="avatar purple">KL</div>
            <div class="body">
              <p><strong>Kai Liu</strong> left a comment on your pull request.</p>
              <time>2 minutes ago</time>
            </div>
            <div class="dot"></div>
          </li>
          <li class="item unread">
            <div class="avatar green">✓</div>
            <div class="body">
              <p><strong>CI passed</strong> — deploy to production is ready.</p>
              <time>18 minutes ago</time>
            </div>
            <div class="dot"></div>
          </li>
          <li class="item">
            <div class="avatar orange">SR</div>
            <div class="body">
              <p><strong>Sara R.</strong> mentioned you in <em>#design-review</em>.</p>
              <time>1 hour ago</time>
            </div>
          </li>
          <li class="item">
            <div class="avatar blue">📦</div>
            <div class="body">
              <p><strong>4 packages</strong> have available updates.</p>
              <time>Yesterday</time>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>`,
    },
    '/styles.css': {
      code: `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #f1f5f9;
  --panel: #ffffff;
  --border: #e2e8f0;
  --txt: #0f172a;
  --muted: #64748b;
  --unread-bg: #f8faff;
  --dot: #6366f1;
  --shadow: 0 2px 16px rgba(0,0,0,0.08);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f172a;
    --panel: #1e293b;
    --border: #334155;
    --txt: #f1f5f9;
    --muted: #94a3b8;
    --unread-bg: #1e2a3a;
    --dot: #818cf8;
    --shadow: 0 2px 16px rgba(0,0,0,0.4);
  }
}

body {
  background: var(--bg);
  color: var(--txt);
  font-family: system-ui, -apple-system, sans-serif;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
}

.panel {
  width: 100%;
  max-width: 420px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--border);
}

.panel-header h2 { font-size: 1rem; font-weight: 700; }

.clear-btn {
  font-size: 0.78rem;
  color: var(--dot);
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.feed { list-style: none; }

.item {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border);
  position: relative;
  transition: background 0.15s;
}

.item:last-child { border-bottom: none; }
.item.unread { background: var(--unread-bg); }
.item:hover { background: var(--unread-bg); }

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
  color: white;
}

.avatar.purple { background: #7c3aed; }
.avatar.green  { background: #16a34a; }
.avatar.orange { background: #ea580c; }
.avatar.blue   { background: #2563eb; }

.body { flex: 1; }
.body p { font-size: 0.875rem; line-height: 1.5; color: var(--txt); }
.body time { font-size: 0.75rem; color: var(--muted); margin-top: 0.25rem; display: block; }

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--dot);
  margin-top: 6px;
  flex-shrink: 0;
}`,
    },
  },
};

export const JAVASCRIPT_PRESET: PresetConfig = {
  id: 'javascript',
  label: 'JavaScript',
  template: 'static',
  activeFile: '/script.js',
  files: {
    '/index.html': {
      code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>JS — Habit Tracker</title>
    <style>
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      :root {
        --bg: #f8fafc;
        --surface: #ffffff;
        --border: #e2e8f0;
        --txt: #0f172a;
        --muted: #94a3b8;
        --accent: #10b981;
        --accent-soft: #ecfdf5;
        --danger: #f43f5e;
        --shadow: 0 2px 12px rgba(0,0,0,0.07);
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --bg: #0f172a;
          --surface: #1e293b;
          --border: #334155;
          --txt: #f1f5f9;
          --muted: #64748b;
          --accent: #34d399;
          --accent-soft: #022c22;
          --danger: #fb7185;
          --shadow: 0 2px 12px rgba(0,0,0,0.4);
        }
      }
      body { background: var(--bg); color: var(--txt); font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
      .app { width: 100%; max-width: 420px; }
      h1 { font-size: 1.25rem; font-weight: 800; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; }
      h1 span { font-size: 1.5rem; }
      .add-row { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; }
      input {
        flex: 1;
        padding: 0.65rem 1rem;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 12px;
        color: var(--txt);
        font-size: 0.9rem;
        outline: none;
        transition: border-color 0.15s;
      }
      input:focus { border-color: var(--accent); }
      input::placeholder { color: var(--muted); }
      .add-btn {
        padding: 0.65rem 1.1rem;
        background: var(--accent);
        color: white;
        border: none;
        border-radius: 12px;
        font-weight: 700;
        font-size: 1.2rem;
        cursor: pointer;
        transition: opacity 0.15s;
        line-height: 1;
      }
      .add-btn:hover { opacity: 0.85; }
      .list { display: flex; flex-direction: column; gap: 0.625rem; }
      .habit {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 0.875rem 1rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        box-shadow: var(--shadow);
        transition: border-color 0.15s;
      }
      .habit.done { border-color: var(--accent); background: var(--accent-soft); }
      .check {
        width: 26px;
        height: 26px;
        border-radius: 8px;
        border: 2px solid var(--border);
        background: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        flex-shrink: 0;
        transition: background 0.15s, border-color 0.15s;
        color: transparent;
      }
      .habit.done .check { background: var(--accent); border-color: var(--accent); color: white; }
      .label { flex: 1; font-size: 0.9rem; font-weight: 500; }
      .habit.done .label { text-decoration: line-through; color: var(--muted); }
      .streak { font-size: 0.8rem; color: var(--muted); margin-right: 0.25rem; }
      .del { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 0.85rem; padding: 0.25rem; border-radius: 6px; transition: color 0.15s; }
      .del:hover { color: var(--danger); }
      .footer { margin-top: 1rem; font-size: 0.8rem; color: var(--muted); text-align: center; }
    </style>
  </head>
  <body>
    <div class="app">
      <h1><span>🌱</span> Daily Habits</h1>
      <div class="add-row">
        <input id="inp" type="text" placeholder="Add a new habit…" />
        <button class="add-btn" id="addBtn">+</button>
      </div>
      <div class="list" id="list"></div>
      <p class="footer" id="footer"></p>
    </div>
    <script src="./script.js"></script>
  </body>
</html>`,
    },
    '/script.js': {
      code: `let habits = [
  { id: 1, label: "Morning run", done: true, streak: 5 },
  { id: 2, label: "Read for 20 minutes", done: false, streak: 2 },
  { id: 3, label: "Drink 8 glasses of water", done: true, streak: 12 },
];
let nextId = 4;

const listEl   = document.getElementById("list");
const footerEl = document.getElementById("footer");
const inp      = document.getElementById("inp");
const addBtn   = document.getElementById("addBtn");

function render() {
  listEl.innerHTML = habits.map(h => \`
    <div class="habit\${h.done ? " done" : ""}" data-id="\${h.id}">
      <button class="check" onclick="toggle(\${h.id})">✓</button>
      <span class="label">\${h.label}</span>
      \${h.streak > 1 ? \`<span class="streak">\${h.streak}🔥</span>\` : ""}
      <button class="del" onclick="remove(\${h.id})">✕</button>
    </div>
  \`).join("");

  const done = habits.filter(h => h.done).length;
  footerEl.textContent = habits.length
    ? \`\${done} of \${habits.length} completed today\`
    : "No habits yet — add one above!";
}

window.toggle = id => {
  habits = habits.map(h =>
    h.id === id ? { ...h, done: !h.done, streak: h.done ? h.streak - 1 : h.streak + 1 } : h
  );
  render();
};

window.remove = id => {
  habits = habits.filter(h => h.id !== id);
  render();
};

addBtn.onclick = () => {
  const label = inp.value.trim();
  if (!label) return;
  habits.push({ id: nextId++, label, done: false, streak: 0 });
  inp.value = "";
  render();
};

inp.onkeypress = e => { if (e.key === "Enter") addBtn.onclick(); };

render();`,
    },
  },
};

export const REACT_PRESET: PresetConfig = {
  id: 'react',
  label: 'React',
  template: 'react',
  activeFile: '/App.js',
  files: {
    '/App.js': {
      code: `import { useState } from "react";
import "./styles.css";

const ENTRIES = [
  { id: 1, title: "Shipped the new onboarding flow", mood: "🚀", tag: "Work", date: "Today" },
  { id: 2, title: "Ran 5km without stopping", mood: "💪", tag: "Health", date: "Today" },
  { id: 3, title: "Cooked pasta from scratch — actually worked", mood: "🍝", tag: "Personal", date: "Yesterday" },
  { id: 4, title: "Finished reading Atomic Habits", mood: "📚", tag: "Learning", date: "Mon" },
];

const TAG_COLORS = {
  Work:     { bg: "var(--tag-work-bg)",     txt: "var(--tag-work-txt)" },
  Health:   { bg: "var(--tag-health-bg)",   txt: "var(--tag-health-txt)" },
  Personal: { bg: "var(--tag-personal-bg)", txt: "var(--tag-personal-txt)" },
  Learning: { bg: "var(--tag-learning-bg)", txt: "var(--tag-learning-txt)" },
};

function Tag({ label }) {
  const c = TAG_COLORS[label] || {};
  return (
    <span className="tag" style={{ background: c.bg, color: c.txt }}>
      {label}
    </span>
  );
}

export default function App() {
  const [entries, setEntries] = useState(ENTRIES);
  const [text, setText] = useState("");
  const [mood, setMood] = useState("✨");
  const [tag, setTag] = useState("Work");
  const [filter, setFilter] = useState("All");

  const tags = ["All", "Work", "Health", "Personal", "Learning"];

  const visible = filter === "All"
    ? entries
    : entries.filter(e => e.tag === filter);

  function add() {
    if (!text.trim()) return;
    setEntries([{ id: Date.now(), title: text.trim(), mood, tag, date: "Now" }, ...entries]);
    setText("");
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">📓 Journal</div>
        <nav>
          {tags.map(t => (
            <button
              key={t}
              className={"nav-btn" + (filter === t ? " active" : "")}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </nav>
        <div className="add-block">
          <textarea
            placeholder="What happened today?"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={e => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), add())}
          />
          <div className="add-row">
            <select value={mood} onChange={e => setMood(e.target.value)}>
              {["✨","🚀","💪","📚","😌","🍝","🎉","😅"].map(m => (
                <option key={m}>{m}</option>
              ))}
            </select>
            <select value={tag} onChange={e => setTag(e.target.value)}>
              {["Work","Health","Personal","Learning"].map(t => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <button className="add-btn" onClick={add}>Add</button>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="main-header">
          <h1>{filter === "All" ? "All Entries" : filter}</h1>
          <span className="count">{visible.length}</span>
        </header>
        <div className="entries">
          {visible.map(e => (
            <div key={e.id} className="entry">
              <div className="entry-mood">{e.mood}</div>
              <div className="entry-body">
                <p className="entry-title">{e.title}</p>
                <div className="entry-meta">
                  <Tag label={e.tag} />
                  <span className="entry-date">{e.date}</span>
                </div>
              </div>
              <button className="del-btn" onClick={() => setEntries(entries.filter(x => x.id !== e.id))}>✕</button>
            </div>
          ))}
          {visible.length === 0 && (
            <div className="empty">No entries here yet.</div>
          )}
        </div>
      </main>
    </div>
  );
}`,
    },
    '/styles.css': {
      code: `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #f8fafc;
  --surface: #ffffff;
  --sidebar: #f1f5f9;
  --border: #e2e8f0;
  --txt: #0f172a;
  --muted: #94a3b8;
  --accent: #6366f1;
  --accent-soft: #eef2ff;
  --shadow: 0 2px 12px rgba(0,0,0,0.07);

  --tag-work-bg: #eff6ff;     --tag-work-txt: #2563eb;
  --tag-health-bg: #ecfdf5;   --tag-health-txt: #059669;
  --tag-personal-bg: #fdf4ff; --tag-personal-txt: #9333ea;
  --tag-learning-bg: #fff7ed; --tag-learning-txt: #ea580c;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f172a;
    --surface: #1e293b;
    --sidebar: #162032;
    --border: #334155;
    --txt: #f1f5f9;
    --muted: #64748b;
    --accent: #818cf8;
    --accent-soft: #1e1b4b;
    --shadow: 0 2px 12px rgba(0,0,0,0.4);

    --tag-work-bg: #1e3a5f;     --tag-work-txt: #93c5fd;
    --tag-health-bg: #022c22;   --tag-health-txt: #6ee7b7;
    --tag-personal-bg: #2e1065; --tag-personal-txt: #d8b4fe;
    --tag-learning-bg: #431407; --tag-learning-txt: #fdba74;
  }
}

body {
  background: var(--bg);
  color: var(--txt);
  font-family: system-ui, -apple-system, sans-serif;
  height: 100vh;
  overflow: hidden;
}

.app { display: flex; height: 100vh; }

.sidebar {
  width: 260px;
  background: var(--sidebar);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  gap: 1.25rem;
  flex-shrink: 0;
}

.logo { font-size: 1.1rem; font-weight: 800; padding: 0 0.5rem; }

nav { display: flex; flex-direction: column; gap: 0.25rem; }

.nav-btn {
  background: none;
  border: none;
  color: var(--muted);
  text-align: left;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background 0.15s, color 0.15s;
}
.nav-btn:hover  { background: var(--border); color: var(--txt); }
.nav-btn.active { background: var(--accent-soft); color: var(--accent); font-weight: 700; }

.add-block { margin-top: auto; display: flex; flex-direction: column; gap: 0.5rem; }

textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.65rem;
  color: var(--txt);
  font-size: 0.85rem;
  resize: none;
  height: 80px;
  outline: none;
  font-family: inherit;
  transition: border-color 0.15s;
}
textarea:focus { border-color: var(--accent); }
textarea::placeholder { color: var(--muted); }

.add-row { display: flex; gap: 0.4rem; }
select {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--txt);
  border-radius: 8px;
  padding: 0.4rem 0.3rem;
  font-size: 0.85rem;
  cursor: pointer;
}
.add-btn {
  flex: 1;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: opacity 0.15s;
}
.add-btn:hover { opacity: 0.85; }

.main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }

.main-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1.75rem 1rem;
  border-bottom: 1px solid var(--border);
}
.main-header h1 { font-size: 1.1rem; font-weight: 800; }
.count {
  background: var(--border);
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 99px;
  padding: 0.15rem 0.55rem;
}

.entries {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.entry {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1rem 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.875rem;
  box-shadow: var(--shadow);
  transition: transform 0.15s;
}
.entry:hover { transform: translateX(2px); }

.entry-mood { font-size: 1.4rem; flex-shrink: 0; }
.entry-body { flex: 1; }
.entry-title { font-size: 0.9rem; font-weight: 500; margin-bottom: 0.35rem; }
.entry-meta { display: flex; align-items: center; gap: 0.5rem; }
.entry-date { font-size: 0.75rem; color: var(--muted); }

.tag {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.2rem 0.55rem;
  border-radius: 99px;
  letter-spacing: 0.03em;
}

.del-btn {
  background: none;
  border: none;
  color: var(--muted);
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.3rem;
  border-radius: 6px;
  transition: color 0.15s;
  flex-shrink: 0;
}
.del-btn:hover { color: #f43f5e; }

.empty { color: var(--muted); font-size: 0.9rem; text-align: center; padding: 3rem 0; }`,
    },
  },
};

export const TAILWIND_PRESET: PresetConfig = {
  id: 'tailwind',
  label: 'Tailwind',
  template: 'static',
  activeFile: '/index.html',
  files: {
    '/index.html': {
      code: `<!doctype html>
<html lang="en" class="">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Tailwind — Team Directory</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
      @custom-variant dark (&:where(.dark, .dark *));
    </style>
  </head>
  <body class="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors min-h-screen">

    <!-- Theme toggle -->
    <div class="fixed top-4 right-4 z-10">
      <button
        id="themeToggle"
        class="w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center text-base transition-colors"
        title="Toggle theme"
      >🌙</button>
    </div>

    <div class="max-w-3xl mx-auto px-6 py-14">
      <!-- Header -->
      <div class="mb-10">
        <p class="text-xs font-bold uppercase tracking-widest text-violet-500 mb-2">Engineering</p>
        <h1 class="text-3xl font-black tracking-tight">Team Directory</h1>
        <p class="mt-2 text-slate-500 dark:text-slate-400 text-sm">10 members · San Francisco & Remote</p>
      </div>

      <!-- Search -->
      <div class="relative mb-8">
        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
        <input
          id="search"
          type="search"
          placeholder="Search by name or role…"
          class="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm outline-none focus:ring-2 focus:ring-violet-500 placeholder:text-slate-400 transition"
        />
      </div>

      <!-- Grid -->
      <div id="grid" class="grid sm:grid-cols-2 gap-4"></div>
      <p id="empty" class="hidden text-center text-slate-400 py-12 text-sm">No results found.</p>
    </div>

    <script>
      const PEOPLE = [
        { name: "Amara Osei",     role: "Staff Engineer",        avatar: "AO", color: "#7c3aed", location: "San Francisco", status: "online" },
        { name: "Ji-won Park",    role: "Frontend Engineer",     avatar: "JP", color: "#2563eb", location: "Remote · Seoul", status: "online" },
        { name: "Lena Fischer",   role: "Engineering Manager",   avatar: "LF", color: "#059669", location: "Remote · Berlin", status: "busy" },
        { name: "Caleb Torres",   role: "Backend Engineer",      avatar: "CT", color: "#ea580c", location: "San Francisco", status: "offline" },
        { name: "Priya Mehta",    role: "Design Engineer",       avatar: "PM", color: "#db2777", location: "San Francisco", status: "online" },
        { name: "Soren Madsen",   role: "SRE",                   avatar: "SM", color: "#0891b2", location: "Remote · Copenhagen", status: "busy" },
        { name: "Yuki Tanaka",    role: "Product Engineer",      avatar: "YT", color: "#16a34a", location: "Remote · Tokyo", status: "online" },
        { name: "Imani Wells",    role: "Data Engineer",         avatar: "IW", color: "#9333ea", location: "San Francisco", status: "offline" },
        { name: "Omar Hassan",    role: "Security Engineer",     avatar: "OH", color: "#b45309", location: "Remote · Cairo", status: "online" },
        { name: "Ava Lindström",  role: "Platform Engineer",     avatar: "AL", color: "#0284c7", location: "Remote · Stockholm", status: "busy" },
      ];

      const STATUS = {
        online:  { dot: "#22c55e", label: "Online" },
        busy:    { dot: "#f59e0b", label: "Busy" },
        offline: { dot: "#94a3b8", label: "Away" },
      };

      const grid  = document.getElementById("grid");
      const empty = document.getElementById("empty");
      const input = document.getElementById("search");

      function render(q = "") {
        const filtered = PEOPLE.filter(p =>
          (p.name + p.role).toLowerCase().includes(q.toLowerCase())
        );
        grid.innerHTML = filtered.map(p => {
          const s = STATUS[p.status];
          return \`
          <div class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex items-center gap-4 hover:border-violet-400 dark:hover:border-violet-600 transition-colors shadow-sm">
            <div class="relative flex-shrink-0">
              <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm" style="background:\${p.color}">\${p.avatar}</div>
              <span class="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-slate-900" style="background:\${s.dot}" title="\${s.label}"></span>
            </div>
            <div class="min-w-0">
              <p class="font-bold text-sm truncate">\${p.name}</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 truncate">\${p.role}</p>
              <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5 truncate">📍 \${p.location}</p>
            </div>
          </div>\`;
        }).join("");
        empty.classList.toggle("hidden", filtered.length > 0);
        grid.classList.toggle("hidden", filtered.length === 0);
      }

      input.addEventListener("input", e => render(e.target.value));

      // Theme toggle
      const toggle = document.getElementById("themeToggle");
      const html   = document.documentElement;
      const isDark = () => html.classList.contains("dark");

      // Auto-detect system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        html.classList.add("dark");
        toggle.textContent = "☀️";
      }

      toggle.addEventListener("click", () => {
        html.classList.toggle("dark");
        toggle.textContent = isDark() ? "☀️" : "🌙";
      });

      render();
    </script>
  </body>
</html>`,
    },
  },
};

export const PRESETS: PresetConfig[] = [HTML_PRESET, CSS_PRESET, JAVASCRIPT_PRESET, REACT_PRESET, TAILWIND_PRESET];
