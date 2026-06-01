import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }){
    const [lang, setLang] = useState('pt-BR')

    function toggleLang () {
        setLang(prev => prev == 'pt-BR' ? 'en-US' : 'pt-BR')
    }

return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
        {children}
    </LanguageContext.Provider>
);

}
export function useLang() {
    return useContext(LanguageContext)
}





/*
//App.jsx
import { LanguageProvider } from './LanguageContext'
impor Header
import Home
impor
impor
impor


export {


return (
    <LanguageProvider>
        <Header/>
        <Home/>
    </LanguageProvider>
)

}


//header.jsx
import { useLang } from './LanguageContext'

export defaul function Header() {

    
    const { lang, toggleLang } = useLang();
    
    return (
        <header>
            <button onClick={toggleLang}>  {lang === 'pt-BR' ? 'Mudar para Inglês' : 'Change to Portuguese'}
            </button>
        </header>
    )
}
*/
