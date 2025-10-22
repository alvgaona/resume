import { defaultLang, type Language } from './config';
import { ui } from './ui';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = url.pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    return path ? `/${path}` : '/';
  }

  return `/${currentLang}${path ? `/${path}` : ''}`;
}

export function getAlternateLanguageUrl(
  currentUrl: URL,
  targetLang: Language,
): string {
  const currentLang = getLangFromUrl(currentUrl);

  if (currentLang === defaultLang && targetLang !== defaultLang) {
    // Going from default lang to alternate lang
    return `/${targetLang}${currentUrl.pathname}`;
  } else if (currentLang !== defaultLang && targetLang === defaultLang) {
    // Going from alternate lang to default lang
    const path = currentUrl.pathname.replace(`/${currentLang}`, '');
    return path || '/';
  } else if (currentLang !== defaultLang && targetLang !== defaultLang) {
    // Going from one alternate lang to another
    return currentUrl.pathname.replace(`/${currentLang}`, `/${targetLang}`);
  }

  return currentUrl.pathname;
}
