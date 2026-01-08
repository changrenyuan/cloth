import type {
  ApiResponse,
  GetProductsParams,
  GetProductsResponse,
  GetCategoriesResponse,
  GetProductDetailResponse,
} from '@/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

class ApiClient {
  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}/api${endpoint}`;

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        error: '网络请求失败',
      };
    }
  }

  // 获取商品列表
  async getProducts(params?: GetProductsParams): Promise<ApiResponse<GetProductsResponse>> {
    const queryString = new URLSearchParams();
    if (params?.category) queryString.append('category', params.category);
    if (params?.search) queryString.append('search', params.search);
    if (params?.page) queryString.append('page', params.page.toString());
    if (params?.pageSize) queryString.append('pageSize', params.pageSize.toString());

    const endpoint = `/products${queryString.toString() ? `?${queryString.toString()}` : ''}`;
    return this.request<GetProductsResponse>(endpoint);
  }

  // 获取商品详情
  async getProductDetail(id: string): Promise<ApiResponse<GetProductDetailResponse>> {
    return this.request<GetProductDetailResponse>(`/products/${id}`);
  }

  // 获取分类列表
  async getCategories(): Promise<ApiResponse<GetCategoriesResponse>> {
    return this.request<GetCategoriesResponse>('/categories');
  }
}

// 导出单例
export const apiClient = new ApiClient();
