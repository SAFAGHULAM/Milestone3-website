'use client';

import React from 'react';

export default function HeroSection() {
  const handleScrollToProducts = () => {
    const productSection = document.getElementById('product-section');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg sm:text-xl mb-6">Find the best products curated just for you.</p>
        <button
          onClick={handleScrollToProducts}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-lg"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
