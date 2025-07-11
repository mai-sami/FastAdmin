import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Footer from "../components/Footer";
const Header = lazy(() => import("../components/admin/Header"));

export function BaseLayout() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </div>
  );
}
