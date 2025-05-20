import BusinessCard from "./BusinessCard";
export default function MyLinks() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-LKprimary to-LKbackground">

        <div className="flex items-center justify-center min-h-screen p-4 text-black ">
          {[
            {
              name: "Yassine Magri",
              profile: "",
              bio: ["vlogger", "Dev", "Designer"],
              links: [
                {
                  platform: "Website",
                  icon: "Globe",
                  url: "/",
                },
                {
                  platform: "GitHub",
                  icon: "GitHub",
                  url: "https://github.com/yassinemagri",
                },
                {
                  platform: "Youtube",
                  icon: "Youtube",
                  url: "@yassinemagri",
                },
                {
                  platform: "Instagram",
                  icon: "Instagram",
                  url: "https://www.instagram.com/yassinemagri",
                },
                {
                  platform: "Twitter",
                  icon: "X",
                  url: "https://www.twitter.com/yassinemagri",
                },
                {
                  platform: "TikTok",
                  icon: "Tiktok",
                  url: "https://www.tiktok.com/@yassine.magri",
                },
              ],
            },
          ].map((data) => {
            document.title = data.name;
            return <BusinessCard data={data} />;
          })}
        </div>
    </div>
  );
}
