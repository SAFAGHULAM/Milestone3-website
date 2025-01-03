import { NextResponse } from 'next/server';
import { products } from '../../../data/product';

export async function GET(
  req: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params; // Extract the dynamic id from context.params
  const product = products.find((p) => p.id === parseInt(id, 10)); // Convert id to a number and find the product

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 }); // Handle not found
  }

  return NextResponse.json(product); // Return the product if found
}
