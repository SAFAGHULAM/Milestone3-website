import Link from 'next/link';
import Image from 'next/image';

type Product = { id: number; name: string; price: number; image: string };

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-6 flex flex-col items-center shadow-lg bg-[#f8f4d9] hover:bg-[#f5e69f] transition-colors">
      {/* Image */}
      <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          className="object-contain w-full h-full"
          width={300}
          height={300}
        />
      </div>
      
      {/* Product Name */}
      <h2 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h2>
      
      {/* Product Price */}
      <p className="text-lg text-gray-700">${product.price.toFixed(2)}</p>
      
      {/* View Details Button */}
      <Link
        href={`/products/${product.id}`}
        className="mt-6 px-6 py-3 bg-gray-700 text-white rounded-lg text-base hover:bg-gray-500 transition-colors"
      >
        View Details
      </Link>
    </div>
  );
}
