import {MissCandleButton} from "../../components";

export default function HeroSection() {
  return (
    <section className="bg-[#BF8055] py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold text-dark leading-tight">
                Lan Tỏa
              </h1>
              <h2 className="text-4xl md:text-6xl italic font-light text-light">
                Cảm Xúc
              </h2>
              <p className="text-4xl md:text-6xl font-bold text-dark">
                Tinh Tế
              </p>
            </div>

            <p className="text-dark/90 text-sm md:text-base leading-relaxed max-w-md">
              Khám phá bộ sưu tập nến thơm cao cấp của chúng tôi, được tạo ra từ những nguyên liệu tự nhiên tinh tế nhất, mang lại không gian sống của bạn sự ấm áp và thanh lịch.
            </p>

            <div className="flex flex-col lg:flex-row gap-4 pt-4">
              <MissCandleButton onClickButton={() => null} textDisplay={"Khám phá sản phẩm"} variant={'primary'}/>
              <MissCandleButton onClickButton={() => null} textDisplay={"Tìm hiểu thêm"} variant={'primary'}/>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] md:h-[550px] rounded-3xl overflow-hidden order-first md:order-last shadow-2xl">
            <img src={'/section-hero-2.png'} alt={'Hero Product Right'} className={'w-full h-full object-cover'}/>
          </div>
        </div>
      </div>
    </section>
  )
}
