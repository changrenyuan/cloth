import Link from 'next/link';
import Image from 'next/image';
import { categories, products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[500px] bg-gradient-to-r from-pink-50 to-purple-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">
              发现你的
              <span className="text-pink-500">优雅风格</span>
            </h1>
            <p className="text-lg text-gray-600">
              精选高品质女装，为现代女性打造独特魅力
            </p>
            <div className="flex gap-4">
              <Link
                href="/products"
                className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
              >
                立即选购
              </Link>
              <Link
                href="/products?category=dresses"
                className="px-8 py-3 border-2 border-pink-500 text-pink-500 rounded-full hover:bg-pink-50 transition-colors"
              >
                新品上市
              </Link>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop"
              alt="Fashion"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">热门分类</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group bg-gray-50 rounded-2xl p-8 text-center hover:bg-pink-50 transition-colors"
              >
                <div className="text-5xl mb-3">{category.icon}</div>
                <h3 className="font-medium text-gray-900 group-hover:text-pink-500 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">精选推荐</h2>
            <Link
              href="/products"
              className="text-pink-500 hover:text-pink-600 transition-colors"
            >
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="font-semibold mb-2">快速配送</h3>
              <p className="text-sm text-gray-600">全国包邮，3-5天送达</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="font-semibold mb-2">七天退换</h3>
              <p className="text-sm text-gray-600">不满意可退换货</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="font-semibold mb-2">正品保障</h3>
              <p className="text-sm text-gray-600">100%正品保证</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💁</span>
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
