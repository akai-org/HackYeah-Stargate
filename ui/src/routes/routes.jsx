import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage/LandingPage.jsx";
import { Projects, projectsLoader } from "../pages/Projects/Projects.jsx";
import { MainLayout } from "../components/Layout/MainLayout.jsx";
import { Courses } from "../pages/Courses/Courses.jsx";
import { CourseDetails } from "../pages/CourseDetails/CourseDetails.jsx";
import {createBrowserRouter} from "react-router-dom";
import {LandingPage} from "../pages/LandingPage/LandingPage.jsx";
import {Projects, projectsLoader} from "../pages/Projects/Projects.jsx";
import {MainLayout} from "../components/Layout/MainLayout.jsx";
import {ProjectDetails, projectDetailsLoader} from "../pages/ProjectDetails/ProjectDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{index: true, element: <LandingPage/>
}, {path: '/projects', element: <Projects />, loader: projectsLoader},
        {path: '/projects/:id', element: <ProjectDetails />, loader: projectDetailsLoader}]
}])
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/projects", element: <Projects />, loader: projectsLoader },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
      },
    ],
  },
]);
