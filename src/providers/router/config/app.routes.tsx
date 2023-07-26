import React, { FC, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./private.route";
import { AppRouteProps, routerConfig } from "./router.config";

const AppRoutes: FC = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>;
    return (
      <Route
        path={route.path}
        key={route.path}
        element={route.authOnly ? <PrivateRoute element={element} /> : element}
      />
    );
  }, []);

  return <Routes>{Object.values(routerConfig).map(renderWithWrapper)}</Routes>;
};

export default AppRoutes;
