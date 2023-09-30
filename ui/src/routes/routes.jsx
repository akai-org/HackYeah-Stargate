import {createBrowserRouter} from "react-router-dom";
import {LandingPage} from "../pages/LandingPage/LandingPage.jsx";

export const router = createBrowserRouter([{
    index: true,
    element: <LandingPage />
}])