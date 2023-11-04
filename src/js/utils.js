import { Octokit } from "octokit";
import test_data from "../../portfolio_data.json"

const octokit = new Octokit({auth: import.meta.env.VITE_OCTOKIT_TOKEN});
export const calculateAge = referenceDate => {
    let currentDate = new Date()
    return Math.floor((currentDate - referenceDate) / 1000 / 60 / 60 / 24 / 365)
}

export const getProjects = async () => {
    let projectsContent = {};
    if(import.meta.env.PROD){
        const REPOS = await octokit.request("GET /search/repositories?q=user:{user}+topic:{topic}+fork:{allowFork}", {
                user: 'HenriBDev',
                topic: "portfolio-project",
                allowFork: true
            }),
            REPO_NAMES = REPOS["data"]["items"].map(repo => repo["name"]);

        await Promise.all(
            REPO_NAMES.map(async repoName => {
                const projectFile = await octokit.request("GET /repos/{user}/{repo}/contents/{file}", {
                        user: 'HenriBDev',
                        repo: repoName,
                        file: "portfolio_data.json"
                    }),
    
                    projectContent = projectFile["data"]["content"],
    
                    // Decode base64 into a string and encode it with utf-8
                    utf8EncodedJSON = decodeURIComponent(atob(projectContent).split('').map(function(c) {
                        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                    }).join(''));
                    
                projectsContent[repoName] = JSON.parse(utf8EncodedJSON);
            })
        );
    }else if (import.meta.env.DEV){
        projectsContent = {
            "personal_website": test_data
        }
    }
    return projectsContent;
}