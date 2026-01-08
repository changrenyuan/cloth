import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  { id: 'dresses', name: '连衣裙', icon: '👗' },
  { id: 'tops', name: '上衣', icon: '👚' },
  { id: 'pants', name: '裤子', icon: '👖' },
  { id: 'outerwear', name: '外套', icon: '🧥' },
  { id: 'accessories', name: '配饰', icon: '👜' },
];

export const products: Product[] = [
  {
    id: '1',
    name: '法式优雅碎花连衣裙',
    price: 299,
    originalPrice: 399,
    category: 'dresses',
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop'],
    description: '精选优质面料，法式优雅设计，适合各种场合穿着。碎花元素增添浪漫气息，腰部收身设计凸显身材曲线。',
    stock: 50,
    rating: 4.8,
    reviewCount: 128,
    tags: ['新品', '热销', '法式']
  },
  {
    id: '2',
    name: '简约针织开衫',
    price: 199,
    originalPrice: 259,
    category: 'outerwear',
    images: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop'],
    description: '舒适柔软的针织面料，简约大方的设计，百搭单品。可内搭T恤或衬衫，春秋季节穿着非常合适。',
    stock: 35,
    rating: 4.6,
    reviewCount: 89,
    tags: ['舒适', '百搭']
  },
  {
    id: '3',
    name: '高腰显瘦阔腿裤',
    price: 229,
    originalPrice: 299,
    category: 'pants',
    images: ['https://images.unsplash.com/photo-1584370848010-d7cc6377113d?w=500&h=600&fit=crop'],
    description: '高腰设计拉长腿部线条，阔腿版型遮肉显瘦。优质面料垂感十足，简约大方的款式适合各种场合。',
    stock: 45,
    rating: 4.7,
    reviewCount: 156,
    tags: ['显瘦', '高腰']
  },
  {
    id: '4',
    name: '优雅蕾丝上衣',
    price: 179,
    originalPrice: 239,
    category: 'tops',
    images: ['https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&h=600&fit=crop'],
    description: '精致蕾丝面料，优雅设计感十足。适合约会、聚会等场合穿着，展现女性魅力。',
    stock: 28,
    rating: 4.5,
    reviewCount: 67,
    tags: ['优雅', '约会']
  },
  {
    id: '5',
    name: '复古风牛仔外套',
    price: 329,
    originalPrice: 429,
    category: 'outerwear',
    images: ['https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=600&fit=crop'],
    description: '复古风格牛仔外套，水洗工艺呈现出独特的做旧感。oversize版型潮流时尚，内搭卫衣或T恤都很好看。',
    stock: 22,
    rating: 4.8,
    reviewCount: 201,
    tags: ['复古', '潮流']
  },
  {
    id: '6',
    name: '真丝印花连衣裙',
    price: 499,
    originalPrice: 699,
    category: 'dresses',
    images: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=600&fit=crop'],
    description: '100%真丝面料，触感丝滑舒适。精美的印花设计，展现东方女性的优雅气质。适合宴会、婚礼等正式场合。',
    stock: 15,
    rating: 4.9,
    reviewCount: 87,
    tags: ['高端', '真丝']
  },
  {
    id: '7',
    name: '简约纯色T恤',
    price: 89,
    originalPrice: 129,
    category: 'tops',
    images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop'],
    description: '纯棉材质，透气舒适。简约纯色设计，百搭单品，可搭配各种下装。多种颜色可选。',
    stock: 100,
    rating: 4.4,
    reviewCount: 345,
    tags: ['基础款', '百搭']
  },
  {
    id: '8',
    name: '精致手提包',
    price: 199,
    originalPrice: 299,
    category: 'accessories',
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=600&fit=crop'],
    description: '精致的手提包设计，多功能隔层。优质PU材质，质感上乘。适合日常通勤和约会使用。',
    stock: 40,
    rating: 4.6,
    reviewCount: 92,
    tags: ['配饰', '百搭']
  },
];
