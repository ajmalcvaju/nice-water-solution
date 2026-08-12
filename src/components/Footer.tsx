import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        {/* Col 1: About */}
        <div className="footer-col footer-about">
          <Link href="/">
            <Image
              src="/assets/images/logo-white.svg"
              alt="Nice Water Solutions"
              width={200}
              height={60}
              style={{ height: 'auto', width: 'auto', maxHeight: '52px', marginBottom: '16px' }}
            />
          </Link>
          <p>
            Nice Water Solutions® is an ISO certified industry leader in Water Purifiers, Water Treatment Plants, Water Treatment RO Plants, and Commercial Water Coolers. Committed to pure, mineral-rich, healthy drinking water.
          </p>
          <div className="top-social-links">
            <a href="#" className="social-icon-btn" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="social-icon-btn" aria-label="Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col footer-links">
          <h4>Quick Navigation</h4>
          <ul>
            <li><Link href="/">→ Home</Link></li>
            <li><Link href="/about">→ About Nice Water</Link></li>
            <li><Link href="/products">→ Products Catalog</Link></li>
            <li><Link href="/services">→ Solutions & Categories</Link></li>
            <li><Link href="/contact">→ Contact & Support</Link></li>
          </ul>
        </div>

        {/* Col 3: Product Categories */}
        <div className="footer-col footer-links">
          <h4>Our Product Categories</h4>
          <ul>
            <li><Link href="/services#water-purifiers">→ Water Purifiers (RO+UV+UF)</Link></li>
            <li><Link href="/services#water-treatment-plant">→ Water Treatment Plants</Link></li>
            <li><Link href="/services#water-treatment-ro-plant">→ Water Treatment RO Plants</Link></li>
            <li><Link href="/services#water-cooler">→ Commercial Water Coolers</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div className="footer-col">
          <h4>Get In Touch</h4>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <div>
              <strong>Nice Water Solutions Shop Address:</strong><br />
              Ek Building, Opposite Check Post, Market Road, Palayam, Kozhikode - 673001, Kerala
            </div>
          </div>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.27 1.11z"/></svg>
            <div>
              <strong>Support & WhatsApp Helpline:</strong><br />
              <a href="https://wa.me/919809333324" style={{ color: '#00c2cb', textDecoration: 'none', fontWeight: 'bold' }}>
                +91 9809333324
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Copyright */}
      <div className="container footer-bottom">
        <div>
          © 2026 Nice Water Solutions®. All Rights Reserved.
        </div>
        <div>
          Feel The Purity.
        </div>
      </div>
    </footer>
  );
}
