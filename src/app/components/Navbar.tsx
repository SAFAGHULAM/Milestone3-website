'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          CraveCart
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-gray-200"
        >
          {menuOpen ? (
            <FaTimes size={24} /> 
          ) : (
            <FaBars size={24} /> 
          )}
        </button>

        <div className="hidden sm:flex space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/cart" className="hover:underline">Cart</Link>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden mt-2 space-y-2">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-700">About</Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact</Link>
          <Link href="/cart" className="block px-4 py-2 hover:bg-gray-700">Cart</Link>
        </div>
      )}
    </nav>
  );
}
