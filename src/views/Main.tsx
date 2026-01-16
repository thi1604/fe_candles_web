import {Route, Routes} from "react-router-dom";
import {MainLayout} from "../layouts";
import {HomePage} from "../pages";

export default function Main() {
    return (
      <Routes>
          {/* Nhóm các trang có Header/Footer chung */}
          <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              {/*<Route path="/contact" element={<Contact />} />*/}
          </Route>

          {/* Trang Login đứng một mình (không có Header/Footer) */}
          {/*<Route path="/login" element={<Login />} />*/}
      </Routes>
    )
}
