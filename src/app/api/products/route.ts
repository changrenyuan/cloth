import { NextRequest, NextResponse } from 'next/server';
import { products, categories } from '@/data/products';
import type {
  ApiResponse,
  GetProductsParams,
  GetProductsResponse,
} from '@/types/api';

// GET /api/products - 获取商品列表
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');

    // 筛选商品
    let filteredProducts = products;

    if (category) {
      filteredProducts = filteredProducts.filter((p) => p.category === category);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower)
      );
    }

    // 分页
    const total = filteredProducts.length;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    const response: ApiResponse<GetProductsResponse> = {
      success: true,
      data: {
        products: paginatedProducts,
        total,
        page,
        pageSize,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      success: false,
      error: '获取商品列表失败',
    };
    return NextResponse.json(response, { status: 500 });
  }
}
