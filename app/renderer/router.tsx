// renderer/router.tsx
import * as React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';
import ROUTER from '@common/constants/router';
import TemplateList from '@src/container/templateList';
import useReadDirAssetsTemplateHooks from './hooks/useReadDirAssetsTemplateHooks';

function Router() {
  const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();

  React.useEffect(() => {
    readDirAssetsTemplateHooks();
  }, []);
  return (
    <div>
      <Routes>
        <Route path={ROUTER.root} element={<Root />} /> {/* 默认程序打开path为"/" */}
        <Route path={ROUTER.resume} element={<Resume />} />
        <Route path={ROUTER.templateList} element={<TemplateList />} />
      </Routes>
    </div>
  );
}
export default Router;
