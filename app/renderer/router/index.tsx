import { FC, lazy, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import ROUTER from '@src/common/constants/router';
import Root from '@src/container/root/index';

const Resume=lazy(()=>import('@src/container/resume/index'));
const TemplateList=lazy(()=>import('@src/container/templateList'));
export const route: RouteObject[] = [
  {
    path: ROUTER.root,
    element: <Root />,
  },
  {
    path: ROUTER.resume,
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <Resume />
      </Suspense>
    ),
  },
  {
    path: ROUTER.templateList,
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <TemplateList />
      </Suspense>
    ),
  },
];

export const GetRoute: FC = () => {
  const routes = useRoutes(route);
  return routes;
};
