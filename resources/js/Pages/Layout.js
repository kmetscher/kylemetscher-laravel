import React, { useEffect } from 'react'
import HeaderNav from './HeaderNav';
import Sidebar from './Sidebar';
import { Link } from '@inertiajs/inertia-react'

export default function Layout({children}) {
    return (
        <main>
            <header>
                <HeaderNav />
            </header>
            <div className='container'>
                <div className='mainflex'>
                    {children}
                </div>
                <div className='siderbarFlex'>
                    <Sidebar />
                </div>
            </div>
        </main>
    )
}