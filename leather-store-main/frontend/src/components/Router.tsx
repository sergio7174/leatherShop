import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import NotFound from '../pages/NotFound/NotFound';
import { adminRoutes, userRoutes, publicRoutes } from '../routes';

const Router: React.FC = () => {
  // get the role from store
  const role = useAppSelector((state) => state.auth.role);

  return (
    <Routes>
       
      {/***admin route group *******/}
      {role === 'admin' &&
        adminRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
         {/***user route group *******/}
      {role === 'user' &&
        userRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
         {/***public route group *******/}
         {/***all routes are allow it, but only home can be show, just the others depend on a call(button, etc..) */}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
