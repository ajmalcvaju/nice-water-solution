'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS_DATA } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'purifier' | 'treatment' | 'ro-plant' | 'cooler'>('all');
  const { showToast } = useCart();
  const [submitting, setSubmitting] = useState(false);

  const filteredProducts =
    activeFilter === 'all'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === activeFilter);

  const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      const form = e.target as HTMLFormElement;
      form.reset();
      showToast('Thank you! Your quotation request has been sent to our water engineers.');
    }, 1000);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Product Catalog & Systems</h1>
          <div className="breadcrumbs">
            <Link href="/">Home</Link> <span>/</span> <span>Products & Store</span>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="product-filter-nav">
            {(['all', 'purifier', 'treatment', 'ro-plant', 'cooler'] as const).map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat === 'all'
                  ? 'All Products'
                  : cat === 'purifier'
                  ? 'Water Purifiers'
                  : cat === 'treatment'
                  ? 'Water Treatment Plant'
                  : cat === 'ro-plant'
                  ? 'Water Treatment RO Plant'
                  : 'Water Cooler'}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner-section" id="quoteForm">
        <div className="container cta-banner-inner">
          <div className="cta-banner-text">
            <h2>Need a Custom Commercial or Industrial Water Setup?</h2>
            <p>
              Get a turnkey proposal, schematic piping diagram, and commercial quotation within 2 hours from our senior water treatment engineers.
            </p>
          </div>
          <div className="cta-form-card">
            <h3>Request Product Quotation</h3>
            <form className="lead-form" onSubmit={handleQuoteSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Company / Individual Name" required />
              </div>
              <div className="form-group">
                <input type="tel" className="form-control" placeholder="Phone Number (+91)" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email Address" required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitting}>
                {submitting ? 'Sending Request...' : 'Get Instant Proposal →'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
