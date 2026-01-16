import {FunctionComponent, useState} from "react"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

const MENU_ITEMS : { label: string, path: string }[] = [
  { label: "Trang Chủ", path: "/" },
  { label: "Sản Phẩm", path: "/san-pham" },
  { label: "Bộ Sưu Tập", path: "/bo-suu-tap" },
  { label: "Về Chúng Tôi", path: "/ve-chung-toi" },
  { label: "Liên Hệ", path: "/lien-he" },
];

const MissCandleHeader: FunctionComponent<unknown> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-bgHeaderFooter relative top-0 left-0 right-0 z-50 py-4 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png" // Đường dẫn ảnh trong thư mục public
            alt="Miss Candle Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {MENU_ITEMS.map(item => (
            <Link to={`${item.path}`} className="text-textHeader text-sm hover:text-brightenUp transition">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <button className="text-textHeader hover:text-white transition hidden md:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-textHeader hover:text-white transition relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-brightenUp rounded-full text-[10px] flex items-center justify-center text-white">
              0
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="text-textHeader hover:text-white transition md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a1a1a]/95 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col py-4">
            {MENU_ITEMS.map(item => (
              <Link
                to={`${item.path}`}
                className="text-white/90 text-sm py-3 px-4 hover:bg-white/5 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default MissCandleHeader
