// IMAGES AND THEIR DESCRIPTIONS
export const IMAGES = {
    "Henrique": {
        "File Name": "myPhoto.jpg",
        "Alt Text": "Sou eu! Henrique Barbosa, um homem jovem de óculos, cabelo encaracolado usando uma jaqueta."
    },
    "Bug Hunter":{
        "File Name": "bugHunter.png",
        "Alt Text": "Projeto: Bug Hunter, jogo estilo bomberman tematizado em bugs, o campo tem ladrilhos pisáveis, bloqueados e infectados. Há um inseto inimigo e seu personagem, um escudo com uma carinha feliz."
    },
    "DocWriter": {
        "File Name": "docwriter.png",
        "Alt Text": "Projeto: Docwriter, Chatbot do Discord que transforma suas mensagens em documentos de texto. Este é o bot exibindo uma visualização de como está o documento, mostrando o texto presente nele, a página atual e botões para trocar de página."
    },
    "Warehouse": {
        "File Name": "warehouse.png",
        "Alt Text": "Projeto: Warehouse, Site de trocas e doações, feito para facilitar o processo e unir mais as pessoas. Na landing page é exibido uma foto de pessoas com objetos nas mãos."
    },
    "Projects": {
        // Photo by Stanley Dai on Unsplash. Link: https://unsplash.com/photos/73OZYNjVoNI
        "File Name": "projects.jpg",
        "Alt Text": "Imagem de placeholder para os projetos, uma mesa de um desenvolvedor com ele trabalhando."
    },
    "Emoji Face": {
        "File Name": "emojiFace.png",
        "Alt Text": "Um emoji sorrindo =)."
    }
};

// MAIN BUTTONS (SECTION CHANGING)
export const MAIN_BUTTONS = {
    "About Me": {
        "Description Image": "Henrique",
        "Description Text": "Conheça mais sobre mim.",
        "Text": "Sobre Mim",
        "Icon": "user",
        "Frame Name": "About Me"
    },
    "Projects": {
        "Description Image": "Bug Hunter",
        "Description Text": "Olhe meus trabalhos e projetos pessoais.",
        "Text": "Projetos",
        "Icon": "folder",
        "Frame Name": "Projects"
    },
    "LinkedIn": {
        "Description Image": "Henrique",
        "Description Text": "Veja meu perfil no LinkedIn.",
        "Text": "LinkedIn",
        "Icon": "linkedin",
        "Link": "https://www.linkedin.com/in/henribdev/"
    },
    "GitHub": {
        "Description Image": "Henrique",
        "Description Text": "Acesse meu portfolio de códigos no GitHub.",
        "Text": "GitHub",
        "Icon": "github",
        "Link": "https://github.com/HenriBDev"
    }
};

// DROPDOWN MENUS (PROJECTS SEPARATED BY AREA)
export const PROJECTS = {
    "Desenvolvimento Web": {
        "Esse site": {
            "Description Image": "Emoji Face",
            "Description Text": "Eaí? Tá curtindo a visita?",
            "Link": window.location.href
        },
        "DocWriter": {
            "Description Image": "DocWriter",
            "Description Text": "Chatbot para Discord gerador de documentos de texto.",
            "Link": "https://github.com/HenriBDev/DocWriter"
        },
        "Bug Hunter": {
            "Description Image": "Bug Hunter",
            "Description Text": "Jogo estilo Bomberman desenvolvido com JS puro.",
            "Link": "https://henribdev.github.io/Bug-Hunter/"
        },
        "Warehouse": {
            "Description Image": "Warehouse",
            "Description Text": "Site para realizar trocas e doações com maior facilidade (Conceito).",
            "Link": "https://github.com/Vichiat0/Warehouse"
        }
    },
    "Desenvolvimento de Games": {
        "Bug Hunter": {
            "Description Image": "Bug Hunter",
            "Description Text": "Jogo estilo Bomberman desenvolvido com JS puro.",
            "Link": "https://henribdev.github.io/Bug-Hunter/"
        },
    }
};

