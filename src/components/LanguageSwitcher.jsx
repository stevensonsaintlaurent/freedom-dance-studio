import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa6";

const LANGUAGES = [
  { code: "en", label: "English", short: "EN", flag: "🇺🇸" },
  { code: "ht", label: "Kreyòl", short: "HT", flag: "🇭🇹" },
  { code: "fr", label: "Français", short: "FR", flag: "🇫🇷" },
  { code: "es", label: "Español", short: "ES", flag: "🇪🇸" },
  { code: "ru", label: "Русский", short: "RU", flag: "🇷🇺" },
];

const STORAGE_KEY = "freedom-dance-language";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(
    () => localStorage.getItem(STORAGE_KEY) || i18n.language || "en",
  );

  const currentLanguage =
    LANGUAGES.find((item) => item.code === language) || LANGUAGES[0];

  const changeLanguage = async (nextLanguage) => {
    if (!nextLanguage || nextLanguage === language) return;

    await i18n.changeLanguage(nextLanguage);

    setLanguage(nextLanguage);
    localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;

    // Close DaisyUI dropdown after selection.
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div className="dropdown dropdown-end">
      <button
        type="button"
        tabIndex={0}
        className="
          btn
          btn-ghost
          btn-sm
          h-10
          min-h-10
          gap-1.5
          rounded-xl
          px-2.5
          font-semibold
          transition-all
          duration-200
          hover:bg-primary/10
          hover:text-primary
        "
        aria-label="Choose language"
      >
        <FaGlobe className="text-sm" />
        <span className="text-xs font-bold">{currentLanguage.short}</span>
        <span className="text-[10px] opacity-50">▼</span>
      </button>

      <ul
        tabIndex={0}
        className="
          dropdown-content
          z-[200]
          mt-3
          w-44
          rounded-2xl
          border
          border-base-300/60
          bg-base-100
          p-2
          shadow-2xl
        "
      >
        <li className="px-3 pb-2 pt-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-base-content/50">
            Language
          </span>
        </li>

        {LANGUAGES.map((item) => (
          <li key={item.code}>
            <button
              type="button"
              onClick={() => changeLanguage(item.code)}
              className={`
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-3
                py-2.5
                text-left
                text-sm
                transition-all
                duration-200
                ${
                  language === item.code
                    ? "bg-primary/10 font-bold text-primary"
                    : "hover:bg-base-200"
                }
              `}
            >
              <span className="text-lg">{item.flag}</span>
              <span className="flex-1">{item.label}</span>
              {language === item.code && <span className="text-xs">✓</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
