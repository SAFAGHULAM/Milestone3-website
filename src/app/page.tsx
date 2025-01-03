import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import Categories from './components/Categories';
import Testimonials from './components/Testimonial';
import CallToAction from './components/CallToAction';

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
      <Categories/>
      <Testimonials/>
      <ProductSection products={products} />
      <CallToAction/>
    </main>
  );
}
