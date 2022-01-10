import React, { Suspense, lazy, createElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fallback from 'Components/fallback';
import { routeConfig, RouteConfigType } from './config';

const renderRoutes = (routes: Array<RouteConfigType>) => {
  return routes.map(({ routePath, elementPath, children }) => {
    const Element = (
      <Suspense fallback={<Fallback />}>{createElement(lazy(() => import(`Pages/${elementPath}`)))}</Suspense>
    );
    return (
      <Route key={routePath} path={routePath} element={Element}>
        {children && renderRoutes(children)}
      </Route>
    );
  });
};

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>{renderRoutes(routeConfig)}</Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
