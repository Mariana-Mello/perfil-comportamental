/* ─────────────────────────────────────────
   Avaliação de Perfil Comportamental
   app.js — lógica + animações
───────────────────────────────────────── */

/* ══════════════════════════════════════
   CURSOR PERSONALIZADO
══════════════════════════════════════ */
const cursorDot  = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

(function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
})();

/* ══════════════════════════════════════
   PARTÍCULAS DE FUNDO
══════════════════════════════════════ */
const pCanvas = document.getElementById('particles-canvas');
const pCtx    = pCanvas.getContext('2d');
let particles  = [];

function resizeParticles() {
  pCanvas.width  = window.innerWidth;
  pCanvas.height = window.innerHeight;
}
resizeParticles();
window.addEventListener('resize', resizeParticles);

function createParticle(x, y) {
  const colors = ['#4A90D9', '#C77DFF', '#52B788', '#E63946'];
  return {
    x, y,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    size: Math.random() * 1.5 + 0.5,
    color: colors[Math.floor(Math.random() * colors.length)],
    alpha: Math.random() * 0.4 + 0.1,
    life: 1
  };
}

// Spawn partículas espalhadas
for (let i = 0; i < 60; i++) {
  particles.push(createParticle(
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight
  ));
}

function animateParticles() {
  pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
  particles.forEach((p, i) => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = pCanvas.width;
    if (p.x > pCanvas.width) p.x = 0;
    if (p.y < 0) p.y = pCanvas.height;
    if (p.y > pCanvas.height) p.y = 0;
    pCtx.beginPath();
    pCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    pCtx.fillStyle = p.color;
    pCtx.globalAlpha = p.alpha;
    pCtx.fill();
  });
  pCtx.globalAlpha = 1;
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ══════════════════════════════════════
   ORBS SEGUINDO O MOUSE
══════════════════════════════════════ */
const orb1 = document.querySelector('.orb1');
const orb2 = document.querySelector('.orb2');

let orbTargetX = 0, orbTargetY = 0;
let orb1X = 0, orb1Y = 0;
let orb2X = 0, orb2Y = 0;

document.addEventListener('mousemove', e => {
  orbTargetX = e.clientX / window.innerWidth;
  orbTargetY = e.clientY / window.innerHeight;
});

(function animateOrbs() {
  orb1X += (orbTargetX - orb1X) * 0.03;
  orb1Y += (orbTargetY - orb1Y) * 0.03;
  orb2X += ((1 - orbTargetX) - orb2X) * 0.02;
  orb2Y += ((1 - orbTargetY) - orb2Y) * 0.02;
  orb1.style.transform = `translate(${orb1X * 60}px, ${orb1Y * 60}px)`;
  orb2.style.transform = `translate(${orb2X * -40}px, ${orb2Y * -40}px)`;
  requestAnimationFrame(animateOrbs);
})();

/* ══════════════════════════════════════
   RASTRO DO CURSOR (trail)
══════════════════════════════════════ */
const trail = [];
const TRAIL_LENGTH = 12;

document.addEventListener('mousemove', e => {
  trail.push({ x: e.clientX, y: e.clientY, alpha: 1 });
  if (trail.length > TRAIL_LENGTH) trail.shift();
});

const tCanvas = document.createElement('canvas');
tCanvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9997;';
document.body.appendChild(tCanvas);
const tCtx = tCanvas.getContext('2d');

function resizeTrail() { tCanvas.width = window.innerWidth; tCanvas.height = window.innerHeight; }
resizeTrail();
window.addEventListener('resize', resizeTrail);

(function animateTrail() {
  tCtx.clearRect(0, 0, tCanvas.width, tCanvas.height);
  trail.forEach((p, i) => {
    const progress = i / TRAIL_LENGTH;
    const size = progress * 4;
    tCtx.beginPath();
    tCtx.arc(p.x, p.y, size, 0, Math.PI * 2);
    tCtx.fillStyle = `rgba(255,255,255,${progress * 0.15})`;
    tCtx.fill();
  });
  requestAnimationFrame(animateTrail);
})();

/* ══════════════════════════════════════
   LOTTIE — INTRO ICONS
══════════════════════════════════════ */

/* Fallback: se Lottie falhar, mostra emoji */
function loadLottieOrFallback(containerId, url, fallbackEmoji) {
  const el = document.getElementById(containerId);
  if (!el) return;
  try {
    const anim = lottie.loadAnimation({
      container: el,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: url
    });
    anim.addEventListener('data_failed', () => {
      el.innerHTML = `<span style="font-size:36px;display:flex;align-items:center;justify-content:center;height:100%">${fallbackEmoji}</span>`;
    });
  } catch(e) {
    el.innerHTML = `<span style="font-size:36px;display:flex;align-items:center;justify-content:center;height:100%">${fallbackEmoji}</span>`;
  }
}

