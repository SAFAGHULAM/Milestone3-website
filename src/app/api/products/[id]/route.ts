import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../../data/product';

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  // Validate the product ID
  const productId = Number(id);
  if (isNaN(productId)) {
    return NextResponse.json({ message: 'Invalid product ID' }, { status: 400 });
  }

  // Find the product
  const product = products.find(p => p.id === productId);

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  // Return the product
  return NextResponse.json(product);
}
