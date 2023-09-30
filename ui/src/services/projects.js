import {fetcher} from "../utils/fetcher.js";

export class ProjectsService {
    static async getProjects() {
        return await fetcher('http://localhost:8000/projects');
    }
}