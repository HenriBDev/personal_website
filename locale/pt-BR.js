import { BIRTH_DATE, PROJECT_CATEGORIES } from "../src/js/constants"
import { calculateAge } from "../src/js/utils"

const TRANSLATION = {
    "imagesAltText": {
        "me": "Sou eu! Henrique Barbosa, um homem jovem de óculos, cabelo encaracolado usando uma regata.",
        "projects": "Projeto: Bug Hunter, jogo estilo bomberman tematizado em bugs, o campo tem ladrilhos pisáveis, bloqueados e infectados. Há um inseto inimigo e seu personagem, um escudo com uma carinha feliz.",
        "projectPlaceholder": "Imagem de placeholder para os projetos, uma mesa de um desenvolvedor com ele trabalhando."
    },
    "mainButtons": {
        "aboutMe": {
            "buttonText": "Sobre Mim",
            "descriptionText": "Conheça mais sobre mim."
        },
        "projects": {
            "buttonText": "Projetos",
            "descriptionText": "Olhe meus trabalhos e projetos pessoais."
        },
        "linkedin": {
            "buttonText": "LinkedIn",
            "descriptionText": "Veja meu perfil no LinkedIn."
        },
        "github": {
            "buttonText": "GitHub",
            "descriptionText": "Acesse meu portfolio de códigos no GitHub."
        }
    },
    "descriptionPads": {
        "main": "Desejo boas-vindas ao meu site! Espero que goste da estadia ;)",
        "aboutMe": `Opa! tudo bom? Me chamo Henrique, tenho ${calculateAge(BIRTH_DATE)} anos, sou um desenvolvedor de software, programando desde 2018.\n` +
                   "Criei esse site como uma maneira de me apresentar e compartilhar meus projetos com o mundo.\n\n" +
                   "Sempre gostei muito de lógica, cálculos, deduções e o processo de desenvolver coisas novas.\n" +
                   "Hoje resolvo problemas programando soluções para ideias originais e/ou atendendo a demanda do mercado.\n\n" +
                   "Curto muito também desenvolvimento de games, sempre fui fascinado por mecânica de videogames, é meu hobby predileto no momento.\n\n" +
                   "Atuo trabalhando com RPA, mas possuo interesse em diversas áreas do mundo de software, venho estudando nos últimos anos sobre aprendizado de máquina.\n" +
                   "Acredito que a automação de processos utilizando inteligência artifical vai continuar tornando muitas tarefas manuais obsoletas, requisitando mais atuação no processo de planejamento do que na parte prática em si.\n\n" +
                   "Se meu trabalho chamou sua atenção, nem pense duas vezes e me contate para batermos um papo =)\n" +
                   "Você pode me encontrar pelo LinkedIn, o link está na seção principal desta página.",
        "projects": "Selecione um projeto para ver mais sobre ele."
    },
    "projects": {},
    "projectCategories": {},
    "projectsMenuText": "E expandindo...",
    "languageSelectLabel": "Língua"
}

Object.keys(PROJECT_CATEGORIES).forEach(projectCategory => {
    TRANSLATION["projectCategories"][projectCategory] = PROJECT_CATEGORIES[projectCategory]["pt-BR"]
})

export default TRANSLATION