import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import './AnimatedBackground.css';

const NUM_NODES = 55;
const MAX_DIST = 140;

const NODE_COLORS_DARK = [
  { r: 0,   g: 212, b: 255 }, // cyan
  { r: 168, g: 85,  b: 247 }, // purple
  { r: 59,  g: 130, b: 246 }, // blue
];

const NODE_COLORS_LIGHT = [
  { r: 0,   g: 139, b: 204 }, // darker cyan
  { r: 124, g: 58,  b: 237 }, // darker purple
  { r: 37,  g: 99,  b: 235 }, // darker blue
];

const AnimatedBackground = () => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const scrollRef = useRef(0);
  const animRef = useRef(null);
  const nodesRef = useRef([]);
  const themeRef = useRef(theme);

  // Keep themeRef in sync without restarting the animation
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleScroll = () => {
      scrollRef.current = window.scrollY || document.documentElement.scrollTop;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Build nodes — once, reused across theme changes
    const allColors = [...NODE_COLORS_DARK, ...NODE_COLORS_LIGHT];
    nodesRef.current = Array.from({ length: NUM_NODES }, (_, i) => {
      const colorIdx = i % NODE_COLORS_DARK.length;
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.6,
        colorIdx,
        parallax: Math.random() * 0.12 + 0.02,
      };
    });

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const scroll = scrollRef.current;
      const isDark = themeRef.current === 'dark';
      const palette = isDark ? NODE_COLORS_DARK : NODE_COLORS_LIGHT;
      const nodeOpacity = isDark ? 0.75 : 0.55;
      const glowOpacity = isDark ? 0.05 : 0.06;
      const edgeBase = isDark ? 0.28 : 0.18;

      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;

      // Drift nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -20) node.x = w + 20;
        if (node.x > w + 20) node.x = -20;
        if (node.y < -20) node.y = h + 20;
        if (node.y > h + 20) node.y = -20;
      }

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const ay = a.y - scroll * a.parallax;
          const by = b.y - scroll * b.parallax;
          const dx = a.x - b.x;
          const dy = ay - by;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * edgeBase;
            const c = palette[a.colorIdx];
            ctx.beginPath();
            ctx.moveTo(a.x, ay);
            ctx.lineTo(b.x, by);
            ctx.strokeStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const ny = node.y - scroll * node.parallax;
        if (ny < -30 || ny > h + 30) continue;
        const c = palette[node.colorIdx];

        // Glow
        ctx.beginPath();
        ctx.arc(node.x, ny, node.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${glowOpacity})`;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, ny, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${nodeOpacity})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // run once — theme changes are read from themeRef

  return (
    <div className="animated-bg-container" aria-hidden="true">
      <div className="orb orb-cyan"></div>
      <div className="orb orb-purple"></div>
      <div className="orb orb-blue"></div>
      <canvas ref={canvasRef} className="network-canvas"></canvas>
      <div className="bg-vignette"></div>
    </div>
  );
};

export default AnimatedBackground;
