import HeroSection from '../../components/HeroSection';
import ProductSection from '../../components/ProductSection';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/api/products');
  return res.json();
}

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <main>
      <HeroSection />
      <ProductSection products={products} />
    </main>
  );
}
