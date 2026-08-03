export const languages = {
    en: 'English',
    es: 'Español',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';
