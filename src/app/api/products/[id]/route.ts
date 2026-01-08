import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data/products';
import type { ApiResponse, GetProductDetailResponse } from '@/types/api';

// GET /api/products/[id] - 获取商品详情
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
      const response: ApiResponse = {
        success: false,
        error: '商品不存在',
      };
      return NextResponse.json(response, { status: 404 });
    }

    const responseData: ApiResponse<GetProductDetailResponse> = {
      success: true,
      data: product,
    };

    return NextResponse.json(responseData);
  } catch (error) {
    const response: ApiResponse = {
      success: false,
      error: '获取商品详情失败',
    };
    return NextResponse.json(response, { status: 500 });
  }
}
