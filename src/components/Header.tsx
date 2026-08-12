'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const pathname = usePathname();
  const { cartCount, cartTotal, openInquiryModal } = useCart();
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
            className="cart-btn"
            id="cartBtn"
            aria-label="Shopping Inquiry Bag"
            onClick={() => openInquiryModal()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="cart-price-val">₹{cartTotal.toLocaleString('en-IN')}</span>
            <span className="cart-badge">{cartCount}</span>
          </button>
          <Link href="/products" className="btn-visit-store" id="btnVisitStore">
            Visit Store
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
