import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage/LandingPage.jsx";
import { Courses } from "../pages/Courses/Courses.jsx";

export const router = createBrowserRouter([
  {
    index: true,
    element: <LandingPage />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
]);