/* URLs públicas e gratuitas do LottieFiles CDN */
const lottieUrls = {
  /*I: { url: 'https://assets5.lottiefiles.com/packages/lf20_jtbfg2nb.json', emoji: '🦅' },
  C: { url: 'https://assets3.lottiefiles.com/packages/lf20_myejiggj.json', emoji: '🐱' },
  O: { url: 'https://assets9.lottiefiles.com/packages/lf20_ysas1lcp.json', emoji: '🐺' },
  A: { url: 'https://assets4.lottiefiles.com/packages/lf20_lbx0qk1v.json', emoji: '🦈' }*/
  I: { url: 'public/animations/aguia.json',   emoji: '🦅' },
  C: { url: 'public/animations/gato.json',    emoji: '🐱' },
  O: { url: 'public/animations/lobo.json',    emoji: '🐺' },
  A: { url: 'public/animations/tubarao.json', emoji: '🦈' }
};

function initIntroLottie() {
  Object.entries(lottieIntroIds).forEach(([key, id]) => {
    loadLottieOrFallback(id, lottieUrls[key].url, lottieUrls[key].emoji);
  });
}

/* ══════════════════════════════════════
   CONFETTI
══════════════════════════════════════ */
const cCanvas = document.getElementById('confetti-canvas');
const cCtx    = cCanvas.getContext('2d');
cCanvas.width  = window.innerWidth;
cCanvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  cCanvas.width  = window.innerWidth;
  cCanvas.height = window.innerHeight;
});

let confettiPieces = [];
let confettiRunning = false;

function launchConfetti() {
  confettiPieces = [];
  confettiRunning = true;
  const colors = ['#4A90D9','#C77DFF','#52B788','#E63946','#FFD166','#FFFFFF'];
  for (let i = 0; i < 120; i++) {
    confettiPieces.push({
      x: Math.random() * cCanvas.width,
      y: -10 - Math.random() * 100,
      w: Math.random() * 10 + 5,
      h: Math.random() * 5 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI * 2,
      rotV: (Math.random() - 0.5) * 0.15,
      vx: (Math.random() - 0.5) * 3,
      vy: Math.random() * 3 + 2,
      alpha: 1
    });
  }
  animateConfetti();
}

function animateConfetti() {
  if (!confettiRunning) return;
  cCtx.clearRect(0, 0, cCanvas.width, cCanvas.height);
  confettiPieces.forEach((p, i) => {
    p.x  += p.vx; p.y += p.vy; p.rot += p.rotV;
    p.vy += 0.05;
    if (p.y > cCanvas.height + 20) p.alpha -= 0.05;
    if (p.alpha <= 0) return;
    cCtx.save();
    cCtx.translate(p.x, p.y);
    cCtx.rotate(p.rot);
    cCtx.globalAlpha = p.alpha;
    cCtx.fillStyle = p.color;
    cCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    cCtx.restore();
  });
  confettiPieces = confettiPieces.filter(p => p.alpha > 0);
  if (confettiPieces.length > 0) {
    requestAnimationFrame(animateConfetti);
  } else {
    confettiRunning = false;
    cCtx.clearRect(0, 0, cCanvas.width, cCanvas.height);
  }
}

/* ══════════════════════════════════════
   ESTADO DO QUIZ
══════════════════════════════════════ */
let cur = 0;
let ans = Array(Qs.length).fill(null);

/* ── Utilitários ── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Render da pergunta ── */
function render() {
  const q = Qs[cur];
  document.getElementById('q-counter').textContent   = `${cur + 1} / ${Qs.length}`;
  document.getElementById('q-scene').textContent     = q.scene;
  document.getElementById('q-story').innerHTML       = q.story;
  document.getElementById('q-main').textContent      = q.main;
  document.getElementById('prog').style.width        = `${((cur + 1) / Qs.length) * 100}%`;
  document.getElementById('story-card').style.borderColor = 'var(--border)';
  document.getElementById('story-card').style.boxShadow   = 'none';

  const list = document.getElementById('q-opts');
  list.innerHTML = '';
  q.opts.forEach((o, idx) => {
    const btn = document.createElement('button');
    btn.className = 'opt' + (ans[cur] === o.t ? ' sel' : '');
    btn.dataset.t = o.t;
    btn.style.animationDelay = `${idx * 0.06}s`;
    btn.innerHTML = `<span class="opt-tag">${o.t}</span><span>${o.label}</span>`;
    btn.addEventListener('click', () => pick(o.t));
    list.appendChild(btn);
  });

  document.getElementById('btn-prev').disabled = cur === 0;
  const btnNext = document.getElementById('btn-next');
  const isLast  = cur === Qs.length - 1;
  btnNext.innerHTML = isLast
    ? 'Ver meu resultado <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
    : 'Próxima <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
}

