import { NextResponse } from 'next/server';
import { products } from '../../../data/product';

// Use Next.js 14 dynamic params extraction
export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split('/')[4]; // Extract the `id` from the URL path

  // Handle `id` logic
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
