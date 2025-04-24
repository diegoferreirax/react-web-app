import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from 'react';
import pt from 'assets/locale/pt/default.json';
import en from 'assets/locale/en/default.json';
import es from 'assets/locale/es/default.json';

interface TranslationContextProps {
    language: string;
    handleSetLanguage: (language: string) => void;
    translate: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<string>(sessionStorage.getItem('language') || 'pt');
    const [translations, setTranslations] = useState<Record<string, string>>({});

    const loadTranslations = (lang: string) => {
        switch (lang) {
            case 'pt':
                setTranslations(pt);
                break;
            case 'en':
                setTranslations(en);
                break;
            case 'es':
                setTranslations(es);
                break;
            default:
                setTranslations(pt);
                break;
        }
    };

    useEffect(() => {
        loadTranslations(language);
    }, [language]);

    const translate = (key: string): string => {
        return translations[key] || key;
    };

    const handleSetLanguage = (lang: string) => {
        sessionStorage.setItem('language', lang);
        setLanguage(lang);
    };

    return (
        <TranslationContext.Provider value={{ 
            language, 
            handleSetLanguage, 
            translate
        }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = (): TranslationContextProps => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
};