// CALCULATING MY AGE
const BIRTH_YEAR = 2003,
    BIRTH_MONTH = 3,
    BIRTH_DAY = 10,
    CURRENT_DATE = new Date();
    
let myAge = CURRENT_DATE.getFullYear() - BIRTH_YEAR;
if(CURRENT_DATE.getMonth() < BIRTH_MONTH-1 || (CURRENT_DATE.getMonth() == BIRTH_MONTH-1 && CURRENT_DATE.getDate() < BIRTH_DAY)){
    myAge--;
}

const ABOUT_ME_TEXT = 
    `Opa! tudo bom? Me chamo Henrique, tenho ${myAge} anos, sou um desenvolvedor de software, programando desde 2018. ` +
    "Criei esse site como uma maneira de me expressar e compartilhar meus projetos com o mundo. " +
    "Sempre fui fã de lógica desde criança, e crescendo me apaixonei pelo campo da computação. " +
    "Hoje resolvo problemas programando soluções de ideias originais e/ou atendendo a demanda do mercado. " +
    "Curto muito também desenvolvimento de games, sempre fui fascinado por mecânicas de jogos e queria ter minhas próprias criações. " +
    "Acredito que games também são arte e uma maneira de contar histórias, quero emocionar as pessoas da mesma maneira que me emocionei jogando jogos como Undertale, Rakuen, The Desolate Hope, Persona, etc...",

// SELECTION VALUES
SELECTIONS = {
    "None (Main)": {
        "Description Image": "Henrique",
        "Description Text": "Desejo boas-vindas ao meu site! Espero que goste da estadia ;)"
    },
    "None (About Me)": {
        "Description Image": "",
        "Description Text": ABOUT_ME_TEXT
    },
    "None (Projects)": {
        "Description Image": "Projects",
        "Description Text": "Selecione um projeto para ver mais sobre ele."
    },
};

// Adds main's buttons as selections
Object.keys(MAIN_BUTTONS).forEach(buttonName => {
    SELECTIONS[buttonName + " Button (Main)"] = {
        "Description Image": MAIN_BUTTONS[buttonName]["Description Image"],
        "Description Text": MAIN_BUTTONS[buttonName]["Description Text"]
    }
});

// Adds projects as selections
Object.keys(PROJECTS).forEach(areaName => {
    Object.keys(PROJECTS[areaName]).forEach(projectName => {
        SELECTIONS[projectName + " Row (Projects)"] = PROJECTS[areaName][projectName]
    })
});

export {SELECTIONS};

