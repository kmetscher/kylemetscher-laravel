import React, { useLayoutEffect, useState } from 'react'
import { InertiaProgress } from '@inertiajs/progress';
import HeaderNav from './HeaderNav';
import Sidebar from './Sidebar';
import Providers from './Providers';

export default function Layout({ children }) {
    useLayoutEffect(() => {
        console.log('Container updated');
    }, [children.mainflex]);

    InertiaProgress.init({
        delay: 0,
        showSpinner: true,
    });

    return (
        <Providers>
            <main>
                <HeaderNav />
                <div className='container'>
                    <div className='mainflex'>
                        {children}
                    </div>
                    <Sidebar />
                </div>
            </main>
        </Providers>
    )
}