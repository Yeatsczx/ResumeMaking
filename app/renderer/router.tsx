// renderer/router.tsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Root from './container/root';

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Root />} />
            </Routes>
            {/* 重定向到首页 */}
            <Navigate to="/" />
        </div>
    );
}
export default Router;