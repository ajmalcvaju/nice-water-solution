'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WaterCanvas from '@/components/WaterCanvas';
import FeatureRibbon from '@/components/FeatureRibbon';
import TdsCalculator from '@/components/TdsCalculator';
import MilestoneCounters from '@/components/MilestoneCounters';
import Testimonials from '@/components/Testimonials';
import FreeTestBanner from '@/components/FreeTestBanner';
import ProductCategoryShowcase from '@/components/ProductCategoryShowcase';

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Interactive Water Canvas */}
      <section className="hero-section" id="heroSection">
        <WaterCanvas />
        <div className="hero-bg-overlay"></div>

        <div className="container hero-content">
          <div className="hero-purity-badge">
            <span>✨</span> 100% Pure, Mineral-Rich & Healthy Alkaline Water
          </div>
          <h1 className="hero-title">
            &quot;Sea Water To The Sky Water<br />
            <span className="text-gradient">Feel The Purity&quot;</span>
          </h1>
          <div className="hero-subtitle">
            NICE WATER SOLUTIONS & TREATMENT SYSTEMS
          </div>
          <p className="hero-desc">
            Engineering next-generation Water Purifiers (RO+UV+UF), Water Treatment Plants, Water Treatment RO Plants, and Commercial Water Coolers for homes, offices, and commercial establishments.
          </p>
          <div className="hero-cta-group">
            <Link href="/products" className="btn btn-cyan" id="heroExploreBtn">
              Explore Products <span>→</span>
            </Link>
            <a href="#tdsCalculator" className="btn btn-outline-white" id="heroTestBtn">
              Check Water TDS <span>💧</span>
            </a>
          </div>
        </div>

        {/* Liquid Wave Bottom Divider */}
        <div className="hero-wave-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.04,158.41,120,231,104,262.33,97.1,292.85,82.4,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* Feature Highlights Ribbon */}
      <FeatureRibbon />

      {/* About Preview Section */}
      <section className="about-preview-section">
        <div className="container about-grid">
          <div className="about-text-col">
            <span className="section-tag">WHO WE ARE</span>
            <h2 className="brand-highlight" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ color: '#f59e0b', fontStyle: 'italic', fontWeight: 900 }}>Nice</span>
              <span style={{ fontSize: '1.8rem', color: '#0056b3', fontWeight: 800 }}>Water Solutions</span>
            </h2>
            <div className="brand-tagline">Excellence In Water Purity & Engineering</div>
            <p>
              <strong>Nice Water Solutions</strong> is a recognized leader in advanced water purification and filtration systems. We are a leading ISO certified manufacturer, exporter, and supplier of premium Water Purifiers, Water Treatment Plants, Water Treatment RO Plants, and Commercial Water Coolers.
            </p>
            <p>
              With a strong focus on quality and innovation, our products are equipped with <strong>RO + UF, UV, and TDS control technologies</strong>—designed to deliver safe, mineral-rich drinking water with long-lasting reliability for domestic, commercial, and institutional needs.
            </p>
            <div className="about-pills">
              <span className="about-pill-badge">✓ Multi-Stage RO</span>
              <span className="about-pill-badge">✓ UV Bactericide</span>
              <span className="about-pill-badge">✓ Ultra-Filtration (UF)</span>
              <span className="about-pill-badge">✓ TDS Controller</span>
              <span className="about-pill-badge">✓ Alkaline Mineral Boost</span>
            </div>
            <div className="about-btn-group">
              <Link href="/products" className="btn btn-cyan" id="aboutViewProducts">
                View Products
              </Link>
              <Link href="/contact" className="btn btn-primary" id="aboutContactUs">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="about-visual-col">
            <div className="about-img-card">
              <Image
                src="/assets/images/industrial-operations.jpg"
                alt="Nice Water Solutions Operations"
                width={600}
                height={440}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
              <div className="about-badge-float">
                <strong>15+ Years</strong>
                <span>Of Engineering Purity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive TDS Calculator */}
      <TdsCalculator />

      {/* Products Category Showcase */}
      <section className="products-section" id="productsSection">
        <div className="container">
          <div className="section-title-wrap text-center">
            <span className="section-tag">PREMIUM PURIFICATION</span>
            <h2 className="section-title text-center">Our Products</h2>
          </div>

          {/* 4 Core Customer Categories Showcase */}
          <ProductCategoryShowcase />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">ENGINEERING PURITY</span>
            <h2 className="section-title">Why Choose Us</h2>
          </div>

          <div className="feature-banner-box">
            <Image
              src="/assets/images/cooling-tower-plant.jpg"
              alt="Nice Water Treatment Plant"
              fill
              style={{ objectFit: 'cover' }}
              className="feature-banner-bg"
            />
            <div className="feature-banner-overlay"></div>

            <div className="feature-glass-card">
              <div className="badge-water-treatment">
                <span className="badge-red-box">Water</span>
                <span className="badge-blue-text">Treatment</span>
              </div>
              <p>
                Water treatment is any process that improves the quality of water to make it appropriate for a specific end-use. Nice Water Solutions delivers premium residential, commercial, and industrial water filtration systems with zero compromise on mineral health.
              </p>
              <ul className="feature-checklist">
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  ISO 9001:2015 Certified Manufacturing
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Custom Water Treatment & RO Plants
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  24/7 Dedicated Support & Service Engineers
                </li>
              </ul>
              <Link href="/services" className="btn btn-cyan">
                Learn About Our Solutions
              </Link>
            </div>
          </div>

          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <h4>Water Purifiers</h4>
              <p>Advanced RO + UV + UF domestic purifiers with active copper charge & alkaline mineral retention.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h4>Water Treatment Plants</h4>
              <p>Dual FRP vessel filtration systems, iron removal, and sand media filters for complete whole-house purification.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
              </div>
              <h4>Water Treatment RO Plants</h4>
              <p>High-capacity commercial & industrial RO plant skids from 250 LPH to 10,000 LPH with stainless steel frames.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="9" y1="6" x2="15" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="18.01" />
                </svg>
              </div>
              <h4>Commercial Water Coolers</h4>
              <p>Heavy-duty stainless steel water dispensers and coolers with refrigeration units for schools, offices & hospitals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Milestone Counters */}
      <MilestoneCounters />

      {/* Testimonials */}
      <Testimonials />

      {/* Free Test Lead Banner */}
      <FreeTestBanner />
    </>
  );
}
