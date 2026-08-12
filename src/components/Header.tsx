'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const pathname = usePathname();
  const { openInquiryModal } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Solutions' },
    { href: '/contact', label: 'Contact us' },
  ];

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`} id="mainHeader">
      <div className="container header-container">
        {/* Brand Logo */}
        <Link href="/" className="brand-logo" id="brandLogo">
          <Image
            src="/assets/images/logo.svg"
            alt="Nice Water Solutions"
            width={190}
            height={58}
            priority
            style={{ height: 'auto', width: 'auto', maxHeight: '56px' }}
          />
        </Link>

        {/* Navigation Menu */}
        <nav>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Action Buttons */}
        <div className="header-actions">
          <button
            className="btn-visit-store"
            style={{ background: '#25D366', color: '#ffffff', border: 'none' }}
            onClick={() => openInquiryModal()}
          >
            💬 WhatsApp Inquiry
          </button>
          <Link href="/products" className="btn-visit-store" id="btnVisitStore">
            View Products
          </Link>
          <button
            className="mobile-toggle-btn"
            id="mobileToggle"
            aria-label="Toggle Navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
