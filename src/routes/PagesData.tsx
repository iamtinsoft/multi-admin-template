
// import ChangePasswordPage from "../pages/generic/ChangePasswordPage";
// import ForgotPasswordPage from "../pages/generic/ForgotPasswordPage";


import type { routerType } from "@/types/Router";
import NotFound from "../pages/generic/NotFoundPage";
import LandingPage from "@/pages/generic/LandingPage";


// import AuthSelectorPage from "../pages/generic/AuthSelectorPage";

const PagesData: routerType[] = [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },


];

export default PagesData;
