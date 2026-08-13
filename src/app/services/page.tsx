import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductCategoryShowcase from '@/components/ProductCategoryShowcase';

export const metadata = {
  title: 'Solutions & Product Categories | Nice Water Solutions®',
  description:
    'Comprehensive Water Purifiers, Water Treatment Plants, Water Treatment RO Plants, and Commercial Water Coolers by Nice Water Solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Water Solutions & Categories</h1>
          <div className="breadcrumbs">
            <Link href="/">Home</Link> <span>/</span> <span>Solutions & Categories</span>
          </div>
        </div>
      </section>

      {/* 4 Core Customer Categories Showcase */}
      <section style={{ padding: '80px 0', background: '#f8fbfe' }}>
        <div className="container">
          <div className="section-title-wrap text-center">
            {/* <span className="section-tag">PREMIUM PURIFICATION</span> */}
            <h2 className="section-title text-center">Our Product Categories & Solutions</h2>
          </div>

          <ProductCategoryShowcase />
        </div>
      </section>

      {/* Real-World Water Purification Video Showcase */}
      <section className="video-showcase-section">
        <div className="container">
          <div className="section-title-wrap text-center">
            <span className="section-tag" style={{ color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Live Demonstrations
            </span>
            <h2 className="section-title text-center">Water Purification in Action</h2>
            <p style={{ maxWidth: '600px', margin: '10px auto 0 auto', color: 'var(--text-secondary)' }}>
              Watch our heavy-duty Water Treatment Plants and RO systems filter, purify, and transform raw water into clean, healthy, and crystal-clear drinking water.
            </p>
          </div>

          <div className="video-grid">
            {/* Video Card 1 */}
            <div className="video-card">
              <div className="video-wrapper">
                <video
                  className="video-player"
                  src="/assets/videos/water-treatment-purification-1.mp4"
                  controls
                  preload="metadata"
                  playsInline
                />
              </div>
              <div className="video-card-content">
                <h3>Heavy-Duty Water Treatment Plant – Active Filtration & Purification</h3>
                <p>
                  Witness the active filtration process in our dual-vessel media filtration systems. This video highlights the real-time purification performance and dramatic color change as raw water is processed through the active media beds.
                </p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="video-card">
              <div className="video-wrapper">
                <video
                  className="video-player"
                  src="/assets/videos/water-treatment-purification-2.mp4"
                  controls
                  preload="metadata"
                  playsInline
                />
              </div>
              <div className="video-card-content">
                <h3>Commercial RO Plant – Active Purification Showcase</h3>
                <p>
                  See how our commercial-scale Reverse Osmosis skids handle high volume filtration. The demonstration shows high-pressure vertical multi-stage pumps in operation, delivering instant, healthy mineral-balanced drinking water.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Capabilities Section */}
      <section style={{ padding: '90px 0' }}>
        <div className="container">
          <div className="section-title-wrap text-center">
            {/* <span className="section-tag">TURNKEY WATER ENGINEERING</span> */}
            <h2 className="section-title text-center">Engineered Water Systems & Capabilities</h2>
          </div>

          <div className="capabilities-grid">
            {/* Category 1: Water Purifiers */}
            <div style={{ background: 'white', borderRadius: '16px', padding: '36px', boxShadow: 'var(--shadow-md)', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div className="ribbon-icon-box" style={{ background: '#0066cc', color: 'white' }}>RO</div>
                <h3 style={{ fontSize: '1.5rem', color: '#0b2545' }}>Domestic Water Purifiers</h3>
              </div>
              <p style={{ color: '#475569', marginBottom: '16px', lineHeight: '1.7' }}>
                Multi-stage purification systems with RO+UF and UV+TDS control, featuring Active Copper Charge Technology to protect families from waterborne pathogens and preserve vital minerals.
              </p>
              <ul style={{ color: '#1e293b', fontWeight: 600, fontSize: '0.9rem', lineHeight: '1.9' }}>
                <li>✓ Multi-Stage RO + UF + UV Filtration</li>
                <li>✓ Active Copper Charge & Alkaline Mineral Boost</li>
                <li>✓ Compact Wall-Mounted & Countertop Designs</li>
              </ul>
            </div>

            {/* Category 2: Water Treatment Plant */}
            <div style={{ background: 'white', borderRadius: '16px', padding: '36px', boxShadow: 'var(--shadow-md)', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div className="ribbon-icon-box" style={{ background: '#00c2cb', color: 'white' }}>WTP</div>
                <h3 style={{ fontSize: '1.5rem', color: '#0b2545' }}>Water Treatment Plants</h3>
              </div>
              <p style={{ color: '#475569', marginBottom: '16px', lineHeight: '1.7' }}>
                Dual FRP vessel systems with Multiport valves, Dual Media Sand Filtration (DMF), Activated Carbon Filtration (ACF), and automated water softening to eliminate hardness and heavy iron.
              </p>
              <ul style={{ color: '#1e293b', fontWeight: 600, fontSize: '0.9rem', lineHeight: '1.9' }}>
                <li>✓ Heavy-Duty Dual FRP Vessel Construction</li>
                <li>✓ Automatic & Manual Multiport Backwash Valves</li>
                <li>✓ Whole-House, Villa & Apartment Protection</li>
              </ul>
            </div>

            {/* Category 3: Water Treatment RO Plant */}
            <div style={{ background: 'white', borderRadius: '16px', padding: '36px', boxShadow: 'var(--shadow-md)', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div className="ribbon-icon-box" style={{ background: '#10b981', color: 'white' }}>PLANT</div>
                <h3 style={{ fontSize: '1.5rem', color: '#0b2545' }}>Water Treatment RO Plants</h3>
              </div>
              <p style={{ color: '#475569', marginBottom: '16px', lineHeight: '1.7' }}>
                Commercial and industrial reverse osmosis plants ranging from 250 LPH to 10,000 LPH, built on stainless steel skids with digital flow meters, high-pressure vertical pumps, and automated TDS control.
              </p>
              <ul style={{ color: '#1e293b', fontWeight: 600, fontSize: '0.9rem', lineHeight: '1.9' }}>
                <li>✓ 250 LPH to 10,000 LPH Custom Skid Capacities</li>
                <li>✓ Stainless Steel 304/316 Corrosion-Resistant Frame</li>
                <li>✓ For Hospitals, Hotels, Colleges & Corporate Parks</li>
              </ul>
            </div>

            {/* Category 4: Water Cooler */}
            <div style={{ background: 'white', borderRadius: '16px', padding: '36px', boxShadow: 'var(--shadow-md)', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div className="ribbon-icon-box" style={{ background: '#0052a3', color: 'white' }}>COOL</div>
                <h3 style={{ fontSize: '1.5rem', color: '#0b2545' }}>Commercial Water Coolers</h3>
              </div>
              <p style={{ color: '#475569', marginBottom: '16px', lineHeight: '1.7' }}>
                Heavy-duty stainless steel water coolers and dispensers with multi-tap configurations (Cold and Normal water), fast-chilling refrigeration units, and built-in plumbing drainage systems.
              </p>
              <ul style={{ color: '#1e293b', fontWeight: 600, fontSize: '0.9rem', lineHeight: '1.9' }}>
                <li>✓ Food-Grade Stainless Steel Tank & Outer Body</li>
                <li>✓ Multi-Tap Cold & Ambient Dispensing</li>
                <li>✓ Eco-Friendly High-Efficiency Cooling Compressor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
