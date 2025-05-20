import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Tailwind from "./Tailwind";
import CSSGridGenerator from "./CSSGridGenerator";

const MyTools = () => {
  const [isToggle, setIsToggle] = useState("tailwind");
  function toggle(e) {
    let value = e.target.innerText.toLowerCase();
    value ? setIsToggle(value) : setIsToggle("errr");
  }
  function capitalizeFirstLetter(value) {
    return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}
  return (
    <div className="container mx-auto py-8 px-4  h-screen">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Convert CSS to {isToggle.toUpperCase()}
          </h2>
          <p className="text-muted-foreground">
            Paste your vanilla CSS and get utility classes automatically.
          </p>
        </div>

        <div className="rounded-lg border bg-gray-900 text-card-foreground shadow">
          <div className="p-6 space-y-6">
            <div className="flex gap-2 justify-center items-center">
              <ToggleGroup type="single" size="lg">
                {["tailwind","grid","scrollbar"].map((section) => (
                  <ToggleGroupItem
                    className="px-8 text-rose-300 hover:bg-gray-800 hover:text-white"
                    value={section}
                    aria-label="Toggle bold"
                    onClick={toggle}
                  >
                    {capitalizeFirstLetter(section)}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>

            <div>
              {isToggle === "tailwind" ? <Tailwind /> : <CSSGridGenerator />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTools;
