import { FC, lazy, Suspense, useEffect } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { throttle } from 'lodash';
import useReadDirAssetsTemplateHooks from '@src/hooks/useReadDirAssetsTemplateHooks';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@src/hooks/useGlobalConfigActionHooks';
import { useSelector, useDispatch } from 'react-redux';
import ROUTER from '@src/common/constants/router';
import Root from '@src/container/root/index';

const Resume = lazy(() => import('@src/container/resume/index'));
const TemplateList = lazy(() => import('@src/container/templateList'));

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
  const dispatch = useDispatch();
  const resumeCatch = useSelector((state: any) => state.resumeModel);
  // 读取简历模版静态文件目录（简历图片）并存入redux
  const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();
  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();
  const throttledUpdateGlobalConfigFile = throttle(updateGlobalConfigFile, 1000);
  useEffect(() => {
    readDirAssetsTemplateHooks();
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      dispatch({
        type: 'resumeModel/changeInitialModel',
        payload: {
          values: { ...value },
        },
      });
    });
  }, []);
  useEffect(() => {
    // sendResumeCacheHook(resumeCatch);
    const intervalId = setInterval(() => {
      throttledUpdateGlobalConfigFile(resumeCatch);
    }, 3000);
    // 清除计时器
    return () => clearInterval(intervalId);
  }, [resumeCatch]); // 需要将resumeCatch作为依赖项，否则更新文件中的内容不是最新的。
  const routes = useRoutes(route);
  return routes;
};
