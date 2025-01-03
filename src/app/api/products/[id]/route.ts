import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../../data/product';
import type { RouteHandlerContext } from 'next/dist/server/web/types';

export async function GET(req: NextRequest, context: RouteHandlerContext) {
  const { id } = context.params as { id: string }; // Extracting and typing params

  const product = products.find(p => p.id === parseInt(id, 10));
  
  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
  
  return NextResponse.json(product);
}
