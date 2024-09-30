import { BIRTH_DATE, PROJECT_CATEGORIES } from "../src/js/constants"
import { calculateAge } from "../src/js/utils"

const TRANSLATION = {
    "imagesAltText": {
        "me": "It's me! Henrique Barbosa, a young man using glasses, with curly hair and using a tank top.",
        "projects": "Project: Bug Hunter, Bomberman game with a coding bugs theme, the board has walkable, blocked and infected tiles. There's an enemy bug and your character, a shield with a happy face.",
        "projectPlaceholder": "Placeholder image for the projects, it's a developer's table with him working on it."
    },
    "mainButtons":{
        "aboutMe": {
            "buttonText": "About me",
            "descriptionText": "Learn more about me."
        },
        "projects": {
            "buttonText": "Projects",
            "descriptionText": "Take a look at my works and personal projects."
        },
        "linkedin": {
            "buttonText": "LinkedIn",
            "descriptionText": "Check my LinkedIn profile."
        },
        "github": {
            "buttonText": "GitHub",
            "descriptionText": "Access my code portfolio on GitHub."
        }
    },
    "descriptionPads": {
        "main": "Welcome to my website! Hope you enjoy your stay here ;)",
        "aboutMe": `Hey! How's it going? I'm Henrique, ${calculateAge(BIRTH_DATE)} years old, I'm a Software Developer, programming since 2018.\n` +
                   "I made this website as a way of presenting and sharing my projects with the rest of the world.\n\n" +
                   "Always enjoyed logic, calculations, deductions and the process of developing new things.\n" +
                   "Today I fix problems programming solutions for original ideas and/or attending to market's demand.\n\n" +
                   "I also like Game Development a lot, was always fascinated by videogame mechanics, it's my favorte hobby at the moment.\n\n" +
                   "Currently working as an Analyst Developer, but I'm interested in many other software areas, on the recent past years I've focused on studying machine learning.\n" +
                   "I believe that process automation using artificial intelligence will make manual digital labor obsolete, requiring a bigger interaction on the planning process instead of the actual practical part.\n\n" +
                   "If my work caught your attention, don't even think twice and contact me so we can have a chat =)\n" +
                   "You can find me on LinkedIn, the link is in the main section from this page.",
        "projects": "Select a project to see more of it."
    },
    "projects": {},
    "projectCategories": {},
    "projectsMenuText": "And expanding...",
    "languageSelectLabel": "Language"
}

Object.keys(PROJECT_CATEGORIES).forEach(projectCategory => {
    TRANSLATION["projectCategories"][projectCategory] = PROJECT_CATEGORIES[projectCategory]["en"]
})

export default TRANSLATION