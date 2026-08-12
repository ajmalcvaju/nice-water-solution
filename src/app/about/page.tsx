import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MilestoneCounters from '@/components/MilestoneCounters';

export const metadata = {
  title: 'About Us | Nice Water Solutions® - Water Treatment & Purifiers',
  description:
    'Discover Nice Water Solutions\' legacy of excellence in water treatment, ISO certified engineering, and our mission to provide pure, mineral-balanced water worldwide.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">About Nice Water Solutions®</h1>
          <div className="breadcrumbs">
            <Link href="/">Home</Link> <span>/</span> <span>About Us</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '90px 0' }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-tag">OUR MISSION & VISION</span>
              <h2 style={{ fontSize: '2.4rem', color: '#0b2545', marginBottom: '20px' }}>
                Pioneering Water Purity From Sea Water to Sky Water
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '20px', lineHeight: '1.8' }}>
                Founded with a vision to redefine drinking water safety and sustainable industrial water management,{' '}
                <strong>Nice Water Solutions®</strong> has grown into an ISO 9001:2015 certified manufacturer of high-precision water purifiers and heavy-duty water treatment plants.
              </p>
              <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '24px', lineHeight: '1.8' }}>
                Whether removing microscopic dissolved salts, heavy metals, harmful pesticides, or delivering thousands of litres of pure water daily for homes and commercial setups, Nice Water Solutions delivers uncompromised engineering quality and 100% genuine food-grade components.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
                <div style={{ background: '#f0f9fc', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #00c2cb' }}>
                  <h4 style={{ color: '#0056b3', marginBottom: '6px' }}>Vision</h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569' }}>
                    To make mineral-rich, safe drinking water and high-performance water treatment systems accessible to every home, institution, and enterprise.
                  </p>
                </div>
                <div style={{ background: '#f0f9fc', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
                  <h4 style={{ color: '#0056b3', marginBottom: '6px' }}>Quality Guarantee</h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569' }}>
                    Every membrane, pump, and UV reactor undergoes strict 12-point pressure & microbial testing before dispatch.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/assets/images/industrial-operations.jpg"
                alt="Water Treatment Operations"
                width={600}
                height={440}
                style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: 'var(--shadow-lg)', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8fbfe' }}>
        <div className="container">
          <div className="section-title-wrap text-center">
            <span className="section-tag">CORE TECHNOLOGY</span>
            <h2 className="section-title text-center">Multi-Stage Purification Architecture</h2>
          </div>

          <div className="solutions-grid" style={{ marginTop: '30px' }}>
            <div className="solution-card">
              <div className="solution-icon-box">1</div>
              <h4>Sediment & Carbon Pre-Filter</h4>
              <p>Traps suspended dirt, sand, rust, chlorine, and organic volatile chemicals to protect the delicate RO membrane.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon-box">2</div>
              <h4>Ultra-Fine RO Membrane (0.0001 Micron)</h4>
              <p>Separates heavy metals (Lead, Arsenic, Fluoride), bacteria, and dissolved salts with 99.8% filtration efficiency.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon-box">3</div>
              <h4>UV Disinfection & UF Stage</h4>
              <p>Instant germicidal ultraviolet light inactivates waterborne viruses without using hazardous chemicals.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon-box">4</div>
              <h4>Active Copper + Alkaline TDS Controller</h4>
              <p>Infuses essential calcium, magnesium, and copper ions while optimizing the pH between 7.5 to 8.5 for maximum vitality.</p>
            </div>
          </div>
        </div>
      </section>

      <MilestoneCounters />
    </>
  );
}
