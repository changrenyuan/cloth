# 优雅女装电商网站

现代化的女装电商网站，基于 Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 构建。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **UI**: React 19
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4
- **包管理**: pnpm

## 功能特性

### 已实现功能

1. **首页**
   - 精美的 Banner 展示
   - 商品分类入口
   - 精选商品推荐
   - 服务特性展示

2. **商品列表页** (`/products`)
   - 分类筛选
   - 关键词搜索
   - 商品卡片展示
   - 价格、评分信息

3. **商品详情页** (`/products/[id]`)
   - 商品图片展示
   - 尺码选择
   - 数量调整
   - 加入购物车功能
   - 相关商品推荐

4. **购物车** (`/cart`)
   - 商品管理
   - 数量调整
   - 选择结算
   - 价格计算
   - 优惠信息展示

5. **用户中心** (`/user`)
   - 订单管理
   - 个人信息编辑
   - 收货地址管理

### 页面路由

- `/` - 首页
- `/products` - 商品列表
- `/products/[id]` - 商品详情
- `/cart` - 购物车
- `/user` - 用户中心

## 项目结构

```
.
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── cart/              # 购物车页面
│   │   ├── products/          # 商品相关页面
│   │   ├── user/              # 用户中心
│   │   ├── layout.tsx         # 根布局
│   │   ├── page.tsx           # 首页
│   │   └── globals.css        # 全局样式
│   ├── components/            # React 组件
│   │   ├── Footer.tsx         # 页脚组件
│   │   ├── Header.tsx         # 导航栏组件
│   │   └── ProductCard.tsx    # 商品卡片组件
│   ├── data/                  # 数据层
│   │   └── products.ts        # 商品数据
│   └── types/                 # TypeScript 类型定义
│       └── product.ts         # 商品相关类型
├── next.config.ts             # Next.js 配置
├── package.json               # 项目依赖
└── README.md                  # 项目说明
```

## 开发指南

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 http://localhost:5000

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 后续扩展建议

1. **后端集成**
   - 数据库集成（使用 integration-postgre-database）
   - 对象存储集成（使用 integration-s3-storage）
   - 用户认证系统
   - 支付接口集成

2. **移动端适配**
   - PWA 支持
   - 小程序版本（使用 Taro 或 uni-app）
   - 响应式优化

3. **功能增强**
   - 商品评价系统
   - 收藏功能
   - 优惠券系统
   - 会员积分系统
   - 客服聊天功能

4. **性能优化**
   - 图片懒加载
   - 代码分割
   - 缓存策略

## 设计理念

- **响应式设计**: 完美适配桌面端和移动端
- **现代UI**: 采用粉色主题，符合女装品牌调性
- **用户体验**: 流畅的交互和清晰的视觉层次
- **可扩展性**: 模块化设计，便于后续功能扩展

## 注意事项

- 图片资源使用 Unsplash 作为演示
- 当前数据为 Mock 数据，后续可接入真实后端
- 服务端口固定为 5000

## 技术亮点

- 使用 Next.js 16 的 App Router
- TypeScript 严格类型检查
- Tailwind CSS 4 的原子化样式
- 组件化开发模式
- 路由级代码分割
