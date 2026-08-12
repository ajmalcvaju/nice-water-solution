import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '4rem', color: '#0066cc', marginBottom: '12px' }}>404</h1>
      <h2 style={{ fontSize: '1.8rem', color: '#0b2545', marginBottom: '16px' }}>
        Page Not Found
      </h2>
      <p style={{ color: '#64748b', maxWidth: '480px', marginBottom: '24px' }}>
        The water purification solution page you are looking for might have been moved or does not exist.
      </p>
      <Link href="/" className="btn btn-primary">
        Return to Home Page
      </Link>
    </div>
  );
}
