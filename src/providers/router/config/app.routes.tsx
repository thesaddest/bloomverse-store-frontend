import React, { FC, ReactNode, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import CartRoutes from "../../../app/cart/cart.routes";
import CatalogRoutes from "../../../app/catalog/catalog.routes";

// ======= private route ======= //
const PrivateRoute: FC<{ element: ReactNode }> = ({ element: Element }) => {
  // const auth = useSelector(getUserAuthData);
  const auth = false;
  return auth ? (
    <Suspense fallback={<div>Loading...</div>}>
      <div>{Element}</div>
    </Suspense>
  ) : (
    <Navigate to={""} />
  );
};

// ======= public route ======= //
const PublicRoute: FC<{ element: ReactNode }> = ({ element: Element }) => (
  <Suspense fallback={<div />}>{Element}</Suspense>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* PRIVATE */}
      <Route path={"/cart/*"} element={<PrivateRoute element={<CartRoutes />} />} />

      {/* DEFAULT */}
      <Route path={"/catalog/*"} element={<PublicRoute element={<CatalogRoutes />} />} />
    </Routes>
  );
};

export default AppRoutes;
