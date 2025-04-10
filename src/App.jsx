

import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import CV from "@/pages/CV"
import { useTranslation } from "react-i18next"

export default function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
    document.documentElement.classList.add('scroll-smooth');
    document.querySelector('body').classList.toggle('el-messiri', document.documentElement.lang === "ar");

  }, [i18n.language])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cv" element={<CV />} />
        {/* Add other routes as needed */}
      </Route>
    </Routes>
  )
}
