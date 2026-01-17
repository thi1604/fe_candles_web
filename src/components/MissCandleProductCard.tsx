import {FunctionComponent} from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export interface IProductCard {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

type TMissCandleProductCard = {product: IProductCard};

const MissCandleProductCard: FunctionComponent<TMissCandleProductCard> = ({product}) => {
  return (
    <div className="bg-itemCard rounded-xl p-3 md:p-4 group hover:shadow-xl transition-[transform,shadow] duration-600 ease-out hover:-translate-y-1 h-full flex flex-col will-change-transform">
      <div className="relative overflow-hidden rounded-lg mb-3 md:mb-4 aspect-square bg-itemCard">
        {product.badge && (
          <span className="absolute top-2 left-2 md:top-3 md:left-3 z-10 bg-textHover text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded shadow-sm">
            {product.badge}
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu"
        />
      </div>

      {/* --- CONTENT --- */}
      <div className="flex flex-col flex-1">
        <p className="text-[10px] md:text-xs text-textSecondary tracking-wider uppercase font-medium">
          {product.category}
        </p>

        <Link to={`/san-pham/${product.id}`} className="block">
          <h3 className="font-medium text-brightenUp/90 mt-1 text-sm md:text-base hover:text-textHover transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-0.5 md:gap-1 mt-1 md:mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 md:w-3.5 md:h-3.5 ${
                i < product.rating
                  ? "fill-textHover text-textHover"
                  : "fill-gray-200/20 text-gray-200/20"
              }`}
            />
          ))}
          <span className="text-[10px] md:text-xs text-textSecondary ml-1">
            ({product.rating})
          </span>
        </div>

        {/* Price (Đẩy xuống đáy nếu card có chiều cao không đều) */}
        <div className="flex items-end gap-2 mt-auto pt-2 md:pt-3">
          <span className="font-bold text-textSecondary text-sm md:text-base">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-textSecondary line-through mb-0.5 opacity-70">
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MissCandleProductCard;
