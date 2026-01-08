import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-pink-500 mb-4">优雅女装</h3>
            <p className="text-sm text-gray-600 mb-4">
              专为现代女性打造的高品质女装品牌
            </p>
            <p className="text-xs text-gray-500">
              © 2024 优雅女装. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-pink-500 transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-pink-500 transition-colors">
                  全部商品
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-pink-500 transition-colors">
                  购物车
                </Link>
              </li>
              <li>
                <Link href="/user" className="hover:text-pink-500 transition-colors">
                  个人中心
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">商品分类</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/products?category=dresses" className="hover:text-pink-500 transition-colors">
                  连衣裙
                </Link>
              </li>
              <li>
                <Link href="/products?category=tops" className="hover:text-pink-500 transition-colors">
                  上衣
                </Link>
              </li>
              <li>
                <Link href="/products?category=pants" className="hover:text-pink-500 transition-colors">
                  裤子
                </Link>
              </li>
              <li>
                <Link href="/products?category=outerwear" className="hover:text-pink-500 transition-colors">
                  外套
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">客户服务</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  联系我们
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  退换货政策
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  尺码指南
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  常见问题
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
