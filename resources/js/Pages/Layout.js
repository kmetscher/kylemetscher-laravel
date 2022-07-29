import React, { useLayoutEffect, useState } from 'react'
import HeaderNav from './HeaderNav';
import Sidebar from './Sidebar';
import Providers from './Providers';

export default function Layout({ children }) {
    useLayoutEffect(() => {
        console.log('Container updated');
    }, [children.mainflex]);

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