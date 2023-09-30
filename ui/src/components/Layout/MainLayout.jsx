import {CustomAppBar} from "../AppBar/AppBar.jsx";
import {Outlet} from "react-router-dom";

export function MainLayout() {
    return <>
        <CustomAppBar />
        <Outlet />
    </>
}