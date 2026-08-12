'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, openInquiryModal } = useCart();

  return (
    <div className="product-card" data-category={product.category}>
      <span className="product-badge-flag">{product.badge}</span>
      <div className="product-img-box">
        <Image
          src={product.image}
          alt={product.name}
          width={220}
          height={200}
          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
        />
      </div>
      <div className="product-category">{product.categoryLabel}</div>
      <h3 className="product-name">{product.name}</h3>
      <ul className="product-specs-list">
        {product.specs.map((spec, index) => (
          <li key={index}>
            <svg viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            {spec}
          </li>
        ))}
      </ul>
      <div className="product-price-row">
        <div className="product-price">
          ₹{product.price.toLocaleString('en-IN')}{' '}
          <span className="original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            className="btn-inquire-sm"
            style={{ background: '#e0f2fe', color: '#0066cc' }}
            onClick={() => openInquiryModal(product)}
          >
            Inquire
          </button>
          <button className="btn-inquire-sm" onClick={() => addToCart(product)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
