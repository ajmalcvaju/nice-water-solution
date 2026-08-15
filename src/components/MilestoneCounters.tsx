'use client';

import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

function CounterItem({ target, suffix = '+', label }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = Math.ceil(target / totalSteps);

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div className="counter-item" ref={itemRef}>
      <div className="counter-number">
        {count.toLocaleString('en-IN')}
        {suffix}
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
}

export default function MilestoneCounters() {
  return (
    <section className="counters-section">
      <div className="container counters-grid">
        <CounterItem target={250} suffix="+" label="Commercial Projects" />
        <CounterItem target={600} suffix="+" label="Residential Projects" />
        <CounterItem target={2000} suffix="+" label="Happy Customers" />
        <CounterItem target={99} suffix=".9%" label="Purity Guaranteed" />
      </div>
    </section>
  );
}
