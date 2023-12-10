import React from 'react';
import Menu from "./Menu";
import { Outlet} from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <Menu/>
            <main className='flex-grow flex justify-center items-center'>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;