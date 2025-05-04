import { useState } from "react";
import { useTranslation } from "react-i18next";
import { i18n } from "./i18n-provider"; // Import the i18n instance directly
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
export function LanguageSwitcher() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    // Use the imported i18n instance directly
    i18n.changeLanguage(lng);
    localStorage.setItem("appLanguage", lng);
    setIsOpen(false);
  };

  // Language options with their native names
  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
    { code: "ja", name: "日本語" },
    { code: "fr", name: "Français" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-1"
          aria-label={t("language")}
        >
          <Globe className="h-5 w-5 text-rose-600 dark:text-rose-300" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`cursor-pointer ${
              i18n.language === lang.code
                ? "bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-300"
                : "text-gray-700 dark:text-gray-200"
            }`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSwitcher;
