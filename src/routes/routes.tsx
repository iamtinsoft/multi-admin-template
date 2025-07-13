import { Route, Routes } from "react-router-dom";

import PagesData from "./PagesData";
import type { routerType } from "@/types/Router";

const Router = () => {
  const pageRoutes = PagesData.map(
    ({ path, element }: routerType, i: number) => {
      return <Route key={i} path={`/${path}`} element={element} />;
    }
  );

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
