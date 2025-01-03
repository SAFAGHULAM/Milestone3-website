'use client';
import { useState } from 'react';
import Image from 'next/image';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const initialCart: CartItem[] = [
    {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        price: 79.99,
        quantity:1,
        image: '/images/headphones.jpeg',
      },
      {
        id: 2,
        name: 'Smart Fitness Watch',
        price: 199.99,
        quantity:1,
        image: '/images/fitness-watch.jpeg',
      },
      {
        id: 3,
        name: '4K Ultra HD TV',
        price: 599.99,
        quantity:1,
        image: '/images/TV.jpeg',
      },
      {
        id: 4,
        name: 'Ergonomic Office Chair',
        price: 149.99,
        quantity:1,
        image: '/images/office-chair.jpeg',
      },
      {
        id: 5,
        name: 'Wireless Gaming Mouse',
        price: 49.99,
        quantity:1,
        image: '/images/mouse.webp',
      },
      {
        id: 6,
        name: 'Stainless Steel Water Bottle',
        price: 29.99,
        quantity:1,
        image: '/images/waterbottle.webp',
      },
      {
        id: 7,
        name: 'Portable Phone Charger',
        price: 39.99,
        quantity:1,
        image: '/images/charger.webp',
      },
      {
        id: 8,
        name: 'Home Security Camera',
        price: 99.99,
        quantity:1,
        image: '/images/camera.png',
      },
      {
        id: 9,
        name: 'Noise-Cancelling Earbuds',
        price: 59.99,
        quantity:1,
        image: '/images/earbuds.webp',
      },
      {
        id: 10,
        name: 'Electric Stand Mixer',
        price: 249.99,
        quantity:1,
        image: '/images/mixer.jpeg',
      },
      {
        id: 11,
        name: "Smart Watch",
        price: 149.99,
        quantity:1,
        image: "/images/smart-watch.jpeg",
        },
        {
        id: 12,
        name: "Gaming Keyboard",
        price: 89.99,
        quantity:1,
        image: "/images/gaming-keyboard.webp",
        },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center sm:text-left">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between border-b pb-4"
            >
              {/* Image and Info */}
              <div className="flex items-center space-x-4 w-full sm:w-auto mb-4 sm:mb-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>

              {/* Quantity Control */}
              <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                <button
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="px-4 py-2 border">{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                className="px-4 py-2 bg-[#1e1b2b] text-white rounded hover:bg-[#424444]"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total and Checkout */}
          <div className="text-right mt-6">
            <h3 className="text-lg font-semibold">
              Total: ${calculateTotal().toFixed(2)}
            </h3>
            <button className="mt-4 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-500">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}