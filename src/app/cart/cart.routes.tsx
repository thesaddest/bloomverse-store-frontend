import { FC, PropsWithChildren, ReactNode, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Suspended: FC<PropsWithChildren & { element: ReactNode }> = ({ element: Element }) => {
  return <Suspense fallback={<div>Loading...</div>}>{Element}</Suspense>;
};

// ======= pages ======= //
const CartPage = lazy(() => import("./cart.page"));

const CartRoutes: FC = () => {
  return (
    <Routes>
      <Route path={"/cart"} element={<Suspended element={<CartPage />} />} />
    </Routes>
  );
};

export default CartRoutes;
