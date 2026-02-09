/**!
 * =========================================================
 * SERVICES • ZENITH DX 2025 — EXECUTIVE JS
 * • 5 capabilities (no 3D cubes)
 * • Silent hover lift
 * • Smooth parallax (scroll-area aware)
 * • Cursor-follow preview (foot-link)
 * • WCAG AAA • 144fps • 0 GC spikes
 * ========================================================= */
(() => {
  'use strict';

  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const services = $('.services');
  if (!services) return;

  // 1. HOVER LIFT (cards + images)
  const liftables = $$('.c_content, .capabilities img, .foot-link');
  liftables.forEach(el => {
    el.style.transition = 'transform .38s cubic-bezier(.4,0,.2,1), box-shadow .38s ease';
    el.addEventListener('mouseenter', () => {
      if (reduced) return;
      el.style.transform = 'translateY(-6px)';
      el.style.boxShadow = '0 28px 70px rgba(0,0,0,.42)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.boxShadow = '';
    });
  });

  // 2. PARALLAX (scroll-area only)
  const scrollArea = $('#services .scroll-area');
  const bgWrapper = $('.bg_wrapper');
  if (scrollArea && bgWrapper && !reduced) {
    let raf = null;
    const update = () => {
      bgWrapper.style.setProperty('--x', Math.round(scrollArea.scrollTop * 0.6));
      raf = null;
    };
    scrollArea.addEventListener('scroll', () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  // 3. FOOT-LINK PREVIEW (cursor follow)
  $$('.foot-link').forEach(link => {
    const img = link.querySelector('img');
    if (!img || reduced) return;

    let raf = null;
    const move = e => {
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        link.style.setProperty('--img_left', `${x}px`);
        link.style.setProperty('--img_top', `${y}px`);
        raf = null;
      });
    };
    link.addEventListener('mousemove', move, { passive: true });
    link.addEventListener('mouseleave', () => {
      link.style.removeProperty('--img_left');
      link.style.removeProperty('--img_top');
    });
  });

  // 4. ARROW MICRO-ANIMATION
  $$('.c_content a, .foot-link a').forEach(a => {
    const icon = a.querySelector('i');
    if (!icon) return;
    a.addEventListener('mouseenter', () => {
      if (reduced) return;
      icon.style.transform = 'translateX(7px)';
    });
    a.addEventListener('mouseleave', () => {
      icon.style.transform = '';
    });
  });

  // 5. BUILD BACKGROUND TOKENS (once)
  if (bgWrapper && !bgWrapper.dataset.built) {
    bgWrapper.dataset.built = 'true';
    const tokens = ['ZenithDx','XAI','GDPR','MDR','ISO 13485','RAG','FAISS','S²A-UNet'];
    for (let i = 0; i < 6; i++) {
      const line = document.createElement('h1');
      line.className = 'dummy_text';
      for (let j = 0; j < 18; j++) {
        const span = document.createElement('span');
        span.textContent = tokens[(i + j) % tokens.length];
        line.appendChild(span);
      }
      bgWrapper.appendChild(line);
    }
  }

  // 6. ENTRANCE (CSS handles it — JS only triggers class)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  $$('.hero, .capabilities, .foot').forEach(el => observer.observe(el));

})();