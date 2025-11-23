import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import PageLayout from "../layout/PageLayout";
import RegisterForm from "../pages/RegisterForm";
import GameDetails from "../pages/GameDetails";
import Home from "../pages/Home";
import PrivateRouter from "../pirvateroute/PrivateRouter";
import BrowserLayout from "../layout/BrowserLayout";
import ErrorPage from "../pages/ErrorPage";
import PasswordReset from "../pages/PasswordReset";
import UpdateProfile from "../pages/UpdateProfile";

export const router = createBrowserRouter([
  { errorElement: <ErrorPage></ErrorPage> },
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [{ index: true, Component: Home }],
  },
  { path: "browse", Component: BrowserLayout },
  {
    path: "pagelayout",
    Component: PageLayout,
  },
  { path: "passwordreset", Component: PasswordReset },
  {path:"updateInfo" ,Component:UpdateProfile},
  { path: "register", Component: RegisterForm },
  {
    path: "gamedetails",
    element: (
      <PrivateRouter>
        <GameDetails></GameDetails>
      </PrivateRouter>
    ),
  },
]);
