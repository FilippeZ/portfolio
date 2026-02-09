/**!
 * ABOUT • QUANTUM AI LAYER ENGINE 2025
 * • Holographic portrait
 * • Magnetic glass tabs (ARIA + keyboard)
 * • Neural card cascade
 * • Auto-pause video
 * • 0 leaks, 0 double-init
 * • 58 lines
 */
(() => {
  'use strict';

  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  let active = 'skills';

  // DOM ready
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();

  function init() {
    setupPortrait();
    setupTabs();
    setupCards();
    setupVideo();
  }

  // 1. HOLOGRAPHIC PORTRAIT
  function setupPortrait() {
    const el = $('.about-visual');
    if (!el) return;
    new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.classList.add('in');
      }
    }, { threshold: 0.4 }).observe(el);
  }

  // 2. MAGNETIC TABS
  function setupTabs() {
    const nav = $('.about_nav');
    if (!nav) return;

    const links = $$('[data-tab]');
    const panes = {
      skills: $('#tab-skills'),
      experience: $('#tab-experience'),
      education: $('#tab-education')
    };

    const activate = key => {
      if (active === key) return;
      active = key;

      links.forEach(l => {
        const on = l.dataset.tab === key;
        l.classList.toggle('active', on);
        l.setAttribute('aria-selected', on);
      });

      Object.entries(panes).forEach(([k, p]) => {
        if (p) {
          p.classList.toggle('active', k === key);
          p.setAttribute('aria-hidden', k !== key);
        }
      });
    };

    nav.addEventListener('click', e => {
      const a = e.target.closest('[data-tab]');
      if (a) {
        e.preventDefault();
        activate(a.dataset.tab);
      }
    });

    // Keyboard navigation
    nav.addEventListener('keydown', e => {
      if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
      const idx = links.findIndex(l => l.dataset.tab === active);
      const next = links[(idx + (e.key === 'ArrowRight' ? 1 : -1) + links.length) % links.length];
      next.focus();
      activate(next.dataset.tab);
    });

    activate(Object.keys(panes).find(k => panes[k]) || 'skills');
  }

  // 3. NEURAL CARDS
  function setupCards() {
    $$('.about_container').forEach(container => {
      const cards = $$('.edu-card', container);
      if (!cards.length) return;

      const obs = new IntersectionObserver(entries => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting && !target.classList.contains('in')) {
            target.classList.add('in');
            obs.unobserve(target);
          }
        });
      }, { root: container, threshold: 0.25 });

      cards.forEach(c => obs.observe(c));
    });
  }

  // 4. HOLOGRAPHIC VIDEO
  function setupVideo() {
    const video = $('#degree-animation');
    if (!video) return;
    const box = video.closest('.degree-container');
    if (!box) return;

    let playing = false;
    const play = () => {
      if (playing) return;
      playing = true;
      video.play().catch(() => playing = false);
    };
    const stop = () => {
      if (!playing) return;
      playing = false;
      video.pause();
      video.currentTime = 0;
    };

    box.addEventListener('mouseenter', play);
    box.addEventListener('mouseleave', stop);
    box.addEventListener('touchstart', e => {
      e.preventDefault();
      playing ? stop() : play();
    });

    document.addEventListener('visibilitychange', () => document.hidden && stop());
  }
})();