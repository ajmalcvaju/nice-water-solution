'use client';

import React, { useEffect, useRef } from 'react';

export default function WaterCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number = canvas.parentElement?.offsetWidth || window.innerWidth;
    let height: number = canvas.parentElement?.offsetHeight || window.innerHeight;
    let particles: WaterParticle[] = [];
    let mouse = { x: null as number | null, y: null as number | null, radius: 120 };
    let animationFrameId: number;

    function resizeCanvas() {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class WaterParticle {
      x: number = 0;
      y: number = 0;
      radius: number = 0;
      speedY: number = 0;
      speedX: number = 0;
      opacity: number = 0;
      wobble: number = 0;
      wobbleSpeed: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 50;
        this.radius = Math.random() * 5 + 2;
        this.speedY = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.05 + 0.02;
      }

      update() {
        this.y -= this.speedY;
        this.wobble += this.wobbleSpeed;
        this.x += Math.sin(this.wobble) * 0.8 + this.speedX;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = dx / distance;
            const directionY = dy / distance;
            this.x -= directionX * force * 3;
            this.y -= directionY * force * 3;
          }
        }

        if (this.y < -20) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        const gradient = ctx.createRadialGradient(
          this.x - this.radius * 0.3,
          this.y - this.radius * 0.3,
          this.radius * 0.1,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 1.5})`);
        gradient.addColorStop(0.5, `rgba(0, 229, 255, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(0, 102, 204, ${this.opacity * 0.2})`);

        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.6})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
        ctx.closePath();
      }
    }

    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 60);
    for (let i = 0; i < particleCount; i++) {
      const p = new WaterParticle();
      p.y = Math.random() * height;
      particles.push(p);
    }

    let waveStep = 0;

    function drawSineWaves() {
      if (!ctx) return;
      waveStep += 0.02;
      ctx.save();

      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 10) {
        const y = height - 40 + Math.sin(x * 0.005 + waveStep) * 20 + Math.cos(x * 0.003 - waveStep * 0.5) * 15;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.fillStyle = 'rgba(0, 102, 204, 0.08)';
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 10) {
        const y = height - 25 + Math.sin(x * 0.008 - waveStep * 1.2) * 18 + Math.sin(x * 0.002 + waveStep) * 10;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.fillStyle = 'rgba(0, 229, 255, 0.06)';
      ctx.fill();
      ctx.closePath();

      ctx.restore();
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      drawSineWaves();

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="water-canvas" />;
}
