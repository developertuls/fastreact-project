import Nebver from '../comonents/shared/Nebver';
import Footer from '../pages/Foter';
import { Outlet, ScrollRestoration } from "react-router-dom";

export const Rot = () => {
  return (
    <div className="">
      {/* Navbar */}
      <Nebver />

      {/* Outlet renders route children */}
      <Outlet />

      {/* Footer */}
      <Footer />

      {/* Always scroll to top on route change */}
      <ScrollRestoration getKey={(location) => location.pathname} />
    </div>
  );
};

