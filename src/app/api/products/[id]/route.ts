import { NextResponse } from 'next/server';
import { products } from '../../../data/product';
import type { RouteHandlerContext } from 'next/server';

export async function GET(
  req: Request, 
  context: RouteHandlerContext<{ id: string }>
) {
  const { id } = context.params;
  const product = products.find(p => p.id === parseInt(id, 10));
  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json(product);
}d
