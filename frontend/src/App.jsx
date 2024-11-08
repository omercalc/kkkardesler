import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminLayout from "./layouts/AdminLayout";
import AdminHomePage from "./pages/Admin/HomesPage";
import CategoryPage from "./pages/Admin/Categories/CategoryPage";
import CreateCategoryPage from "./pages/Admin/Categories/CreateCategoryPage";
import UpdateCategoryPage from "./pages/Admin/Categories/UpdateCategoryPage";
import ProductPage from "./pages/Admin/Products/ProductPage";
import UpdateProductPage from "./pages/Admin/Products/UpdateProductPage";
import AdminUserPage from "./pages/Admin/UserPage";
import CreateProductPage from "./pages/Admin/Products/CreateProductPage";
import CouponsPage from "./pages/Admin/coupons/CouponsPage";
import CreateCouponsPage from "./pages/Admin/coupons/CreateCouponsPage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CartPage from "./pages/CartPage";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ShopPage />,
        },
        {
          path: "/product/:id",
          element: <ProductDetails />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path:"/register",
          element: <RegisterPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/admin",
          element: <AdminHomePage />,
        },
        {
          path: "/admin/categories",
          element: <CategoryPage />,
        },
        {
          path: "/admin/categories/create",
          element: <CreateCategoryPage />,
        },
        {
          path: "/admin/categories/update/:id",
          element: <UpdateCategoryPage />,
        },
        {
          path: "/admin/products",
          element: <ProductPage />,
        },
        {
          path: "/admin/product/update/:id",
          element: <UpdateProductPage />,
        },
        {
          path: "/admin/products/create",
          element: <CreateProductPage />,
        },
        {
          path: "/admin/Coupons",
          element: <CouponsPage />,
        },
        {
          path: "/admin/coupons/create",
          element: <CreateCouponsPage />,
        },
        {
          path: "/admin/users",
          element: <AdminUserPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
