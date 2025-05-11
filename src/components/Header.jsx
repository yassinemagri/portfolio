import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

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
          <div className="flex items-center">
            <Link
              to="/"
              className={`text-2xl font-my-best text-rose-800 dark:text-rose-300 ${hiMelodyFont.className} transition-colors duration-300`}
            >
              {t("nav.brand")}
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center">
            <NavLinks />
            <div className="flex items-center space-x-1 ml-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu with Sheet */}
          <div className="md:hidden flex items-center justify-center">
            <Sheet>
              <SheetTrigger>
                <Menu size={28} className="text-rose-600 dark:text-rose-300" />
              </SheetTrigger>
              <SheetContent side="bottom" className="bg-white flex justify-center p-4 dark:bg-gray-900">
                <div className="flex flex-col space-y-4 mt-6">
                  <NavLinks />
                  <div className="flex justify-center space-x-3">
                    <LanguageSwitcher />
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
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
        className="text-rose-600 uppercase hover:text-rose-800 dark:text-rose-300 dark:hover:text-rose-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
      >
        {t("nav.home")}
      </Link>
      <Link
        to="/cv"
        className="text-rose-600 uppercase hover:text-rose-800 dark:text-rose-300 dark:hover:text-rose-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
      >
        {t("nav.cv")}
      </Link>
      <a
        href="/#projects"
        className="text-rose-600 uppercase hover:text-rose-800 dark:text-rose-300 dark:hover:text-rose-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
      >
        {t("nav.projects")}
      </a>
      {/* <Link
        to="/contact"
        className="text-rose-600 uppercase hover:text-rose-800 dark:text-rose-300 dark:hover:text-rose-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
      >
        {t("nav.contact")}
      </Link> */}
    </>
  )
}
