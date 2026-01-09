import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              关于LILY
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              始于2000年，第一个提出"商务时尚"的女装品牌，上班季节合，聚会亦出彩，在全球15国设700多家店。
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story Section 1 */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm text-pink-600 font-medium mb-4 tracking-wide uppercase">
                Stay true to the original aspiration
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                初心不改，匠心传承
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                在繁华的上海市中心，伴随着黄浦江的涛声，一个新的时尚传奇悄然诞生。2000年上海丝绸集团公司孕育了一个梦想，一个关于女性、关于优雅与力量的梦想。
              </p>
              <p className="text-gray-600 leading-relaxed">
                这个梦想在"LILY"这个名字下，化作现实。LILY以其独特的设计和高质量的服饰，迅速赢得了国内外白领女性的青睐。
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src="https://shop.lily.cn/wp-content/uploads/2024/06/ZHB_73801-1024x576.jpg"
                  alt="LILY Brand Story"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section 2 */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src="https://shop.lily.cn/wp-content/uploads/2024/06/2048-1024x576.jpg"
                  alt="LILY Business Fashion"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-sm text-pink-600 font-medium mb-4 tracking-wide uppercase">
                A perfect fit for your every day life
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                商务时尚，自信闪耀
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                LILY的诞生不仅仅是为了满足女性对时尚的追求，更是为了传递一种信念：每个女性都应当在舞台上自信闪耀。
              </p>
              <p className="text-gray-600 leading-relaxed">
                从创立之初，LILY就秉持着"简约而不简单，优雅且自信"的设计理念，将传统与现代完美融合，展现出独特的东方美学。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section 3 */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm text-pink-600 font-medium mb-4 tracking-wide uppercase">
                Keep innovating and moving forward
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                不断创新，勇毅前行
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                LILY不是一个静止的符号，而是一个不断进化的象征。品牌始终追随时尚的脉搏，不断创新，勇毅前行。
              </p>
              <p className="text-gray-600 leading-relaxed">
                LILY希望通过每一件精心设计的服饰，传递一种力量，让每个穿上LILY的女性都能感受到那份来自内心的自信与美丽。无论你是在职场中挥洒才华，还是在生活中追求梦想，LILY始终与你同在，见证你每个闪耀时刻。
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[5/3] overflow-hidden rounded-lg">
                <Image
                  src="https://shop.lily.cn/wp-content/uploads/2024/06/800.jpg"
                  alt="LILY Innovation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LILY IRL Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              LILY IRL
            </h2>
            <p className="text-gray-600 text-lg">
              与LILY一起，探索更多精彩瞬间
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://shop.lily.cn/wp-content/uploads/2024/06/KOL-6.png"
                alt="LILY KOL 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://shop.lily.cn/wp-content/uploads/2024/06/KOL-2.png"
                alt="LILY KOL 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://shop.lily.cn/wp-content/uploads/2024/06/KOL-6.png"
                alt="LILY KOL 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://shop.lily.cn/wp-content/uploads/2024/06/KOL-2.png"
                alt="LILY KOL 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-32 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            加入LILY，开启你的商务时尚之旅
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            探索更多优雅设计，感受自信与美丽
          </p>
          <a
            href="/products"
            className="inline-block bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors"
          >
            浏览商品
          </a>
        </div>
      </section>
    </div>
  );
}
