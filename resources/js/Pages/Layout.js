import React, { useState, useContext, useEffect } from 'react'
import HeaderNav from './HeaderNav';
import Sidebar from './Sidebar';
import { ThemeContext } from './ThemeContext';
import { themes } from './themes';
import { Link } from '@inertiajs/inertia-react'

export default function Layout({children}) {
    /* Check for a user preference on brightness. On first visit, 
    one doesn't exist, so default to dark mode. Use system settings 
    in the future? */
    let storedTheme = JSON.parse(localStorage.getItem('theme'));
    storedTheme = storedTheme ? storedTheme : themes.dark;
    /* Use the state hook to apply the appropriate context */
    const [themeState, setThemeState] = useState(storedTheme);
    /* Used by the Lightswitch component to update theme context state
    when a user changes the theme. */
    const toggleTheme = () => {
        setThemeState(themeState === themes.dark ? themes.light : themes.dark);
        document.body.style.backgroundColor = themeState.bgcolor;
    };
    /* Local storage is a side effect, so make those API calls whenever
    the state of the theme is changed. This also sets local storage 
    immediately upon first visit. */
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(themeState))
    }, [themeState]);
    /* cursed */
    document.body.style.backgroundColor = themeState.bgcolor;
    return (
        <main>
            <ThemeContext.Provider value={{themeState, toggleTheme}}>
                <HeaderNav />
                <div className='container'>
                    <div className='mainflex'>
                        {children}
                    </div>
                <Sidebar />
                </div>
            </ThemeContext.Provider>
        </main>
    )
}