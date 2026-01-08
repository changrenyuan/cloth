import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { apiClient } from '@/lib/api';

export default async function Home() {
  // 获取分类和商品数据
  const [categoriesResponse, productsResponse] = await Promise.all([
    apiClient.getCategories(),
    apiClient.getProducts({ pageSize: 8 }),
  ]);

  const categories = categoriesResponse.success ? categoriesResponse.data?.categories : [];
  const products = productsResponse.success ? productsResponse.data?.products || [] : [];

  // 分割商品：前4个为精选，后4个为新品
  const featuredProducts = products.slice(0, 4);
  const newProducts = products.slice(4, 8);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-black text-white flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop"
            alt="Fashion"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] mb-4">New Collection</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              24' 质感换新
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              LILY 2024 秋冬新品，重新定义职场女性时尚
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products?tag=new"
                className="px-8 py-4 bg-white text-black rounded-none font-medium hover:bg-gray-100 transition-colors"
              >
                立即选购
              </Link>
              <Link
                href="/products"
                className="px-8 py-4 border-2 border-white text-white rounded-none font-medium hover:bg-white hover:text-black transition-colors"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.slice(0, 3).map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gray-100">
                  <Image
                    src={
                      category.id === 'dresses'
                        ? 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop'
                        : category.id === 'tops'
                        ? 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop'
                        : 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop'
                    }
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="text-6xl mb-4">{category.icon}</span>
                  <h3 className="text-2xl font-medium">{category.name}</h3>
                </div>
              </Link>
            ))}
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
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              查看全部
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2 tracking-tight">最新上架</h2>
              <p className="text-gray-600">2024 秋冬新品系列</p>
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
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/products?tag=new"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              查看全部
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="relative h-[400px] bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&h=600&fit=crop"
            alt="Promotion"
            fill
            className="object-cover opacity-70"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] mb-4">Special Offer</p>
            <h2 className="text-5xl font-bold mb-4">限时特惠</h2>
            <p className="text-xl text-gray-200 mb-6">
              精选商品低至 5 折，限时抢购
            </p>
            <Link
              href="/products?tag=sale"
              className="inline-block px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
            >
              立即抢购
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">全国包邮</h3>
              <p className="text-sm text-gray-600">满199元包邮</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">七天退换</h3>
              <p className="text-sm text-gray-600">不满意可退换</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296c.63 1.268 1.593 2.39 1.593 3.068z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">正品保障</h3>
              <p className="text-sm text-gray-600">100%正品保证</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c-1.5 0-3-.375-4.125-1.125m7.5 0c1.5-.75 2.625-1.875 3.375-3.375M7.5 12h3v-3.75h4.5v4.5h-4.5V15c0-1.5-2.25-2.25-3-2.25m0 4.5v-2.25M12 20.25v-3m0-13.5v-3m3.75 9.75h4.5"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">贴心服务</h3>
              <p className="text-sm text-gray-600">24小时客服在线</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
