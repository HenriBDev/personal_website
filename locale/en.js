// CALCULATING MY AGE
const BIRTH_YEAR = 2003,
    BIRTH_MONTH = 3,
    BIRTH_DAY = 10,
    CURRENT_DATE = new Date();

let myAge = CURRENT_DATE.getFullYear() - BIRTH_YEAR;
if(CURRENT_DATE.getMonth() < BIRTH_MONTH-1 || (CURRENT_DATE.getMonth() == BIRTH_MONTH-1 && CURRENT_DATE.getDate() < BIRTH_DAY)){
    myAge--;
}
export default {
    "images": {
        "me": {
            "imageName": "Henrique",
            "altText": "It's me! Henrique Barbosa, a young man using glasses, with curly hair and using a tank top."
        },
        "bugHunter": {
            "imageName": "Bug Hunter",
            "altText": "Project: Bug Hunter, Bomberman game with a coding bugs theme, the board has walkable, blocked and infected tiles. There's an enemy bug and your character, a shield with a happy face."
        },
        "docWriter": {
            "imageName": "DocWriter",
            "altText": "Project: Docwriter, a Discord Chatbot that transforms messages into text documents. This is the bot showing a preview of how the document looks, displaying the text, the current page and changing page buttons."
        },
        "warehouse": {
            "imageName": "Warehouse",
            "altText": "Project: Warehouse, website of exchanges and donations, made to ease the processes and unite people. In it's landing page it's shown a picture of individuals with objects in their hands."
        },
        "projects": {
            "imageName": "Projects",
            "altText": "Placeholder image for the projects, it's a developer's table with him working on it."
        },
        "emojiFace": {
            "imageName": "Emoji Face",
            "altText": "A smiley emoji =)."
        }
    },
    "buttons": {
        "main": {
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
        "projects": {
            "webDevelopment": {
                "personalWebsite": {
                    "buttonText": "Personal Website",
                    "descriptionText": "What's up? Enjoying the visit?"
                },
                "docWriter": {
                    "buttonText": "DocWriter",
                    "descriptionText": "A Discord Chatbot that generates text documents."
                },
                "bugHunter": {
                    "buttonText": "Bug Hunter",
                    "descriptionText": "A Bomberman styled game developed in pure JS."
                },
                "warehouse": {
                    "buttonText": "Warehouse",
                    "descriptionText": "Website to exchange and donate with easiness (Concept)."
                }
            },
            "gameDevelopment": {
                "bugHunter": {
                    "buttonText": "Bug Hunter",
                    "descriptionText": "A Bomberman styled game developed in pure JS."
                }
            }
        }
    },
    "dropdownMenus": {
        "webDevelopment": "Web Development",
        "gameDevelopment": "Game Development"
    },
    "descriptionPads": {
        "main": "Welcome to my website! Hope you enjoy your stay here ;)",
        "aboutMe": `Hey! How's it going? I'm Henrique, ${myAge} years old, I'm a Software Developer, programming since 2018.\n` +
                   "I made this website as a way of presenting and sharing my projects with the rest of the world.\n\n" +
                   "Always enjoyed logic, calculations, deductions and the process of developing new things.\n" +
                   "Today I fix problems programming solutions for original ideas and/or attending to market's demand.\n\n" +
                   "I also like Game Development a lot, was always fascinated by videogame mechanics, it's my favorte hobby at the moment.\n\n" +
                   "Currently working with RPA, but I'm interested in many other software areas, on the recent past years I've focused on studying machine learning.\n" +
                   "I believe that process automation using artificial intelligence will make manual digital labor obsolete, requiring a bigger interaction on the planning process instead of the actual practical part.\n\n" +
                   "If my work caught your attention, don't even think twice and contact me so we can have a chat =)\n" +
                   "You can find me on LinkedIn, the link is in the main section from this page.",
        "projects": "Select a project to see more of it."
    },
    "projectsMenuText": "And expanding...",
    "languageSelectLabel": "Language"
}