export const PREMADE_SVG_ICONS ={
    "backArrow": {
        width: 27,
        height: 27,
        path: <path d="M26.4 11.8333V15.1667H6.4L15.5667 24.3333L13.2 26.7L0 13.5L13.2 0.299988L15.5667 2.66665L6.4 11.8333H26.4Z" />
    },
    "dropdown": {
        width: 10,
        height: 15,
        path: <path d="M0 15L10 7.5L0 0L0 15Z" />
    },
    "folder": {
        width: 40,
        height: 36,
        path: <path d="M34 28.9375H18V26.75C18 23.8406 23.34 22.375 26 22.375C28.66 22.375 34 23.8406 34 26.75V28.9375ZM26 11.4375C27.0609 11.4375 28.0783 11.8984 28.8284 12.7189C29.5786 13.5394 30 14.6522 30 15.8125C30 16.9728 29.5786 18.0856 28.8284 18.9061C28.0783 19.7266 27.0609 20.1875 26 20.1875C24.9391 20.1875 23.9217 19.7266 23.1716 18.9061C22.4214 18.0856 22 16.9728 22 15.8125C22 13.3844 23.8 11.4375 26 11.4375ZM36 4.875H20L16 0.5H4C1.78 0.5 0 2.44687 0 4.875V31.125C0 32.2853 0.421427 33.3981 1.17157 34.2186C1.92172 35.0391 2.93913 35.5 4 35.5H36C37.0609 35.5 38.0783 35.0391 38.8284 34.2186C39.5786 33.3981 40 32.2853 40 31.125V9.25C40 6.82188 38.2 4.875 36 4.875Z" />
    },
    "github": {
        width: 40,
        height: 41,
        path: <path d="M19.9388 0.5C8.9295 0.5 0 9.67875 0 20.9947C0 30.0478 5.74925 37.7177 13.578 40.4837C14.5565 40.6096 14.9235 39.9808 14.9235 39.4779V35.9574C9.419 37.2148 8.19575 33.1911 8.19575 33.1911C7.3395 30.8023 5.994 30.1735 5.994 30.1735C4.1591 28.9161 6.11625 28.9161 6.11625 28.9161C8.0735 29.0418 9.17425 31.0536 9.17425 31.0536C11.0092 34.1971 13.8228 33.3168 14.9235 32.8139C15.046 31.4308 15.6575 30.5507 16.1468 30.0478C11.7433 29.5449 7.09475 27.7844 7.09475 19.8633C7.09475 17.5999 7.82875 15.8396 9.17425 14.331L9.16725 14.3089L9.16723 14.3088C9.02618 13.8764 8.3378 11.7663 9.419 9.04994C9.419 9.04994 11.1315 8.54705 14.9235 11.1874C16.5138 10.6845 18.2263 10.5589 19.9388 10.5589C21.6513 10.5589 23.364 10.8102 24.954 11.1874C28.7462 8.54705 30.4588 9.04994 30.4588 9.04994C31.473 11.5988 30.9298 13.614 30.7425 14.3083L30.74 14.3174C30.7251 14.3725 30.7125 14.4191 30.7035 14.4566C31.9265 15.8396 32.783 17.7258 32.783 19.989C32.783 27.9103 28.1345 29.5449 23.731 30.0478C24.4647 30.6764 25.0765 31.9337 25.0765 33.8199V39.4779C25.0765 39.9808 25.4435 40.6096 26.422 40.4837C34.373 37.7177 40 30.0478 40 20.9947C39.8775 9.67875 30.948 0.5 19.9388 0.5Z" />
    },
    "linkedin": {
        width: 40,
        height: 41,
        path: <path fillRule="evenodd" clipRule="evenodd" d="M0 6.89C0 1.70385 1.07854 0.5 6.11 0.5H33.5C38.5314 0.5 39.6071 1.70385 39.6071 6.89L40 34.11C40 39.2961 39.4214 40.5 34.39 40.5H6.5C1.46854 40.5 0.392881 39.2961 0.392881 34.11L0 6.89ZM6.22221 14.3976V24.4453V34.493H12.4172V14.3976H6.22221ZM5.8578 8.01219C5.8578 10.0781 7.31545 11.5805 9.31971 11.5805C11.324 11.5805 12.7816 10.0781 12.7816 8.01219C12.7816 5.94631 11.324 4.44385 9.31971 4.44385C7.49765 4.44385 5.8578 5.94631 5.8578 8.01219ZM28.8157 34.493H34.6463V22.0977C34.6463 15.9001 31.0022 13.8342 27.5403 13.8342C24.4428 13.8342 22.2563 15.9001 21.7097 17.2147V14.3976H15.8791V34.493H22.0741V23.788C22.0741 20.9709 23.8962 19.4684 25.7182 19.4684C27.5403 19.4684 28.8157 20.4075 28.8157 23.6002V34.493Z" />
    },
    "user": {
        width: 40,
        height: 43,
        path: <path d="M20 0C22.6522 0 25.1957 1.13259 27.0711 3.1486C28.9464 5.16462 30 7.89892 30 10.75C30 13.6011 28.9464 16.3354 27.0711 18.3514C25.1957 20.3674 22.6522 21.5 20 21.5C17.3478 21.5 14.8043 20.3674 12.9289 18.3514C11.0536 16.3354 10 13.6011 10 10.75C10 7.89892 11.0536 5.16462 12.9289 3.1486C14.8043 1.13259 17.3478 0 20 0ZM20 26.875C31.05 26.875 40 31.6856 40 37.625V43H0V37.625C0 31.6856 8.95 26.875 20 26.875Z" />

    }
}