/* ── Selecionar opção ── */
function pick(type) {
  ans[cur] = type;
  document.querySelectorAll('.opt').forEach(b => {
    b.classList.toggle('sel', b.dataset.t === type);
  });
}

/* ── Avançar ── */
function next() {
  if (!ans[cur]) {
    const card = document.getElementById('story-card');
    card.style.borderColor = 'rgba(230,57,70,.7)';
    card.style.boxShadow   = '0 0 24px rgba(230,57,70,.2)';
    setTimeout(() => {
      card.style.borderColor = 'var(--border)';
      card.style.boxShadow   = 'none';
    }, 700);
    return;
  }
  if (cur === Qs.length - 1) { showResult(); return; }
  cur++;
  render();
}

/* ── Voltar ── */
function prev() { if (cur > 0) { cur--; render(); } }

/* ── Resultado ── */
function showResult() {
  const cnt   = { I: 0, C: 0, O: 0, A: 0 };
  ans.forEach(a => { if (a) cnt[a]++; });
  const total = ans.filter(Boolean).length;
  const pct   = k => Math.round((cnt[k] / total) * 100);
  const win   = Object.keys(cnt).reduce((a, b) => cnt[a] >= cnt[b] ? a : b);
  const p     = profiles[win];

  const sorted = ['I', 'C', 'O', 'A']
    .map(k => ({ k, pct: pct(k), cnt: cnt[k], ...profiles[k] }))
    .sort((a, b) => b.cnt - a.cnt);

  const scorecards = sorted.map((s, i) => `
    <div class="sc-card">
      <div class="sc-top">
        <span class="sc-name" style="color:${s.color}">
          <span style="font-size:20px">${s.emoji}</span> ${s.name}
        </span>
        <span class="sc-pct" style="color:${s.color}">${s.pct}%</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:0%; background:${s.color}" data-width="${s.pct}"></div>
      </div>
    </div>`).join('');

  const tags = p.traits.map(t => `<span class="tag">${t}</span>`).join('');

  document.getElementById('res-content').innerHTML = `
    <div class="res-top">
      <div class="confetti-line">🎉</div>
      <div class="badge-sm">Seu resultado</div>
      <h1 class="res-title">Você é ${p.artigo} <span style="color:${p.color}">${p.name}</span></h1>
      <p class="res-sub">${p.motto} — o seu modo natural de agir no mundo</p>
    </div>

    <div class="hero-card" style="--hc:${p.color}; border-color:${p.color}22; background:${p.color}06">
      <div class="hero-lottie" id="hero-lottie-anim"></div>
      <div class="hero-name" style="color:${p.color}; position:relative; z-index:1">${p.name}</div>
      <div class="hero-motto" style="position:relative; z-index:1">${p.motto}</div>
      <span class="hero-pct" style="background:${p.color}22; color:${p.color}; border:1px solid ${p.color}44; position:relative; z-index:1">
        ${pct(win)}% de identificação
      </span>
    </div>

    <div class="scores-wrap">${scorecards}</div>

    <div class="tags-section">
      <div class="sec-label">Suas características</div>
      <div class="tags-row">${tags}</div>
    </div>

    <div class="info-card"><div class="ic-label">⚡ Ponto forte</div>${p.strength}</div>
    <div class="info-card"><div class="ic-label">⚠️ Ponto de atenção</div>${p.challenge}</div>
    <div class="info-card"><div class="ic-label">🎯 O que você precisa</div>${p.needs}</div>
    <div class="info-card"><div class="ic-label">💎 Seu valor para a equipe</div>${p.value}</div>
    <div class="result-brand">
  <img src="public/images/logo.png" alt="Logo" />
</div>
  `;

  showScreen('s-result');

  /* Lottie no hero — com fallback para emoji */
  const heroEl = document.getElementById('hero-lottie-anim');
  if (heroEl) {
    loadLottieOrFallback('hero-lottie-anim', lottieUrls[win].url, lottieUrls[win].emoji);
  }

  /* Animar barras após render */
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }, 200);

  /* Confetti! */
  setTimeout(launchConfetti, 300);
}

/* ── Reiniciar ── */
function restart() {
  cur = 0;
  ans = Array(Qs.length).fill(null);
  showScreen('s-intro');
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initIntroLottie();

  document.getElementById('btn-start').addEventListener('click', () => {
    showScreen('s-quiz');
    render();
  });
  document.getElementById('btn-next').addEventListener('click', next);
  document.getElementById('btn-prev').addEventListener('click', prev);
  document.getElementById('btn-restart').addEventListener('click', restart);
});
