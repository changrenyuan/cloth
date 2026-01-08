'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CartItem, Product } from '@/types/product';
import { products } from '@/data/products';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      ...products[0],
      quantity: 1,
      selected: true,
    },
    {
      ...products[1],
      quantity: 2,
      selected: true,
    },
  ]);

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const toggleSelected = (id: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const toggleAllSelected = () => {
    const allSelected = cartItems.every((item) => item.selected);
    setCartItems(cartItems.map((item) => ({ ...item, selected: !allSelected })));
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const selectedItems = cartItems.filter((item) => item.selected);
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalOriginalPrice = selectedItems.reduce(
    (sum, item) => sum + (item.originalPrice || item.price) * item.quantity,
    0
  );
  const discount = totalOriginalPrice - totalPrice;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold mb-4">购物车是空的</h2>
            <p className="text-gray-500 mb-8">快去选购喜欢的商品吧</p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
            >
              去逛逛
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">购物车 ({cartItems.length})</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Select All */}
            <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
              <input
                type="checkbox"
                checked={cartItems.every((item) => item.selected)}
                onChange={toggleAllSelected}
                className="w-5 h-5 accent-pink-500"
              />
              <span className="font-medium">全选</span>
            </div>

            {/* Items */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 flex gap-4 shadow-sm"
              >
                {/* Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => toggleSelected(item.id)}
                    className="w-5 h-5 accent-pink-500"
                  />
                </div>

                {/* Image */}
                <Link href={`/products/${item.id}`} className="flex-shrink-0">
                  <div className="relative w-32 h-40 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link
                      href={`/products/${item.id}`}
                      className="font-semibold text-gray-900 hover:text-pink-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Price */}
                    <div>
                      <span className="text-xl font-bold text-pink-500">
                        ¥{item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">
                          ¥{item.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      {/* Quantity */}
                      <div className="flex items-center border-2 border-gray-200 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-10 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-6">订单摘要</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>商品总数</span>
                  <span>{selectedItems.reduce((sum, item) => sum + item.quantity, 0)}件</span>
                </div>
                {selectedItems.length > 0 && (
                  <>
                    <div className="flex justify-between text-gray-600">
                      <span>商品金额</span>
                      <span>¥{totalOriginalPrice.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-pink-500">
                        <span>优惠金额</span>
                        <span>-¥{discount.toFixed(2)}</span>
                      </div>
                    )}
                  </>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between text-xl font-bold">
                    <span>合计</span>
                    <span className="text-pink-500">¥{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                disabled={selectedItems.length === 0}
                className="w-full py-4 bg-pink-500 text-white rounded-xl font-semibold hover:bg-pink-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                去结算 ({selectedItems.length})
              </button>

              <div className="mt-4 space-y-2 text-sm text-gray-500">
                <p>🚚 满199元包邮</p>
                <p>🔄 七天无理由退换</p>
                <p>🛡️ 正品保障</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
