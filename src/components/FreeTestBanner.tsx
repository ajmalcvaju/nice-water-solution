'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function FreeTestBanner() {
  const { showToast } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [requirement, setRequirement] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const message = `💧 *FREE WATER PURITY TEST BOOKING - NICE WATER SOLUTIONS* 💧\n` +
      `-----------------------------------------\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🎯 *Requirement:* ${requirement}\n` +
      `-----------------------------------------\n` +
      `Please schedule a technician visit for free water TDS testing.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919809333324?text=${encoded}`;

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, inquiryType: requirement, message }),
    }).catch(console.error);

    setTimeout(() => {
      setSubmitting(false);
      setName('');
      setPhone('');
      setRequirement('');
      showToast('Redirecting to WhatsApp (9809333324) to confirm your water test appointment...');
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section className="cta-banner-section">
      <div className="container cta-banner-inner">
        <div className="cta-banner-text">
          <h2>Schedule a Free Home / Factory Water Purity Test</h2>
          <p>
            Our certified water testing technician will visit your site, measure Total Dissolved Solids (TDS), pH, and heavy metal levels, and recommend the exact filtration setup for your health.
          </p>
          <div style={{ display: 'flex', gap: '20px', fontWeight: 700 }}>
            <div>✓ Zero Cost Inspection</div>
            <div>✓ Instant Report</div>
            <div>✓ WhatsApp Support: 9809333324</div>
          </div>
        </div>

        <div className="cta-form-card">
          <h3>Book Free Water Test</h3>
          <p>Instant confirmation directly via WhatsApp.</p>
          <form className="lead-form" id="leadFormHome" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number (+91)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                required
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
              >
                <option value="" disabled>Select Requirement</option>
                <option value="Water Purifiers (Domestic & Alkaline RO)">Water Purifiers (Domestic & Alkaline RO)</option>
                <option value="Water Treatment Plants (Dual FRP Vessel)">Water Treatment Plants (Dual FRP Vessel)</option>
                <option value="Water Treatment RO Plants (Commercial Skids)">Water Treatment RO Plants (Commercial Skids)</option>
                <option value="Commercial Water Coolers & Dispensers">Commercial Water Coolers & Dispensers</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                background: '#25D366',
                border: 'none',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
              disabled={submitting}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.187 1.564 5.946l-1.657 6.054 6.22-1.632c1.701.928 3.65 1.458 5.728 1.458 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
              </svg>
              {submitting ? 'Connecting...' : 'Confirm Free Test on WhatsApp →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
