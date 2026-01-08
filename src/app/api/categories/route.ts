import { NextResponse } from 'next/server';
import { categories } from '@/data/products';
import type { ApiResponse, GetCategoriesResponse } from '@/types/api';

// GET /api/categories - 获取分类列表
export async function GET() {
  try {
    const response: ApiResponse<GetCategoriesResponse> = {
      success: true,
      data: {
        categories,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      success: false,
      error: '获取分类列表失败',
    };
    return NextResponse.json(response, { status: 500 });
  }
}
