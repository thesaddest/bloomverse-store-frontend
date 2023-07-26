import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const CartPage = lazy(() => import("../../../app/cart/cart.page"));
const CatalogPage = lazy(() => import("../../../app/catalog/catalog.page"));
const MainPage = lazy(() => import("../../../app/main/main.page"));
const NotFoundPage = lazy(() => import("../../../app/not-found/not-found.page"));

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  CART = "cart",
  CATALOG = "catalog",
  // should always be last
  NOT_FOUND = "not_found",
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.CART]: "/cart",
  [AppRoutes.CATALOG]: "/catalog",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routerConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />,
  },
  [AppRoutes.CART]: {
    path: RouterPath.cart,
    element: <CartPage />,
    authOnly: true,
  },
  [AppRoutes.CATALOG]: {
    path: RouterPath.catalog,
    element: <CatalogPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath.not_found,
    element: <NotFoundPage />,
  },
};
