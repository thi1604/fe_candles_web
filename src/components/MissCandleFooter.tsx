import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Sản Phẩm",
    links: [
      { label: "Nến Thơm Cao Cấp", path: "/products/candles" },
      { label: "Bộ Sưu Tập Mùa Hè", path: "/collections/summer" },
      { label: "Nến Thư Giãn (Yoga)", path: "/collections/yoga" },
      { label: "Set Quà Tặng", path: "/gifts" },
    ],
  },
  {
    title: "Về MissCandle",
    links: [
      { label: "Câu Chuyện Thương Hiệu", path: "/about" },
      { label: "Quy Trình Thủ Công", path: "/process" },
      { label: "Blog Cảm Hứng", path: "/blog" },
      { label: "Tuyển Dụng", path: "/careers" },
    ],
  },
  {
    title: "Hỗ Trợ Khách Hàng",
    links: [
      { label: "Hướng Dẫn Sử Dụng", path: "/guide" },
      { label: "Chính Sách Đổi Trả", path: "/policy" },
      { label: "Vận Chuyển & Giao Nhận", path: "/shipping" },
      { label: "Liên Hệ Hợp Tác", path: "/contact" },
    ],
  },
];

// Đã sửa lại Icon cho đúng với mạng xã hội
const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "Youtube" },
];

const contactInfo = [
  { icon: Phone, text: "+84 123 456 789" },
  { icon: Mail, text: "misscandle@gmail.com" },
  { icon: MapPin, text: "123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh" },
];

const MissCandleFooter: FunctionComponent = () => {
  return (
    <footer className="bg-bgHeaderFooter py-8 md:py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">

          {/* CỘT 1: Logo & Thông tin liên hệ */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Miss Candle Logo"
                className="h-15 w-auto object-contain my-3"
              />
            </Link>
            <p className="text-textHeader text-xs md:text-sm leading-relaxed max-w-xs">
              Lan tỏa cảm xúc, hạnh phúc mỗi ngày với những sản phẩm nến thơm cao cấp được làm thủ công từ nguyên liệu
              tự nhiên.
            </p>

            {/* Render thông tin liên hệ từ mảng contactInfo */}
            <div className="mt-4 md:mt-6 space-y-2 text-textHeader text-xs md:text-sm">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {/* Nếu muốn hiện icon thay vì emoji thì dùng thẻ <item.icon /> */}
                  <span>{index === 0 ? "📞" : index === 1 ? "✉️" : "📍"}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Render Social Icons từ mảng socialLinks */}
            <div className="flex gap-3 mt-4 md:mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition"
                >
                  <social.icon className="w-3 h-3 md:w-4 md:h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* CÁC CỘT LINK: Render động từ mảng footerLinks */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-textHeader font-medium mb-3 md:mb-4 text-sm md:text-base">
                {section.title}
              </h4>
              <ul className="space-y-2 md:space-y-3 text-textHeader text-xs md:text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path} className="hover:text-amber-400 transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-textHeader mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-textHeader text-xs md:text-sm gap-4">
          <p>© 2026 Lumière. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-4 md:gap-6">
            <Link to="#" className="hover:text-brightenUp transition">
              Điều khoản sử dụng
            </Link>
            <Link to="#" className="hover:text-brightenUp transition">
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MissCandleFooter;
