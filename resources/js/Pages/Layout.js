import React, { useState, useContext } from 'react'
import HeaderNav from './HeaderNav';
import Sidebar from './Sidebar';
import { ThemeContext } from './ThemeContext';
import { themes } from './themes';
import { Link } from '@inertiajs/inertia-react'

export default function Layout({children}) {
    const [themeState, setThemeState] = useState(themes.dark);
    const toggleTheme = () => {
        setThemeState(themeState === themes.dark ? themes.light : themes.dark);
        document.body.style.backgroundColor = themeState.bgcolor;
    };
    document.body.style.backgroundColor = themeState.bgcolor;
    return (
        <main>
            <ThemeContext.Provider value={{themeState, toggleTheme}}>
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
            </ThemeContext.Provider>
        </main>
    )
}