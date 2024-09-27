import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Index = lazy(() => import("@views/index"));
const Item = lazy(() => import("@views/item"));

const routes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/item",
    element: <Item />,
  },
];

const router = createBrowserRouter(routes);

const Routes = () => <RouterProvider router={router}></RouterProvider>;

export default Routes;
