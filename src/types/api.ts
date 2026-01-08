// API 请求和响应的通用类型定义

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  description: string;
  stock: number;
  rating: number;
  reviewCount: number;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

// 商品列表查询参数
export interface GetProductsParams {
  category?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}

// 商品列表响应
export interface GetProductsResponse {
  products: Product[];
  total: number;
  page: number;
  pageSize: number;
}

// 分类列表响应
export interface GetCategoriesResponse {
  categories: Category[];
}

// 商品详情响应
export type GetProductDetailResponse = Product;
