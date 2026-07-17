import {
    createContext,
    useContext,
    useState
} from "react";


import en from "../translations/en";
import zhCN from "../translations/zh-CN";



const LanguageContext = createContext();




export function LanguageProvider({children}) {


    const [language, setLanguage] = useState(

        localStorage.getItem("language") || "zh-CN"

    );



    const translations = {

        en,

        "zh-CN": zhCN

    };




    function changeLanguage(lang){


        setLanguage(lang);


        localStorage.setItem(
            "language",
            lang
        );


    }




    return (

        <LanguageContext.Provider

            value={{

                language,

                changeLanguage,

                t: translations[language]

            }}

        >

            {children}

        </LanguageContext.Provider>

    );


}





export function useLanguage(){

    return useContext(LanguageContext);

}