"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";

// Import translation files
import enTranslations from "../translations/en.json";
import arTranslations from "../translations/ar.json";
import jaTranslations from "../translations/ja.json";
import frTranslations from "../translations/fr.json";

// Configure i18next with all translation resources
const resources = {
  en: {
    translation: enTranslations,
  },
  ar: {
    translation: arTranslations,
  },
  ja: {
    translation: jaTranslations,
  },
  fr: {
    translation: frTranslations,
  },
};

// Initialize i18next before exporting
const savedLang = localStorage.getItem("appLanguage");
const navigationLang = navigator.languages[0].slice(0, 2);
const systemLang =
  savedLang ||
  (["ar", "en", "fr"].includes(navigationLang) ? navigationLang : "en");

const i18n = i18next.createInstance();
i18n.use(initReactI18next).init({
  resources,
  lng: systemLang, // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default function I18nProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set document direction based on language
    const handleLanguageChange = () => {
      document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    };

    i18n.on("languageChanged", handleLanguageChange);
    handleLanguageChange(); // Set initial direction
    setIsLoaded(true);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-rose-300 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-600 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  // Wrap children with I18nextProvider to ensure context is properly provided
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

// Export the i18n instance for use in other files
export { i18n };
