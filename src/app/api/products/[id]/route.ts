import { NextResponse } from 'next/server';
import { products } from '../../../data/product';

// Adjusted function signature for Next.js 14 API routes
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params; // Extract dynamic route parameter
  const product = products.find((p) => p.id === parseInt(id, 10)); // Parse id to number

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
