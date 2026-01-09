'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { apiClient } from '@/lib/api';
import { Product, Category } from '@/types/api';

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [categoriesResponse, productsResponse] = await Promise.all([
        apiClient.getCategories(),
        apiClient.getProducts({ pageSize: 16 }),
      ]);

      if (categoriesResponse.success && categoriesResponse.data) {
        setCategories(categoriesResponse.data.categories);
      }

      if (productsResponse.success && productsResponse.data) {
        setProducts(productsResponse.data.products || []);
      }
    } catch (error) {
      console.error('加载数据失败:', error);
    } finally {
      setLoading(false);
    }
  };

  // 分割商品：前8个为精选，后8个为新品
  const featuredProducts = products.slice(0, 8);
  const newProducts = products.slice(8, 16);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">加载中...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[700px] bg-black text-white flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://shop.lily.cn/wp-content/uploads/2024/06/6401-768x725.png"
            alt="LILY 2024秋冬新品"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] mb-4 text-pink-300">LILY 2024秋冬</p>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              质感换新
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              LILY 为职场女性打造的时尚单品<br />
              质感与时尚的完美结合
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products?tag=new"
                className="px-10 py-4 bg-white text-black rounded-none font-medium hover:bg-pink-50 transition-colors"
              >
                立即选购
              </Link>
              <Link
                href="/products"
                className="px-10 py-4 border-2 border-white text-white rounded-none font-medium hover:bg-white hover:text-black transition-colors"
              >
                查看系列
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">LILY 精选购</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              为职场女性精心打造的时尚单品，质感与时尚的完美结合
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* 连衣裙 */}
            <Link
              href="/products?category=dresses"
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-100">
                <Image
                  src="https://shop.lily.cn/wp-content/uploads/2024/06/O1CN01riIDuV1oJU5R3LFhw_1031105204-300x400.webp"
                  alt="连衣裙"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-medium mb-2">连衣裙</h3>
                <span className="text-sm border-b-2 border-white pb-1">查看</span>
              </div>
            </Link>

            {/* 衬衫 */}
            <Link
              href="/products?category=shirts"
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-100">
                <Image
                  src="https://shop.lily.cn/wp-content/uploads/2024/06/O1CN01J6DCNN1oJU5YNTxo5_1031105204-300x400.webp"
                  alt="衬衫"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-medium mb-2">衬衫</h3>
                <span className="text-sm border-b-2 border-white pb-1">查看</span>
              </div>
            </Link>

            {/* 裤子 */}
            <Link
              href="/products?category=pants"
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-100">
                <Image
                  src="https://shop.lily.cn/wp-content/uploads/2024/06/O1CN018rrp7t1oJU5XxZgH5_0-item_pic-300x400.webp"
                  alt="裤子"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-medium mb-2">裤子</h3>
                <span className="text-sm border-b-2 border-white pb-1">查看</span>
              </div>
            </Link>

            {/* 外套 */}
            <Link
              href="/products?category=outerwear"
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-100">
                <Image
                  src="https://shop.lily.cn/wp-content/uploads/2024/06/2.jpg"
                  alt="外套"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-medium mb-2">外套</h3>
                <span className="text-sm border-b-2 border-white pb-1">查看</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Limited Time Sale Banner */}
      <section className="relative h-[400px] bg-black text-white flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://shop.lily.cn/wp-content/uploads/2024/06/640-2-685x1024.png"
            alt="限时特惠"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] mb-3 text-pink-300">限时特惠</p>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              低至5折
            </h2>
            <p className="text-lg text-gray-200 mb-6">
              LILY 秋冬精选系列，限时优惠
            </p>
            <Link
              href="/products?tag=sale"
              className="inline-block px-8 py-3 bg-pink-600 text-white rounded-none font-medium hover:bg-pink-700 transition-colors"
            >
              立即抢购
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2 tracking-tight">精选商品</h2>
              <p className="text-gray-600">本季最受欢迎的时尚单品</p>
            </div>
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              查看全部
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2 tracking-tight">新品上市</h2>
              <p className="text-gray-600">最新推出的时尚单品</p>
            </div>
            <Link
              href="/products?tag=new"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              查看全部
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
