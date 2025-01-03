import { NextResponse } from 'next/server';
import { products } from '../../../data/product';

export async function GET(
  req: Request,
  { params }: { params: { id: any } }
) {
  const { id } = params; // Extract dynamic route parameter
  const product = products.find((p) => p.id === parseInt(id, 10)); // Parse id to number

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
