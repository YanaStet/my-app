import { HomePageLazy } from "@/pages/home/Home.page.lazy";
import { ROUTE_PATHS } from "@/shared/utils/routes";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";

const routes: RouteObject[] = [
  {
    element: <HomePageLazy />,
    path: ROUTE_PATHS.HOME,
  },
];

const router = createBrowserRouter(routes);

export const Routes = () => <RouterProvider router={router} />;
