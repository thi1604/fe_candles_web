import { Link } from "react-router-dom";
import {MissCandleProductCard} from "../../components";
import {IProductCard} from "../../components/MissCandleProductCard.tsx";

const products: IProductCard[] = [
  {
    id: 1,
    name: "Amber Glow",
    category: "NẾN THƠM",
    price: "450.000đ",
    originalPrice: "470.000đ",
    rating: 5,
    reviews: 24,
    image: "/collection_special_1_1.png",
    badge: "HOT",
  },
  {
    id: 2,
    name: "Lavender Dreams",
    category: "NẾN TRANG TRÍ",
    price: "380.000đ",
    rating: 5,
    reviews: 18,
    image: "/collection_special_2_2.png",
  },
  {
    id: 3,
    name: "Rose Garden",
    category: "NẾN QUÀ TẶNG",
    price: "520.000đ",
    rating: 4,
    reviews: 32,
    image: "/collection_special_3_3.png",
    badge: "MỚI",
  },
  {
    id: 4,
    name: "Artisan Eucalyptus",
    category: "NẾN YOGA",
    price: "420.000đ",
    originalPrice: "450.000đ",
    rating: 5,
    reviews: 15,
    image: "/collection_special_4_4.png",
  },
];

export default function CollectionSpecialSection () {

  return (
    <section className="bg-light py-12 md:py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-primary text-xs md:text-sm tracking-widest font-medium mb-2 uppercase">
            Sản Phẩm Nổi Bật
          </p>
          <h2 className="text-2xl md:text-4xl font-serif text-dark font-bold">
            Bộ Sưu Tập <span className="text-primary italic">Đặc Biệt</span>
          </h2>
          <p className="text-dark mt-3 md:mt-4 max-w-xl mx-auto text-sm md:text-base opacity-80">
            Những sản phẩm được yêu thích nhất, được làm thủ công từ nguyên liệu tự nhiên
            với hương thơm tinh tế, bền lâu.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <MissCandleProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 md:mt-12">
          <Link
            to="/san-pham"
            className="inline-flex items-center justify-center px-8 py-3 text-dark font-medium hover:text-primary transition duration-300 text-sm md:text-base group"
          >
            Xem tất cả bộ sưu tập
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
