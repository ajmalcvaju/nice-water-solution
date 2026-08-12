'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function InquiryModal() {
  const {
    isModalOpen,
    closeInquiryModal,
    activeInquiryProduct,
    showToast,
  } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!isModalOpen) return null;

  const targetWhatsAppNumber = '919809333324';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const productText = activeInquiryProduct
      ? `• *${activeInquiryProduct.name}* (Price: ₹${activeInquiryProduct.price.toLocaleString('en-IN')})\n`
      : '• General Water Purifier & Treatment Solutions Inquiry\n';

    // Create formatted WhatsApp message
    const message = `🌊 *NEW PRODUCT INQUIRY - NICE WATER SOLUTIONS* 🌊\n` +
      `-----------------------------------------\n` +
      `👤 *Customer Name:* ${name}\n` +
      `📞 *Mobile Phone:* ${phone}\n` +
      `📍 *Location / City:* ${city}\n` +
      (notes.trim() ? `📝 *Requirement Notes:* ${notes}\n` : '') +
      `-----------------------------------------\n` +
      `🛒 *Inquired Product:*\n` +
      `${productText}` +
      `-----------------------------------------\n` +
      `_Sent via Nice Water Solutions Store_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;

    // Send to backend API handler in background
    fetch('/api/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, city, notes, activeInquiryProduct }),
    }).catch((err) => console.error(err));

    setTimeout(() => {
      setSubmitting(false);
      closeInquiryModal();
      showToast('Opening WhatsApp to send your inquiry directly to our team...');
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <div className="modal-backdrop" onClick={closeInquiryModal}>
      <div
        className="modal-box"
        style={{ maxWidth: '540px', maxHeight: '90vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" aria-label="Close Modal" onClick={closeInquiryModal}>
          ✕
        </button>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span
            style={{
              background: '#e0f2fe',
              color: '#0066cc',
              fontSize: '0.78rem',
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: '50px',
              letterSpacing: '0.05em',
            }}
          >
            DIRECT WHATSAPP INQUIRY
          </span>
          <h3 style={{ fontSize: '1.6rem', color: '#0b2545', marginTop: '8px', marginBottom: '4px' }}>
            Submit Product Inquiry
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
            Your inquiry will be sent directly to our official WhatsApp support (<strong>+91 9809333324</strong>).
          </p>
        </div>

        {/* Display Active Inquired Item if selected */}
        {activeInquiryProduct && (
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '20px',
            }}
          >
            <div style={{ width: '55px', height: '55px', position: 'relative', flexShrink: 0 }}>
              <Image
                src={activeInquiryProduct.image}
                alt={activeInquiryProduct.name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: '#0b2545', fontSize: '0.95rem' }}>
                {activeInquiryProduct.name}
              </div>
              <div style={{ color: '#0066cc', fontWeight: 800, fontSize: '0.9rem' }}>
                ₹{activeInquiryProduct.price.toLocaleString('en-IN')}{' '}
                <span style={{ textDecoration: 'line-through', color: '#94a3b8', fontSize: '0.8rem' }}>
                  ₹{activeInquiryProduct.originalPrice.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>
        )}

        <form className="lead-form" onSubmit={handleSubmit}>
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
              placeholder="Mobile Phone Number (+91)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="City / Delivery Location"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows={3}
              placeholder="Requirement details, installation query, or questions..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: '100%',
              background: '#25D366',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              fontSize: '1rem',
              fontWeight: 700,
              padding: '12px',
            }}
            disabled={submitting}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.187 1.564 5.946l-1.657 6.054 6.22-1.632c1.701.928 3.65 1.458 5.728 1.458 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
            </svg>
            {submitting ? 'Connecting...' : 'Send Inquiry on WhatsApp (9809333324) →'}
          </button>
        </form>
      </div>
    </div>
  );
}
