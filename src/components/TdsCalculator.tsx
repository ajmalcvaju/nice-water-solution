'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function TdsCalculator() {
  const [tdsValue, setTdsValue] = useState(450);
  const { openInquiryModal } = useCart();

  const getTdsInfo = (val: number) => {
    if (val <= 150) {
      return {
        badge: 'Good Water Quality (Low TDS)',
        badgeBg: '#10b981',
        text: 'Your water has low minerals/hardness. A standard UV+UF filtration system or Alkaline Water system will retain healthy minerals.',
        model: 'Recommended: Nice Eco UV+UF Pure'
      };
    } else if (val <= 500) {
      return {
        badge: 'Moderate Hardness / Dissolved Salts',
        badgeBg: '#00c2cb',
        text: 'Standard municipal or borewell water. Multi-stage RO with Mineral Booster and TDS Controller is ideal.',
        model: 'Recommended: Nice Grand RO+UV+UF+TDS Controller'
      };
    } else if (val <= 1200) {
      return {
        badge: 'High Hardness (Heavy Salts)',
        badgeBg: '#f59e0b',
        text: 'Borewell water with heavy salts. Requires heavy-duty RO membrane with anti-scalant dosing and Copper-Zinc purification.',
        model: 'Recommended: Nice Elite RO+Copper+Alkaline Guard'
      };
    } else {
      return {
        badge: 'Extremely High Hardness / Brackish Water',
        badgeBg: '#ef4444',
        text: 'Very high TDS water. Recommended to pair an Automatic Whole-House Water Softener with a High-Recovery Industrial/Commercial RO Plant.',
        model: 'Recommended: Nice Automatic Water Softener + Commercial RO'
      };
    }
  };

  const info = getTdsInfo(tdsValue);

  return (
    <section className="tds-calculator-section" id="tdsCalculator">
      <div className="container">
        <div className="section-title-wrap text-center">
          {/* <span className="section-tag" style={{ color: 'var(--aqua-glow)' }}>
            INTERACTIVE WATER TOOL
          </span> */}
          <h2 className="section-title text-center" style={{ color: 'white' }}>
            Water TDS & Purifier Recommendation
          </h2>
        </div>

        <div className="tds-calc-box">
          <div className="tds-slider-col">
            <h3>Test Your Input Water TDS (PPM)</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>
              Slide to your area's raw water TDS level to get instant purification recommendations from our water engineering team.
            </p>

            <div className="tds-slider-wrap">
              <div className="tds-slider-header">
                <span>Input Raw Water Hardness:</span>
                <span className="tds-val-display" id="tdsDisplayVal">
                  {tdsValue} PPM
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2500"
                value={tdsValue}
                step="25"
                className="tds-range-slider"
                id="tdsRange"
                onChange={(e) => setTdsValue(Number(e.target.value))}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8' }}>
              <span>50 PPM (Soft)</span>
              <span>500 PPM (Moderate)</span>
              <span>1200 PPM (Hard Borewell)</span>
              <span>2500 PPM (Brackish)</span>
            </div>
          </div>

          <div className="tds-recommendation-card">
            <div
              className="tds-status-indicator"
              id="tdsStatusBadge"
              style={{ background: info.badgeBg, color: '#fff' }}
            >
              {info.badge}
            </div>
            <p id="tdsRecommendationText" style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '16px' }}>
              {info.text}
            </p>
            <div
              id="tdsSuggestedModel"
              style={{ fontWeight: 800, color: 'var(--aqua-glow)', fontSize: '1.1rem', marginBottom: '16px' }}
            >
              {info.model}
            </div>
            <button
              className="btn btn-cyan btn-inquire-sm"
              id="btnTdsInquire"
              onClick={() => openInquiryModal()}
            >
              Get Free Quote for This TDS Level
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
