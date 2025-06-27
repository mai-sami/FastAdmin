import { lazy } from "react";
import NotFound from "../pages/Home/NotFound";
import { BaseLayout } from "../Layout/BaseLayout";
import HomePromoCode from "../pages/admin/PromoCode/HomePromoCode";
// pages

const Home = lazy(() => import("../pages/Home"));
const Dashboard = lazy(() => import("../pages/admin/Dashboard"));

const Users = lazy(() => import("../pages/admin/Users"));
const Massges = lazy(() => import("../pages/admin/Massges"));
const SupportOpen = lazy(() => import("../pages/admin/SupportOpen"));
const SuportClose = lazy(() => import("../pages/admin/SuportClose"));
const Login = lazy(() => import("../pages/Auth/Login"));

export const router = [
  {path: "/", element: <Home /> },
  {
    path: "",
    element: <BaseLayout />,
    children: [
      { path: "admins/dashboard", element: <Dashboard /> },
      { path: "/admin/promo", element: <HomePromoCode /> },
      { path: "/admin/user", element: <Users /> },
      { path: "/admin/massge", element: <Massges /> },
      { path: "/admin/support-open", element: <SupportOpen /> },
      { path: "/admin/support-close", element: <SuportClose /> },
      // { path: "/job-details/:id", element: <JobsDetails /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
];
