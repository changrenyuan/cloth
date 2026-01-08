'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Order {
  id: string;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  date: string;
  items: number;
}

export default function UserPage() {
  const [activeTab, setActiveTab] = useState<'orders' | 'profile'>('orders');

  const orders: Order[] = [
    {
      id: 'ORD-202401001',
      status: 'delivered',
      total: 598,
      date: '2024-01-15',
      items: 2,
    },
    {
      id: 'ORD-202401002',
      status: 'shipped',
      total: 329,
      date: '2024-01-18',
      items: 1,
    },
    {
      id: 'ORD-202401003',
      status: 'pending',
      total: 897,
      date: '2024-01-20',
      items: 3,
    },
  ];

  const getStatusText = (status: Order['status']) => {
    const statusMap = {
      pending: { text: '待付款', color: 'text-orange-500' },
      paid: { text: '待发货', color: 'text-blue-500' },
      shipped: { text: '已发货', color: 'text-purple-500' },
      delivered: { text: '已完成', color: 'text-green-500' },
      cancelled: { text: '已取消', color: 'text-gray-500' },
    };
    return statusMap[status];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Info Header */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="relative w-20 h-20">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="User Avatar"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">优雅的用户</h1>
              <p className="text-gray-500">会员等级: 黄金会员</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'orders'
                ? 'bg-pink-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            我的订单
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'profile'
                ? 'bg-pink-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            个人信息
          </button>
        </div>

        {activeTab === 'orders' && (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">订单号: {order.id}</span>
                    <span className="text-sm text-gray-500">{order.date}</span>
                  </div>
                  <span className={`font-medium ${getStatusText(order.status).color}`}>
                    {getStatusText(order.status).text}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">共 {order.items} 件商品</p>
                    <p className="text-2xl font-bold text-pink-500 mt-1">
                      ¥{order.total}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    {order.status === 'pending' && (
                      <>
                        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
                          取消订单
                        </button>
                        <button className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
                          立即付款
                        </button>
                      </>
                    )}
                    {order.status === 'shipped' && (
                      <button className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
                        确认收货
                      </button>
                    )}
                    {order.status === 'delivered' && (
                      <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
                        再次购买
                      </button>
                    )}
                    <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
                      查看详情
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {orders.length === 0 && (
              <div className="bg-white rounded-xl p-12 text-center">
                <div className="text-6xl mb-4">📦</div>
                <h2 className="text-xl font-bold mb-2">暂无订单</h2>
                <p className="text-gray-500 mb-6">快去选购喜欢的商品吧</p>
                <Link
                  href="/products"
                  className="inline-block px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                >
                  去逛逛
                </Link>
              </div>
            )}
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6">个人信息</h2>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    用户名
                  </label>
                  <input
                    type="text"
                    defaultValue="优雅的用户"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    手机号
                  </label>
                  <input
                    type="tel"
                    defaultValue="138****8888"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    defaultValue="user@example.com"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    性别
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300">
                    <option>女</option>
                    <option>男</option>
                    <option>保密</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  收货地址
                </label>
                <textarea
                  rows={3}
                  defaultValue="北京市朝阳区某某街道某某小区123号"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              <div className="flex gap-4">
                <button className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
                  保存修改
                </button>
                <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
                  取消
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
