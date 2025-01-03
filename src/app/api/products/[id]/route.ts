import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../../data/product';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const productId = parseInt(params.id, 10);

  if (isNaN(productId)) {
    return NextResponse.json({ message: 'Invalid product ID' }, { status: 400 });
  }

  const product = products.find(p => p.id === productId);

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
