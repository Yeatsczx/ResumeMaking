// renderer/router.tsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Root />} />{/*默认程序打开path为"/"*/}
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </div>
    );
}
export default Router;