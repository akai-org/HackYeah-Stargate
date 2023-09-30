import {useLoaderData} from "react-router-dom";
import {ProjectsService} from "../../services/projects.js";

export function Projects() {
    const projects = useLoaderData();
    console.log(projects);
    return (
        <div>
        <h1>Projects</h1>
        </div>
    )
}

export async function projectsLoader() {
    return await ProjectsService.getProjects();
}