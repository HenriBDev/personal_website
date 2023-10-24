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
            "altText": "Sou eu! Henrique Barbosa, um homem jovem de óculos, cabelo encaracolado usando uma regata."
        },
        "bugHunter": {
            "imageName": "Bug Hunter",
            "altText": "Projeto: Bug Hunter, jogo estilo bomberman tematizado em bugs, o campo tem ladrilhos pisáveis, bloqueados e infectados. Há um inseto inimigo e seu personagem, um escudo com uma carinha feliz."
        },
        "docWriter": {
            "imageName": "DocWriter",
            "altText": "Projeto: Docwriter, Chatbot do Discord que transforma suas mensagens em documentos de texto. Este é o bot exibindo uma visualização de como está o documento, mostrando o texto presente nele, a página atual e botões para trocar de página."
        },
        "warehouse": {
            "imageName": "Warehouse",
            "altText": "Projeto: Warehouse, Site de trocas e doações, feito para facilitar o processo e unir mais as pessoas. Na landing page é exibido uma foto de pessoas com objetos nas mãos."
        },
        "projects": {
            "imageName": "Projects",
            "altText": "Imagem de placeholder para os projetos, uma mesa de um desenvolvedor com ele trabalhando."
        },
        "emojiFace": {
            "imageName": "Emoji Face",
            "altText": "Um emoji sorrindo =)."
        }
    },
    "buttons": {
        "main": {
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
        "projects": {
            "webDevelopment": {
                "personalWebsite": {
                    "buttonText": "Site Pessoal",
                    "descriptionText": "E aí? Tá curtindo a visita?"
                },
                "docWriter": {
                    "buttonText": "DocWriter",
                    "descriptionText": "Chatbot para Discord gerador de documentos de texto."
                },
                "bugHunter": {
                    "buttonText": "Bug Hunter",
                    "descriptionText": "Jogo estilo Bomberman desenvolvido com JS puro."
                },
                "warehouse": {
                    "buttonText": "Warehouse",
                    "descriptionText": "Site para realizar trocas e doações com maior facilidade (Conceito)."
                }
            },
            "gameDevelopment": {
                "bugHunter": {
                    "buttonText": "Bug Hunter",
                    "descriptionText": "Jogo estilo Bomberman desenvolvido com JS puro."
                }
            }
        }
    },
    "dropdownMenus": {
        "webDevelopment": "Desenvolvimento Web",
        "gameDevelopment": "Desenvolvimento de games"
    },
    "descriptionPads": {
        "main": "Desejo boas-vindas ao meu site! Espero que goste da estadia ;)",
        "aboutMe": `Opa! tudo bom? Me chamo Henrique, tenho ${myAge} anos, sou um desenvolvedor de software, programando desde 2018.\n` +
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
    "projectsMenuText": "E expandindo...",
    "languageSelectLabel": "Língua"
}