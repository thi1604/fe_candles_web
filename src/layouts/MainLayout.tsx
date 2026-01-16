import {Outlet} from 'react-router-dom';
import {MissCandleFooter, MissCandleHeader} from "../components";

const MainLayout = () => {
  return (
    <div>
      <MissCandleHeader></MissCandleHeader>

      {/* Outlet là nơi nội dung con sẽ được render vào đây */}
      <main className="min-h-screen">
        <Outlet />
      </main>
      <MissCandleFooter></MissCandleFooter>
    </div>
  );
};

export default MainLayout;
