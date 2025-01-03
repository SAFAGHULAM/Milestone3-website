export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="text-sm text-gray-300">
              We are a leading e-commerce platform dedicated to bringing you the best products at affordable prices.
            </p>
          </div>
  
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:underline">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
              <li>
                <a href="/cart" className="hover:underline">Cart</a>
              </li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="text-sm text-gray-300">Email: support@example.com</p>
            <p className="text-sm text-gray-300">Phone: +1 234 567 890</p>
            <p className="text-sm text-gray-300">Address: 123 E-Commerce St, Shop City</p>
          </div>
        </div>
  
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
        </div>
      </footer>
    );
  }
  