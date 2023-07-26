import React, { FC, ReactNode, Suspense } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { RouterPath } from "./router.config";

export const PrivateRoute: FC<{ element: ReactNode }> = ({ element }) => {
  // const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const auth = false;
  return auth ? (
    <Suspense fallback={<div>Loading...</div>}>
      <div>{element}</div>
    </Suspense>
  ) : (
    <Navigate to={RouterPath.main} state={{ from: location }} replace />
  );
};
