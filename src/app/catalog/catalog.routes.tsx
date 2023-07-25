import { FC, PropsWithChildren, ReactNode, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Suspended: FC<PropsWithChildren & { element: ReactNode }> = ({ element: Element }) => {
  return <Suspense fallback={<div>Loading...</div>}>{Element}</Suspense>;
};

// ======= pages ======= //
const CatalogPage = lazy(() => import("./catalog.page"));

const CatalogRoutes: FC = () => {
  return (
    <Routes>
      <Route path={"/catalog"} element={<Suspended element={<CatalogPage />} />} />
    </Routes>
  );
};

export default CatalogRoutes;
