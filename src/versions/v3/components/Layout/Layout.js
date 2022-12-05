import React, { Suspense } from "react";
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';

function Layout()  {
    return (
        <Suspense fallback="Loading...">
            <Header/>
            <main>
                <Outlet/>
            </main>
        </Suspense>
    );
}

export default Layout;