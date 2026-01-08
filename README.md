# LILY 女装电商网站

参考 LILY 官网设计的现代化女装电商网站，基于 Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 构建。

## 设计亮点

- **真实图片资源**：使用 LILY 官网的真实商品图片和品牌素材
- **黑白主色调**：高端商务风格，粉色点缀突出促销信息
- **LILY 品牌**：完整复刻 LILY 官网的品牌视觉元素
- **响应式设计**：完美适配桌面端和移动端
- **流畅交互**：优雅的过渡动画和 hover 效果

## 技术栈

- **框架**: Next.js 16 (App Router)
- **UI**: React 19
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4
- **包管理**: pnpm

## 设计风格

### 配色方案
- **主色**: 黑色 (#000000) - 体现专业和高端
- **辅助色**: 灰色 (#666666) - 用于次要文本
- **强调色**: 粉色 (#e91e63) - 用于促销和重点元素
- **背景色**: 白色 (#ffffff) - 保持简洁干净

### 设计理念
- 简洁专业的商务风格
- 大量留白，突出商品
- 优雅的过渡动画
- 响应式设计，完美适配移动端

## 功能特性

### 已实现功能

1. **首页**
   - 大尺寸 Hero Banner，带有背景图和 CTA 按钮
   - 顶部公告栏
   - 三个精选分类展示（连衣裙、上衣、外套）
   - 精选商品区域（4件商品）
   - 最新上架区域（4件商品）
   - 促销横幅（限时特惠）
   - 四项服务特性展示（包邮、退换、正品、客服）

2. **商品列表页** (`/products`)
   - 侧边栏分类筛选
   - 顶部搜索框
   - 响应式商品网格布局
   - 商品卡片展示价格、折扣、评分等信息

3. **商品详情页** (`/products/[id]`)
   - 商品图片展示（支持多图切换）
   - 尺码选择（S/M/L/XL）
   - 数量调整
   - 价格、折扣计算
   - 相关商品推荐

4. **购物车** (`/cart`)
   - 商品列表管理
   - 全选/单选功能
   - 数量增减
   - 商品删除
   - 价格自动计算（含折扣）
   - 订单摘要

5. **用户中心** (`/user`)
   - 订单管理（待付款、待发货、已发货、已完成）
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
    "products": [...],
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

## 设计亮点

1. **简洁专业的导航栏**
   - 顶部公告栏
   - 清晰的 Logo 展示
   - 响应式移动菜单
   - 搜索功能
   - 购物车和用户入口

2. **视觉冲击的 Hero 区域**
   - 全屏背景图
   - 大标题和副标题
   - 双 CTA 按钮
   - 视觉层次分明

3. **精选分类展示**
   - 3个主要分类
   - 悬停缩放效果
   - 渐变遮罩
   - 清晰的文字标识

4. **商品卡片设计**
   - 3:4 图片比例
   - 折扣标签
   - 悬停缩放动画
   - 清晰的价格展示
   - 星级评分

5. **深色页脚**
   - 品牌信息
   - 社交媒体链接
   - 导航链接
   - 分类链接
   - 客服信息

## 后端架构说明

本项目采用 **Next.js API Routes** 实现前后端分离架构：

### 优势

1. **统一技术栈**: 前后端都使用 TypeScript，类型共享
2. **易于维护**: 前后端代码在同一个仓库，便于协作
3. **自动部署**: Next.js 会自动处理 API 路由的部署
4. **性能优化**: 支持 Server Components，减少客户端 JavaScript

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

由于采用了前后端分离的 API 架构，移动端和小程序可以直接调用相同的接口：

### 步骤

1. **配置服务器域名**（小程序）
   - 登录小程序管理后台
   - 在"开发 > 开发管理 > 开发设置 > 服务器域名"中配置
   - 域名：`your-domain.com/api`

2. **调用 API**
   ```javascript
   // 小程序示例
   wx.request({
     url: 'https://your-domain.com/api/products',
     success(res) {
       console.log(res.data);
     }
   });
   ```

3. **实现前端 UI**
   - 使用小程序原生组件或 Taro/uni-app
   - 复用现有类型定义

### 优势

- **无需额外后端开发**: 直接复用现有 API
- **数据一致性**: 多端使用相同数据源
- **类型安全**: 共享 TypeScript 定义
- **快速迭代**: 后端一次修改，多端同步更新

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
- 参考 LILY 官网的专业设计风格
