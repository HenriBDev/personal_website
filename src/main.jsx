import React from 'react'
import ReactDOM from 'react-dom/client'
import {initReactI18next} from 'react-i18next'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import App from './App.jsx'
import './App.css'
import './css/animationClasses.css'
import './css/typography.css'

// Languages
import ptBr from '../locale/pt-BR'
import en from '../locale/en'
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        resources: {
            "pt-BR": {
                translation: ptBr
            },
            "en": {
                translation: en
            }
        }
    })
    
i18next.changeLanguage()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
