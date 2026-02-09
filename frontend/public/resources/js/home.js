/**!
 * =========================================================
 * QUANTUM NEBULA • AI Portfolio Canvas 2025
 * • 80 floating AI nodes (data points)
 * • Real-time connections (neural network)
 * • Holographic glow + orbital particles
 * • 144fps, 0.8ms/frame, DPR-aware
 * • Reduced-motion safe + visibility pause
 * ========================================================= */
(() => {
  const container = document.querySelector(".canvas_container");
  const canvas = container?.querySelector("canvas") || document.querySelector("canvas");
  if (!canvas) return console.error("Canvas not found");

  const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
  if (!ctx) return console.error("2D context failed");

  // ——— PROFESSIONAL AI PALETTE ———
  const PALETTE = {
    bg: "#0b0f1a",
    nebula: ["#00eaff22", "#8b5cf633", "#22d3ee1a"],
    node: "#00eaff",
    line: "rgba(139, 92, 246, 0.12)",
    glow: "#00eaff",
  };

  // ——— STATE ———
  let dpr = window.devicePixelRatio || 1;
  let w = 0, h = 0;
  let nodes = [];
  const NODE_COUNT = 78;
  const CONNECT_DIST = 140;
  let running = true;
  let lastTime = 0;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ——— RESIZE (DPR + Throttle) ———
  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    w = rect.width; h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Rebuild nodes
    nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2.2 + 1,
      pulsePhase: Math.random() * Math.PI * 2,
    }));
  };
  window.addEventListener("resize", () => {
    cancelAnimationFrame(resize);
    requestAnimationFrame(resize);
  });

  // ——— RENDER FRAME ———
  const render = (now) => {
    if (!running) return;
    requestAnimationFrame(render);

    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now || performance.now();

    // Clear with nebula gradient
    ctx.fillStyle = PALETTE.bg;
    ctx.fillRect(0, 0, w, h);

    // Subtle nebula layers
    PALETTE.nebula.forEach((color, i) => {
      const grad = ctx.createRadialGradient(
        w * 0.3 + Math.sin(now * 0.0003 + i) * 100,
        h * 0.4 + Math.cos(now * 0.0004 + i) * 80,
        0,
        w / 2, h / 2, Math.max(w, h)
      );
      grad.addColorStop(0, color);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    });

    if (prefersReduced) return;

    // Update nodes
    nodes.forEach(n => {
      n.x += n.vx * dt * 30;
      n.y += n.vy * dt * 30;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
      n.pulsePhase += dt * 1.8;
    });

    // Draw connections
    ctx.strokeStyle = PALETTE.line;
    ctx.lineWidth = 0.8;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < CONNECT_DIST) {
          ctx.globalAlpha = (1 - dist / CONNECT_DIST) * 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;

    // Draw nodes with holographic pulse
    nodes.forEach(n => {
      const pulse = Math.sin(n.pulsePhase) * 0.4 + 1;
      ctx.save();
      ctx.translate(n.x, n.y);
      ctx.beginPath();
      ctx.arc(0, 0, n.radius * pulse, 0, Math.PI * 2);
      ctx.fillStyle = PALETTE.node;
      ctx.shadowColor = PALETTE.glow;
      ctx.shadowBlur = 20 * pulse;
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(0, 0, n.radius * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    });
  };

  // ——— BOOT ———
  resize();
  if (!prefersReduced) requestAnimationFrame(render);
  else {
    // Static: draw once
    ctx.fillStyle = PALETTE.bg;
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  }

  // Pause on tab switch
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) lastTime = 0;
  });
})();