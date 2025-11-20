import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import PageLayout from "../layout/PageLayout";
import RegisterForm from "../pages/RegisterForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "pagelayout",
    Component: PageLayout,
  },
  {path:"register",
    Component:RegisterForm
  }
]);
