import { Leaf, Heart, Award, Clock } from "lucide-react"
import {MissCandleValueProp} from "../../components";

const features = [
  {
    icon: Leaf,
    title: "100% Tự Nhiên",
    description: "Sáp đậu nành nguyên chất, không hóa chất độc hại",
  },
  {
    icon: Heart,
    title: "Làm Thủ Công",
    description: "Mỗi sản phẩm được làm tỉ mỉ bởi nghệ nhân",
  },
  {
    icon: Award,
    title: "Chất Lượng Cao",
    description: "Tinh dầu thiên nhiên nhập khẩu từ Pháp",
  },
  {
    icon: Clock,
    title: "Hương Thơm Bền",
    description: "Lưu hương lên đến 50+ giờ đốt liên tục",
  },
]

export default function StorySection() {
  return (
    <section className="bg-[#023134] py-12 md:py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content - hiển thị trước trên mobile */}
          <div className="order-2 lg:order-2">
            <p className="text-amber-400 text-xs md:text-sm tracking-wider mb-2 text-center lg:text-left">
              CÂU CHUYỆN CỦA CHÚNG TÔI
            </p>
            <h2 className="text-2xl md:text-4xl font-sans text-white leading-tight text-center lg:text-left">
              Nghệ Thuật <span className="text-amber-400 italic">Thắp Sáng</span>
              <br />
              Không Gian
            </h2>
            <p className="text-white/60 mt-4 md:mt-6 leading-relaxed text-sm md:text-base text-center lg:text-left">
              Trang trí và thưởng thức nến là cả một nghệ thuật đòi hỏi công sức và thời gian. Khi tắt điện và thắp nến
              lên, thời gian như chậm lại làm cho ta thư thái và thấy mình tuất mới.
            </p>
            <p className="text-white/60 mt-3 md:mt-4 leading-relaxed text-sm md:text-base text-center lg:text-left">
              Chúng tôi tin rằng một ngọn nến không chỉ đơn thuần là nguồn sáng, mà còn là cách để bạn tạo nên khoảnh
              khắc đặc biệt, lan tỏa cảm xúc và hạnh phúc trong không gian sống của mình.
            </p>

            <div className="grid grid-cols-2 gap-6 md:gap-6 mt-8 md:mt-10">
              {features.map((feature, index) => (
               <div key={index}>
                 <MissCandleValueProp icon={feature.icon} title={feature.title} description={feature.description}/>
               </div>
              ))}
            </div>
          </div>

          {/* Image - hiển thị sau trên mobile */}
          <div className="relative rounded-2xl shadow-[0_0_30px_3px_rgba(245,158,11,0.3)] hidden md:block order-1 lg:order-1">
            <img
              src="/section-3.png"
              alt="Nghệ thuật làm nến"
              className="rounded-2xl w-full object-cover"
            />
            <div className="absolute w-[200px] h-[100px] -bottom-6 -right-6 bg-itemCard border-[1px] border-white/15 backdrop-blur-md rounded-lg px-3 py-3">
              <div className="text-3xl font-bold text-amber-400">25+</div>
              <div className="text-white/70 text-sm">Năm kinh nghiệm làm nến thủ công</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
