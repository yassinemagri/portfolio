import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
// Alternative approach using CSS variables
const hiMelodyFont = {
  className: "font-hi-melody",
  style: { fontFamily: "'Hi Melody', 'El Messiri'" },
}

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className={`text-2xl font-semibold text-rose-800 dark:text-rose-300 ${hiMelodyFont.className} transition-colors duration-300`}
            >
              {t("nav.brand")}
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <NavLinks />
          <div className="flex items-center space-x-1">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header

function NavLinks() {
  const { t } = useTranslation()

  return (
    <>
      <Link
        to="/"
        className="text-rose-600 hover:text-rose-800 dark:text-rose-300 dark:hover:text-rose-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
      >
        {t("nav.home")}
      </Link>
      <Link
        to="/cv"
        className="text-rose-600 hover:text-rose-800 dark:text-rose-300 dark:hover:text-rose-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
      >
        {t("nav.cv")}
      </Link>
      <a
        href="#"
        className="text-rose-600 hover:text-rose-800 dark:text-rose-300 dark:hover:text-rose-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
      >
        {t("nav.projects")}
      </a>
      <a
        href="#"
        className="text-rose-600 hover:text-rose-800 dark:text-rose-300 dark:hover:text-rose-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
      >
        {t("nav.contact")}
      </a>
    </>
  )
}
