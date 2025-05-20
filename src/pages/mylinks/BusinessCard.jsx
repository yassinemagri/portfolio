import {
  Youtube,
  Instagram,
  Facebook,
  Share2,
  Twitter,
  ShieldAlert,
  Globe,
  QrCode,
  Github,
  X,
  Twitch,
  TwitterIcon,
} from "lucide-react";
import Profile from "@/assets/imgs/profile.png";
import QRCode from "./QRCode";
import { Button } from "@/components/ui/button";
export default function BusinessCard({ data }) {
  function sharePage() {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully!"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      console.log("Web Share API is not supported in this browser.");
    }
  }

  const platformIcons = {
    youtube: Youtube,
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
    globe: Globe,
    github: Github,
    x: TwitterIcon,
  };
  return (
    <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-xl transition-all duration-300 bg-[#f5fff5] text-black border border-gray-100">
      {/* Header with theme toggle, share and contact Buttons */}
      <div className="flex justify-between p-4">
        <Button
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-opacity-10 transition-colors group bg-LKbackground text-LKprimary hover:text-LKbackground hover:bg-LKprimary"
          aria-label="Share"
          onClick={() => sharePage()}
        >
          <Share2 className="text-current" />
        </Button>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center px-6">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-3xl overflow-hidden mb-4 transition-all duration-300 border-4 border-LKprimary shadow-md">
          <img
            src={Profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-xl font-bold mb-4 text-LKprimary">{data.name}</h1>

        {/* Expertise badges */}
        <div className="flex flex-wrap justify-center items-center gap-1 mb-6">
          {Array.isArray(data.bio) ? (
            data.bio.map((bio) => (
              <span className="text-xs font-bold el-messiri py-1 px-2 rounded-full transition-colors duration-300 bg-LKbackground text-LKprimary">
                {bio}
              </span>
            ))
          ) : (
            <span className="text-xs font-bold el-messiri py-1 px-2 rounded-full transition-colors duration-300 bg-LKbackground text-LKprimary">
              {data.bio}
            </span>
          )}
        </div>

        {/* Appointment Button */}
        <div className="w-full mb-8">
          {data?.links.map(({ platform, url, icon }) => {
            const IconComponent = platformIcons[icon.toLowerCase()];
            const YTUrl =
              platform === "Youtube"
                ? `https://www.youtube.com/${url}?sub_confirmation=1`
                : url;
            return (
              <a
                key={platform + url}
                href={YTUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-between group cursor-pointer text-sm el-messiri font-medium rounded-xl flex items-center mb-4  gap-2 py-3 px-4 transition-colors duration-300 bg-LKbackground text-LKprimary hover:text-LKbackground hover:bg-LKprimary"
              >
                {platform === "Telegram" ? (
                  <div className="group">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      className="transition-all duration-300 fill-LKprimary group-hover:fill-LKbackground"
                    >
                      <path d="M28.59,4.29a2.23,2.23,0,0,0-2.27-.36L3.41,13.1a1.83,1.83,0,0,0,0,3.38l1.48.61a1,1,0,0,0,1.31-.53,1,1,0,0,0-.54-1.31L4.56,14.8l22.51-9a.22.22,0,0,1,.23,0,.24.24,0,0,1,.08.23L23.27,25.21a.4.4,0,0,1-.26.3.39.39,0,0,1-.39-.06l-8-6.24 7.83-7.91a1,1,0,0,0-1.22-1.56L9.75,16.54a1,1,0,1,0,1,1.72l4.83-2.85-2.35,2.39a2,2,0,0,0,.2,3.08l8,6.15a2.4,2.4,0,0,0,1.47.5,2.47,2.47,0,0,0,.83-.15,2.37,2.37,0,0,0,1.52-1.75L29.33,6.47A2.23,2.23,0,0,0,28.59,4.29Z" />
                    </svg>
                  </div>
                ) : IconComponent ? (
                  <IconComponent size={24} />
                ) : (
                  <ShieldAlert size={24} />
                )}
                {platform}
                <Button className="bg-LKbackground hover:bg-LKbackground w-6 h-6 p-0 flex items-center justify-center">
                  <QrCode
                    size={20}
                    className="stroke-[#4c4324] transition-all duration-300"
                  />
                </Button>
              </a>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="relative py-3">
        <div className="absolute inset-0 flex items-center px-8">
          <div className="w-full border-t transition-colors duration-300 border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-1 text-xs font-medium transition-colors duration-300 bg-[#f5fff5] text-gray-500">
            Join on YouTube
          </span>
        </div>
      </div>

      {/* QR Code */}
      <div className="flex flex-col items-center pb-6 px-6">
        <div className="p-2 rounded-xl mb-6 transition-all duration-300 bg-white shadow-sm">
          {data.links.map(({ platform, url }) =>
            platform === "Youtube" ? (
              <QRCode className="w-28 h-28" url={url} />
            ) : null
          )}
        </div>

        {/* Footer */}
        <p className="text-xs opacity-50 transition-colors duration-300 text-gray-600">
          © 2025 {data.name} - All rights reserved
        </p>
      </div>
    </div>
  );
}
