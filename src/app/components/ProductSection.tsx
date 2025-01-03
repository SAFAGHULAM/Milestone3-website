import ProductCard from './ProductCard';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

type ProductSectionProps = {
  products: Product[];
};

export default function ProductSection({ products }: ProductSectionProps) {
  return (
    <section id="product-section" className="max-w-7xl mx-auto p-4 mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
