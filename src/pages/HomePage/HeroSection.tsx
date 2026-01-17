import { ChevronDown } from "lucide-react";
import {MissCandleButton} from "../../components";

export default function HeroSection () {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-stone-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage: `url('/section-hero.png')`,
        }}
      >
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-24 md:py-32 w-full">
        <div className="max-w-xl animate-fade-in-up">
          {/* Tagline */}
          <p className="text-brightenUp text-xs md:text-sm tracking-wider mb-3 md:mb-4 flex items-center gap-2 font-medium">
            <span className="text-brightenUp/75">✦</span> BỘ SƯU TẬP MỚI 2024
          </p>

          {/* Main Heading */}
          <h1 className="font-serif text-white leading-tight">
            <span className="block text-4xl md:text-6xl lg:text-7xl mb-1 md:mb-2 font-bold">
              Lan Tỏa
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl text-amber-400 italic mb-1 md:mb-2 font-light">
              Cảm Xúc
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold">
              Mỗi Ngày
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/70 mt-4 md:mt-6 text-sm md:text-base leading-relaxed max-w-md">
            Khám phá bộ sưu tập nến thơm cao cấp được làm thủ công từ sáp đậu nành tự nhiên,
            mang đến không gian sống ấm áp và thanh lịch cho ngôi nhà của bạn.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
            <MissCandleButton onClickButton={() => null} textDisplay={'Khám Phá Ngay →'} variant={'primary'} className={'w-full sm:w-auto font-medium'}/>
            <MissCandleButton onClickButton={() => null} textDisplay={'Xem Bộ Sưu Tập'} variant={'outline'} className={'w-full'}/>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex-col items-center gap-2 hidden md:flex animate-bounce">
        <span className="text-[10px] tracking-[0.2em] uppercase">Cuộn xuống</span>
        <ChevronDown className="w-5 h-5 opacity-70" />
      </div>
    </section>
  );
}
