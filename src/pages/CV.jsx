import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Github,
  Download,
  QrCode,
  Link,
  Palette,
} from "lucide-react";
import { useState } from "react";
import { QRCodeGenerator } from "../components/qr-code";
import { InlineQRCode } from "@/components/inline-qr-code";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

export default function CV() {
  const { t } = useTranslation();
  const [isQrDialogOpen, setIsQrDialogOpen] = useState(false);
  const [isLinksQrDialogOpen, setIsLinksQrDialogOpen] = useState(false);
  const cvDownloadUrl = "/downloads/yassine-magri-cv.pdf";
  const cvDownloadUrlFull = `${
    typeof window !== "undefined" ? window.location.origin : ""
  }${cvDownloadUrl}`;

  const contactCardUrl = `${
    typeof window !== "undefined" ? window.location.origin : ""
  }/contact-card`;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const skills = [
    { name: "Figma/Adobe XD/UI UX Design", level: 85 },
    { name: "React(TSX,JSX)/Git", level: 90 },
    { name: "Tailwind/Bootstrap/shadcn.ui", level: 95 },
  ];

  const languages = [
    { name: "Arabe", level: 98 },
    { name: "Français", level: 60 },
    { name: "Anglais", level: 85 },
  ];

  const handleDownload = () => {
    window.open("/downloads/yassine-magri-cv.pdf");
    console.log(
      "CV download would start here. In a real application, this would download the PDF file."
    );
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <motion.div
        className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden transition-colors duration-300"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        {/* Header */}
        <div className="text-center py-12 bg-rose-50 dark:bg-gray-800 transition-colors duration-300">
          <h1 className="font-hi-melody text-5xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300">
            Yassine Magri
          </h1>
          <div className="w-32 h-1 bg-black dark:bg-rose-300 mx-auto my-4 transition-colors duration-300"></div>
          <h2 className="text-xl uppercase tracking-wider text-gray-800 dark:text-gray-200 transition-colors duration-300">
            {t("cv.title")}
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Left Column */}
          <div>
            {/* Contact */}
            <div className="mb-12">
              <h3 className="font-hi-melody text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                {t("cv.contact")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-rose-600 dark:text-rose-400 transition-colors duration-300" />
                  <span className="text-gray-800 dark:text-gray-200 transition-colors duration-300 flex items-center">
                    <a
                      href="https://bit.ly/hayalamal"
                      className="text-gray-800 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300"
                    >
                      Kénitra, Maroc
                    </a>
                    {/* <InlineQRCode url="https://bit.ly/hayalamal" /> */}
                  </span>
                </div>
                {/* <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-rose-600 dark:text-rose-400 transition-colors duration-300" />
                  <span className="flex items-center">
                    <a
                      href="tel:+212770470447"
                      className="text-gray-800 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300"
                    >
                      +212 770 470447
                    </a>
                    <InlineQRCode url="tel:+212770470447" />
                  </span>
                </div> */}
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-rose-600 dark:text-rose-400 transition-colors duration-300" />
                  <span className="flex items-center">
                    <a
                      href="mailto:yassine.magri@gmail.com"
                      className="text-gray-800 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300"
                    >
                      yassine.magri@gmail.com
                    </a>
                    {/* <InlineQRCode url="mailto:yassine.magri@gmail.com" /> */}
                  </span>
                </div>
                <div className="flex items-center">
                  <Github className="w-5 h-5 mr-3 text-rose-600 dark:text-rose-400 transition-colors duration-300" />
                  <span className="flex items-center">
                    <a
                      href="https://www.github.com/yassinemagri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300"
                    >
                      www.github.com/yassinemagri
                    </a>
                    {/* <InlineQRCode url="https://www.github.com/yassinemagri" /> */}
                  </span>
                </div>
                <div className="flex items-center">
                  <Palette className="w-5 h-5 mr-3 text-rose-600 dark:text-rose-400 transition-colors duration-300" />
                  <span className="flex items-center">
                    <a
                      href="https://www.behance.net/yassinemagri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300"
                    >
                      www.behance.net/yassinemagri
                    </a>
                    {/* <InlineQRCode url="https://www.behance.net/yassinemagri" /> */}
                  </span>
                </div>
              </div>
            </div>

            {/* Career */}
            <div className="mb-12">
              <h3 className="font-hi-melody text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                {t("cv.career")}
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    2024-2025
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Design Web Freelance
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Conception et développement d' un site web pour un hôtel,
                    incluant la présentation des chambres et des services.
                    Création d'interfaces pour plusieurs sites web adaptés aux
                    formats desktop et mobile. Élaboration de maquettes et
                    prototypes interactifs pour améliorer l' expérience client
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    2024-2025
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Développeur Front-End Freelance
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Développement de sites web de jeux vidéo avec interfaces
                    interactives et animations dynamiques. Création de sites web
                    professionnels pour divers secteurs d' activité.
                    Implémentation de composants React réutilisables et
                    optimisation des performances. Intégration d'API et mise en
                    place d' architectures front-end robustes.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    2023-2025
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Travaillé chez KeniPharma company
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    2019-2020
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Stage chez Showroom Colorado
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    2017-2019
                  </h4>
                  <p className="text-gray-700 font-bold dark:text-gray-300 transition-colors duration-300">
                    Travaillé en tant que Technicien de Réparation PC
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Diagnostic et résolution de problèmes matériels et
                    logiciels. Installation et configuration de systèmes d'
                    exploitation et logiciels. Service client et conseil
                    technique personnalisé.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Profile */}
            <div className="mb-12">
              <h3 className="font-hi-melody text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                {t("cv.profile")}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                {t("cv.profileText")}
              </p>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h3 className="font-hi-melody text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                {t("cv.education")}
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    2024-2025
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Front-End - Auto-formation
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    2024-2025
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Design UI/UX - Auto-formation
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    2018-2020
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Diplôme de Technicien en Design de Bâtiment
                  </p>
                </div>
              </div>
            </div>
            {/* Skills */}
            <div className="mb-12">
              <h3 className="font-hi-melody text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                {t("cv.skills")}
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-800 dark:text-gray-200 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 transition-colors duration-300">
                      <div
                        className="bg-rose-600 dark:bg-rose-500 h-2.5 rounded-full transition-colors duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 transition-colors duration-300">
                {t("cv.skillsNote")}
              </p>
            </div>
            {/* Languages */}
            <div>
              <h3 className="font-hi-melody text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                {t("cv.languages")}
              </h3>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-800 dark:text-gray-200 transition-colors duration-300">
                        {language.name}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 transition-colors duration-300">
                      <div
                        className="bg-gray-700 dark:bg-gray-400 h-2.5 rounded-full transition-colors duration-300"
                        style={{ width: `${language.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Download and QR Code */}
        <div className="bg-rose-50 dark:bg-gray-800 py-6 px-8 transition-colors duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-0">
              <Button
                disabled
                onClick={handleDownload}
                className="bg-rose-600 cursor-pointer hover:bg-rose-700 text-white flex items-center gap-2 transition-colors duration-300"
              >
                <Download size={16} />
                {t("cv.downloadCV")}
              </Button>

              <Dialog open={isQrDialogOpen} onOpenChange={setIsQrDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    disabled
                    variant="outline"
                    className="border-rose-300 cursor-pointer dark:border-rose-700 text-rose-600 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-gray-700 flex items-center gap-2 transition-colors duration-300"
                  >
                    <QrCode size={16} />
                    {t("cv.showQRCode")}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-hi-melody text-xl text-center mb-2">
                      {t("cv.scanToDownload")}
                    </DialogTitle>
                    <DialogDescription className="text-center">
                      {t("cv.qrDescription")}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-center p-6">
                    <div className="bg-white p-4 rounded-lg">
                      <QRCodeGenerator
                        url={cvDownloadUrlFull}
                        size={200}
                        className="mx-auto"
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* New QR Code for Contact Links */}
              <Dialog
                open={isLinksQrDialogOpen}
                onOpenChange={setIsLinksQrDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button
                    disabled
                    variant="outline"
                    className="border-rose-300 cursor-pointer dark:border-rose-700 text-rose-600 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-gray-700 flex items-center gap-2 transition-colors duration-300"
                  >
                    <Link size={16} />
                    Contact Links QR
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-hi-melody text-xl text-center mb-2">
                      Scan for Contact Information
                    </DialogTitle>
                    <DialogDescription className="text-center">
                      Scan this QR code to access all my contact information and
                      social media links.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-center p-6">
                    <div className="bg-white p-4 rounded-lg">
                      <QRCodeGenerator
                        url={contactCardUrl}
                        size={200}
                        className="mx-auto"
                      />
                      <div className="mt-4 text-center space-y-2 text-sm text-gray-600">
                        <p>Email: yassine.magri@gmail.com</p>
                        <p>GitHub: yassinemagri</p>
                        <p>Behance: yassinemagri</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <p className="text-sm sm:ml-4 text-gray-600 dark:text-gray-400 mt-4 sm:mt-0 transition-colors duration-300">
              {t("cv.copyright")}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
