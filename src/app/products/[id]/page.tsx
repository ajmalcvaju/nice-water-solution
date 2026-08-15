import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS_DATA } from '@/data/products';

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS_DATA.find((p) => p.id === id);
  if (!product) {
    return {
      title: 'Product Not Found | Nice Water Solutions®',
    };
  }
  return {
    title: `${product.name} | Nice Water Solutions®`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS_DATA.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Calculate discount percentage
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  // Get related products (same category, up to 4, excluding current product)
  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title" style={{ fontSize: '2.2rem' }}>{product.name}</h1>
          <div className="breadcrumbs">
            <Link href="/">Home</Link> <span>/</span>{' '}
            <Link href="/products">Products</Link> <span>/</span>{' '}
            <span>{product.name}</span>
          </div>
        </div>
      </section>

      <section className="product-detail-section">
        <div className="container">
          <div className="product-detail-grid">
            {/* Image Column */}
            <div className="product-detail-img-box">
              <Image
                src={product.image}
                alt={product.name}
                width={360}
                height={360}
                priority
                style={{ width: 'auto', height: 'auto', maxHeight: '380px' }}
              />
            </div>

            {/* Info Column */}
            <div className="product-detail-info">
              <div className="product-detail-badge-row">
                <span className="product-category-tag">{product.categoryLabel}</span>
                <span className="product-badge-tag">{product.badge}</span>
              </div>

              <h2 className="product-detail-title">{product.name}</h2>

              <div className="product-detail-price-box">
                <span className="product-detail-price">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="product-detail-original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                <span className="product-detail-save-badge">Save {discountPercent}%</span>
              </div>

              <p className="product-detail-desc">{product.description}</p>

              <div className="product-detail-specs">
                <h4>System Specifications</h4>
                <ul className="product-detail-specs-list">
                  {product.specs.map((spec, idx) => (
                    <li key={idx}>
                      <svg viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="product-detail-actions">
                <a
                  href={`https://wa.me/919809333324?text=Hi,%20I%20am%20interested%20in%20the%20*${encodeURIComponent(product.name)}*%20water%20dispensation%20system.%20Please%20send%20more%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-lg"
                >
                  {/* <svg viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 2.019 14.12 1 11.5 1c-5.445 0-9.876 4.372-9.88 9.802 0 1.689.472 3.336 1.365 4.795l-.991 3.616 3.653-.959zm14.156-5.462c-.3-.15-1.77-.872-2.04-.972-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-1.12-.56-1.92-.98-2.67-2.27-.2-.35.2-.33.57-1.07.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.2 3 .15.2 2.06 3.15 5 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.13-.3-.2-.6-.35z" />
                  </svg> */}
                  WhatsApp Inquiry
                </a>

                <a href="tel:+919809333324" className="btn-call-lg">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call 9809333324
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="related-products-section">
          <div className="container">
            <h3 className="related-products-title">Related Water Systems</h3>
            <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              {relatedProducts.map((p) => {
                const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
                return (
                  <Link key={p.id} href={`/products/${p.id}`} className="product-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="product-card-top-tags">
                      <span className="product-category-tag">{p.categoryLabel}</span>
                      <span className="product-badge-tag">Save {discount}%</span>
                    </div>
                    <div className="product-img-box" style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={180}
                        height={180}
                        style={{ maxHeight: '150px', objectFit: 'contain' }}
                      />
                    </div>
                    <h4 className="product-name" style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '8px' }}>{p.name}</h4>
                    <div className="product-price" style={{ color: '#16a34a', fontWeight: '800' }}>
                      ₹{p.price.toLocaleString('en-IN')}{' '}
                      <span style={{ fontSize: '0.85rem', textDecoration: 'line-through', color: 'var(--text-secondary)', marginLeft: '8px' }}>
                        ₹{p.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
