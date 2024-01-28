import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import TopNavigation from "./TopNavigation";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const AppLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Header />
      {/* <TopNavigation /> */}
      <main>
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
};
export default AppLayout;
