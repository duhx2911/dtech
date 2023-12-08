import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/layout";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import PaymentPage from "../pages/PaymentPage";
import OrderSuccessPage from "../pages/OrderSuccess";

const AppBrowserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/danh-muc" element={<CategoryPage />} />
        <Route path="/:slugproduct" element={<ProductPage />} />
        <Route path="/gio-hang" element={<CartPage />} />
        <Route path="/dang-nhap" element={<LoginPage />} />
        <Route path="/thanh-toan" element={<PaymentPage />} />
        <Route path="/ket-qua" element={<OrderSuccessPage />} />
      </Route>
    </Routes>
  );
};
export default AppBrowserRouter;
