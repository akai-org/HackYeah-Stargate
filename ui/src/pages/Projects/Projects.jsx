import {useLoaderData} from "react-router-dom";
import {ProjectsService} from "../../services/projects.js";
import {Stack} from "@mui/material";
import {ProjectCard} from "../../components/Cards/ProjectCard/ProjectCard.jsx";

export function Projects() {
    const projects = useLoaderData();
    return (
        <Stack gap="20px" padding="20px">
            {projects.map((params) => <ProjectCard key={params.id} {...params} />)}
        </Stack>
    )
}

export async function projectsLoader() {
    return await ProjectsService.getProjects();
}