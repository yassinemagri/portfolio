import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-rose-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-rose-600 dark:text-rose-300 text-sm transition-colors duration-300">
          {t("cv.copyright")}
        </p>
      </div>
    </footer>
  )
}
