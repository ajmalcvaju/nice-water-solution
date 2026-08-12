import React from 'react';

export default function FeatureRibbon() {
  return (
    <section className="feature-ribbon-section">
      <div className="container">
        <div className="feature-ribbon-card">
          <div className="ribbon-item">
            <div className="ribbon-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <div className="ribbon-info">
              <h3>Innovative Design</h3>
              <p>Smart ergonomic aesthetics with multi-stage mineral booster.</p>
            </div>
          </div>

          <div className="ribbon-item">
            <div className="ribbon-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </div>
            <div className="ribbon-info">
              <h3>Latest Technology</h3>
              <p>RO + UF + UV + Active TDS Control & IoT Smart Filter Alerts.</p>
            </div>
          </div>

          <div className="ribbon-item">
            <div className="ribbon-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className="ribbon-info">
              <h3>Quality Assured</h3>
              <p>ISO 9001:2015 certified with genuine food-grade components.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
