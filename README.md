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

## API 接口文档

### 基础信息

- **Base URL**: `/api`
- **数据格式**: JSON
- **字符编码**: UTF-8

### 通用响应格式

```typescript
{
  "success": boolean,
  "data?: T,
  "message"?: string,
  "error"?: string
}
```

### 接口列表

#### 1. 获取分类列表

**接口**: `GET /api/categories`

**响应示例**:
```json
{
  "success": true,
  "data": {
    "categories": [
      {
        "id": "dresses",
        "name": "连衣裙",
        "icon": "👗"
      }
    ]
  }
}
```

#### 2. 获取商品列表

**接口**: `GET /api/products`

**查询参数**:
- `category` (可选): 分类 ID
- `search` (可选): 搜索关键词
- `page` (可选): 页码，默认 1
- `pageSize` (可选): 每页数量，默认 20

**示例**:
```
GET /api/products?category=dresses&page=1&pageSize=20
GET /api/products?search=优雅
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "products": [
      {
        "id": "1",
        "name": "法式优雅碎花连衣裙",
        "price": 299,
        "originalPrice": 399,
        "category": "dresses",
        "images": ["https://..."],
        "description": "...",
        "stock": 50,
        "rating": 4.8,
        "reviewCount": 128,
        "tags": ["新品", "热销"]
      }
    ],
    "total": 8,
    "page": 1,
    "pageSize": 20
  }
}
```

#### 3. 获取商品详情

**接口**: `GET /api/products/:id`

**路径参数**:
- `id`: 商品 ID

**示例**:
```
GET /api/products/1
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "id": "1",
    "name": "法式优雅碎花连衣裙",
    "price": 299,
    "originalPrice": 399,
    "category": "dresses",
    "images": ["https://..."],
    "description": "...",
    "stock": 50,
    "rating": 4.8,
    "reviewCount": 128,
    "tags": ["新品", "热销"]
  }
}
```

## 项目结构

```
.
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── api/               # API Routes
│   │   │   ├── categories/    # 分类接口
│   │   │   └── products/      # 商品接口
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
│   ├── data/                  # 数据层（临时）
│   │   └── products.ts        # 商品数据
│   ├── lib/                   # 工具库
│   │   └── api.ts            # API 客户端
│   └── types/                 # TypeScript 类型定义
│       ├── api.ts             # API 类型
│       └── product.ts         # 商品类型
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

## 后端架构说明

本项目采用 **Next.js API Routes** 实现前后端分离架构：

### 优势

1. **统一技术栈**: 前后端都使用 TypeScript，类型共享
2. **易于维护**: 前后端代码在同一个仓库，便于协作
3. **自动部署**: Next.js 会自动处理 API 路由的部署
4. **性能优化**: 支持 Server Components，减少客户端 JavaScript

### API 设计原则

1. **RESTful 风格**: 遵循 REST API 设计规范
2. **统一响应格式**: 所有接口返回统一的 JSON 格式
3. **错误处理**: 统一的错误码和错误信息
4. **类型安全**: 前后端共享 TypeScript 类型定义

### 数据层说明

当前数据存储在 `src/data/products.ts` 中，为 Mock 数据。

未来可以轻松替换为：
- 数据库集成（使用 `integration-postgre-database`）
- 对象存储集成（使用 `integration-s3-storage`）

只需修改 `src/app/api/` 下的接口实现即可，前端代码无需改动。

## 后续扩展建议

### 1. 后端集成
- 数据库集成（使用 integration-postgre-database）
- 对象存储集成（使用 integration-s3-storage）
- 用户认证系统
- 支付接口集成
- 订单管理系统

### 2. 移动端适配
- PWA 支持
- 小程序版本（使用 Taro 或 uni-app）
- 响应式优化

### 3. 功能增强
- 商品评价系统
- 收藏功能
- 优惠券系统
- 会员积分系统
- 客服聊天功能

### 4. 性能优化
- 图片懒加载
- 代码分割
- 缓存策略
- CDN 加速

## 迁移到移动端/小程序

由于采用了前后端分离的 API 架构，移动端和小程序可以直接调用相同的 API 接口：

### 方案一：保持 Next.js API
- 移动端/小程序直接调用现有的 Next.js API Routes
- 优点：无需额外开发后端，复用现有逻辑
- 缺点：小程序需要配置服务器域名

### 方案二：独立后端服务
- 将 API 路由迁移到独立的 Node.js/Python 服务
- 优点：更灵活的部署和扩展
- 缺点：需要额外开发部署

### 推荐方案
建议采用方案一，保持现有架构，移动端和小程序只需：
1. 在小程序管理后台配置服务器域名白名单
2. 使用小程序的 `wx.request` 或类似 API 调用接口
3. 实现前端 UI 组件

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
- 前后端分离的 API 架构
- 类型安全的 API 调用
