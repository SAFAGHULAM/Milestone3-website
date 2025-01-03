type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);

  return (
    <main className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src={product.image || '/default-product-image.jpg'} // fallback image if no image is provided
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-cover mb-4 md:mb-0"
        />
        <div className="ml-0 md:ml-6">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 my-4">${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </main>
  );
}
