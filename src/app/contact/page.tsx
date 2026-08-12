'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ContactPage() {
  const { showToast } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const waText = `💧 *CONTACT INQUIRY - NICE WATER SOLUTIONS* 💧\n` +
      `-----------------------------------------\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `✉️ *Email:* ${email}\n` +
      `🎯 *Inquiry Type:* ${inquiryType}\n` +
      (message.trim() ? `📝 *Message:* ${message}\n` : '') +
      `-----------------------------------------\n` +
      `_Sent from Contact Page_`;

    const whatsappUrl = `https://wa.me/919809333324?text=${encodeURIComponent(waText)}`;

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, email, inquiryType, message }),
    }).catch(console.error);

    setTimeout(() => {
      setSubmitting(false);
      setName('');
      setPhone('');
      setEmail('');
      setInquiryType('');
      setMessage('');
      showToast('Connecting to WhatsApp (9809333324) to send your inquiry...');
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Contact & Support</h1>
          <div className="breadcrumbs">
            <Link href="/">Home</Link> <span>/</span> <span>Contact Us</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '90px 0' }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-tag">GET IN TOUCH</span>
              <h2 style={{ fontSize: '2.3rem', color: '#0b2545', marginBottom: '20px' }}>
                We&apos;re Here to Solve All Your Water Quality Needs
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '30px', lineHeight: '1.7' }}>
                Whether you need a new domestic RO installed, routine filter replacement service, or commercial water treatment consultation, our team is at your service.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div className="ribbon-icon-box" style={{ background: '#e0f2fe', color: '#0066cc', width: '50px', height: '50px' }}>
                    📍
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#0b2545' }}>Shop Address</h4>
                    <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      Ek Building, Opposite Check Post,<br />
                      Market Road, Palayam,<br />
                      Kozhikode - 673001, Kerala
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div className="ribbon-icon-box" style={{ background: '#e0f2fe', color: '#0066cc', width: '50px', height: '50px' }}>
                    📞
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#0b2545' }}>Phone & WhatsApp</h4>
                    <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                      <a href="https://wa.me/919809333324" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 'bold' }}>
                        +91 9809333324 (WhatsApp & Calls)
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div className="ribbon-icon-box" style={{ background: '#e0f2fe', color: '#0066cc', width: '50px', height: '50px' }}>
                    ✉️
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#0b2545' }}>Email Inquiries</h4>
                    <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                      sales@nicewatersolutions.com<br />
                      support@nicewatersolutions.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="cta-form-card" style={{ boxShadow: 'var(--shadow-lg)', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.6rem', color: '#0b2545', marginBottom: '8px' }}>
                  Send a Message / Book Free Test
                </h3>
                <p style={{ color: '#64748b', marginBottom: '24px' }}>
                  Fill out the form below or chat with us on WhatsApp at <strong>+91 9809333324</strong>.
                </p>
                <form className="contact-form-main" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number (+91)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      required
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                    >
                      <option value="" disabled>Inquiry Type</option>
                      <option value="Water Purifiers (Domestic & Alkaline RO)">Water Purifiers (Domestic & Alkaline RO)</option>
                      <option value="Water Treatment Plants (Dual FRP Vessel)">Water Treatment Plants (Dual FRP Vessel)</option>
                      <option value="Water Treatment RO Plants (Commercial Skids)">Water Treatment RO Plants (Commercial Skids)</option>
                      <option value="Commercial Water Coolers & Dispensers">Commercial Water Coolers & Dispensers</option>
                      <option value="Service / AMC Maintenance Request">Service / AMC Maintenance Request</option>
                      <option value="Free Water TDS Testing Visit">Book Free Water TDS Testing Visit</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Your message or address details..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', background: '#25D366', border: 'none', fontWeight: 'bold' }} disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit & Connect on WhatsApp (9809333324) →'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Section */}
      <section style={{ background: '#f8fafc', padding: '70px 0' }}>
        <div className="container">
          <div className="section-title-wrap text-center" style={{ marginBottom: '30px' }}>
            {/* <span className="section-tag">FIND US ON MAP</span> */}
            <h2 className="section-title text-center" style={{ fontSize: '2.2rem', color: '#0b2545', marginTop: '8px' }}>
              Visit Our Store in Kozhikode
            </h2>
            <p style={{ color: '#64748b', maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '1rem' }}>
              Ek Building, Opposite Check Post, Market Road, Palayam, Kozhikode - 673001, Kerala
            </p>
          </div>

          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 12px 35px rgba(0, 50, 100, 0.1)',
              border: '1px solid #e2e8f0',
            }}
          >
            {/* Embedded Google Map */}
            <div style={{ width: '100%', height: '420px', position: 'relative' }}>
              <iframe
                title="Nice Water Solutions Shop Location"
                src="https://maps.google.com/maps?q=11.2476021,75.7918167&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map Action Bar */}
            <div
              style={{
                padding: '20px 28px',
                background: '#ffffff',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                borderTop: '1px solid #f1f5f9',
              }}
            >
              <div>
                <strong style={{ color: '#0b2545', fontSize: '1.05rem', display: 'block' }}>
                  📍 Palayam Shop & Showroom
                </strong>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                  Opposite Check Post, Market Road, Palayam, Kozhikode, Kerala
                </span>
              </div>
              <a
                href="https://www.google.com/maps/place/11%C2%B014'51.4%22N+75%C2%B047'30.5%22E/@11.2476021,75.7918167,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.2476021!4d75.7918167"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cyan"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
              >
                Get Directions in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
