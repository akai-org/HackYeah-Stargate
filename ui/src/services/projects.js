import {fetcher} from "../utils/fetcher.js";

export class ProjectsService {
    static async getProjects() {
        return await fetcher('http://localhost:8000/projects');
    }

    static async getProject(id) {
        return await fetcher(`http://localhost:8000/projects/${id}`);
    }
}