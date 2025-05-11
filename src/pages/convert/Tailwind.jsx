"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Copy, Check } from "lucide-react";

// Utility: mapping from CSS declarations to Tailwind classes
const cssToTwMap = {
  // Display
  "display:flex": ["flex"],
  "display:inline-flex": ["inline-flex"],
  "display:grid": ["grid"],
  "display:block": ["block"],
  "display:inline-block": ["inline-block"],
  "display:inline": ["inline"],
  "display:none": ["hidden"],

  // Flexbox
  "justify-content:flex-start": ["justify-start"],
  "justify-content:center": ["justify-center"],
  "justify-content:flex-end": ["justify-end"],
  "justify-content:space-between": ["justify-between"],
  "justify-content:space-around": ["justify-around"],
  "justify-content:space-evenly": ["justify-evenly"],
  "align-items:center": ["items-center"],
  "align-items:flex-start": ["items-start"],
  "align-items:flex-end": ["items-end"],
  "align-items:stretch": ["items-stretch"],
  "align-items:baseline": ["items-baseline"],
  "flex-direction:row": ["flex-row"],
  "flex-direction:column": ["flex-col"],
  "flex-direction:row-reverse": ["flex-row-reverse"],
  "flex-direction:column-reverse": ["flex-col-reverse"],
  "flex-wrap:wrap": ["flex-wrap"],
  "flex-wrap:nowrap": ["flex-nowrap"],
  "flex-wrap:wrap-reverse": ["flex-wrap-reverse"],
  "flex:1": ["flex-1"],
  "flex:auto": ["flex-auto"],
  "flex:initial": ["flex-initial"],
  "flex:none": ["flex-none"],
  "flex-grow:0": ["flex-grow-0"],
  "flex-grow:1": ["flex-grow"],
  "flex-shrink:0": ["flex-shrink-0"],
  "flex-shrink:1": ["flex-shrink"],

  // Grid
  "grid-template-columns:repeat(1,minmax(0,1fr))": ["grid-cols-1"],
  "grid-template-columns:repeat(2,minmax(0,1fr))": ["grid-cols-2"],
  "grid-template-columns:repeat(3,minmax(0,1fr))": ["grid-cols-3"],
  "grid-template-columns:repeat(4,minmax(0,1fr))": ["grid-cols-4"],
  "grid-template-rows:repeat(1,minmax(0,1fr))": ["grid-rows-1"],
  "grid-template-rows:repeat(2,minmax(0,1fr))": ["grid-rows-2"],
  "grid-template-rows:repeat(3,minmax(0,1fr))": ["grid-rows-3"],
  "gap:0.25rem": ["gap-1"],
  "gap:0.5rem": ["gap-2"],
  "gap:0.75rem": ["gap-3"],
  "gap:1rem": ["gap-4"],
  "column-gap:0.25rem": ["gap-x-1"],
  "column-gap:0.5rem": ["gap-x-2"],
  "row-gap:0.25rem": ["gap-y-1"],
  "row-gap:0.5rem": ["gap-y-2"],

  // Spacing
  "margin:0": ["m-0"],
  "margin:0.25rem": ["m-1"],
  "margin:0.5rem": ["m-2"],
  "margin:0.75rem": ["m-3"],
  "margin:1rem": ["m-4"],
  "margin:1.25rem": ["m-5"],
  "margin:1.5rem": ["m-6"],
  "margin:2rem": ["m-8"],
  "margin:2.5rem": ["m-10"],
  "margin:3rem": ["m-12"],
  "margin:4rem": ["m-16"],
  "margin-top:0": ["mt-0"],
  "margin-top:0.25rem": ["mt-1"],
  "margin-top:0.5rem": ["mt-2"],
  "margin-top:1rem": ["mt-4"],
  "margin-right:0": ["mr-0"],
  "margin-right:0.25rem": ["mr-1"],
  "margin-right:0.5rem": ["mr-2"],
  "margin-right:1rem": ["mr-4"],
  "margin-bottom:0": ["mb-0"],
  "margin-bottom:0.25rem": ["mb-1"],
  "margin-bottom:0.5rem": ["mb-2"],
  "margin-bottom:1rem": ["mb-4"],
  "margin-left:0": ["ml-0"],
  "margin-left:0.25rem": ["ml-1"],
  "margin-left:0.5rem": ["ml-2"],
  "margin-left:1rem": ["ml-4"],
  "margin-left:auto": ["ml-auto"],
  "margin-right:auto": ["mr-auto"],
  "margin:auto": ["mx-auto"],

  // Padding
  "padding:0": ["p-0"],
  "padding:0.25rem": ["p-1"],
  "padding:0.5rem": ["p-2"],
  "padding:0.75rem": ["p-3"],
  "padding:1rem": ["p-4"],
  "padding:1.25rem": ["p-5"],
  "padding:1.5rem": ["p-6"],
  "padding:2rem": ["p-8"],
  "padding-top:0": ["pt-0"],
  "padding-top:0.25rem": ["pt-1"],
  "padding-top:0.5rem": ["pt-2"],
  "padding-top:1rem": ["pt-4"],
  "padding-right:0": ["pr-0"],
  "padding-right:0.25rem": ["pr-1"],
  "padding-right:0.5rem": ["pr-2"],
  "padding-right:1rem": ["pr-4"],
  "padding-bottom:0": ["pb-0"],
  "padding-bottom:0.25rem": ["pb-1"],
  "padding-bottom:0.5rem": ["pb-2"],
  "padding-bottom:1rem": ["pb-4"],
  "padding-left:0": ["pl-0"],
  "padding-left:0.25rem": ["pl-1"],
  "padding-left:0.5rem": ["pl-2"],
  "padding-left:1rem": ["pl-4"],

  // Width & Height
  "width:100%": ["w-full"],
  "width:100vw": ["w-screen"],
  "width:auto": ["w-auto"],
  "width:50%": ["w-1/2"],
  "width:33.333333%": ["w-1/3"],
  "width:66.666667%": ["w-2/3"],
  "width:25%": ["w-1/4"],
  "width:75%": ["w-3/4"],
  "width:20%": ["w-1/5"],
  "width:40%": ["w-2/5"],
  "width:60%": ["w-3/5"],
  "width:80%": ["w-4/5"],
  "max-width:100%": ["max-w-full"],
  "max-width:28rem": ["max-w-md"],
  "max-width:32rem": ["max-w-lg"],
  "max-width:36rem": ["max-w-xl"],
  "max-width:42rem": ["max-w-2xl"],
  "max-width:48rem": ["max-w-3xl"],
  "max-width:56rem": ["max-w-4xl"],
  "max-width:64rem": ["max-w-5xl"],
  "max-width:72rem": ["max-w-6xl"],
  "max-width:80rem": ["max-w-7xl"],
  "min-width:0": ["min-w-0"],
  "min-width:100%": ["min-w-full"],
  "height:100%": ["h-full"],
  "height:100vh": ["h-screen"],
  "height:auto": ["h-auto"],
  "min-height:100%": ["min-h-full"],
  "min-height:100vh": ["min-h-screen"],

  // Typography
  "font-weight:normal": ["font-normal"],
  "font-weight:bold": ["font-bold"],
  "font-weight:100": ["font-thin"],
  "font-weight:200": ["font-extralight"],
  "font-weight:300": ["font-light"],
  "font-weight:400": ["font-normal"],
  "font-weight:500": ["font-medium"],
  "font-weight:600": ["font-semibold"],
  "font-weight:700": ["font-bold"],
  "font-weight:800": ["font-extrabold"],
  "font-weight:900": ["font-black"],
  "font-size:0.75rem": ["text-xs"],
  "font-size:0.875rem": ["text-sm"],
  "font-size:1rem": ["text-base"],
  "font-size:1.125rem": ["text-lg"],
  "font-size:1.25rem": ["text-xl"],
  "font-size:1.5rem": ["text-2xl"],
  "font-size:1.875rem": ["text-3xl"],
  "font-size:2.25rem": ["text-4xl"],
  "font-size:3rem": ["text-5xl"],
  "font-size:3.75rem": ["text-6xl"],
  "line-height:1": ["leading-none"],
  "line-height:1.25": ["leading-tight"],
  "line-height:1.375": ["leading-snug"],
  "line-height:1.5": ["leading-normal"],
  "line-height:1.625": ["leading-relaxed"],
  "line-height:2": ["leading-loose"],
  "text-align:left": ["text-left"],
  "text-align:center": ["text-center"],
  "text-align:right": ["text-right"],
  "text-align:justify": ["text-justify"],
  "text-decoration:underline": ["underline"],
  "text-decoration:line-through": ["line-through"],
  "text-decoration:none": ["no-underline"],
  "text-transform:uppercase": ["uppercase"],
  "text-transform:lowercase": ["lowercase"],
  "text-transform:capitalize": ["capitalize"],
  "text-transform:none": ["normal-case"],

  // Colors
  "background-color:transparent": ["bg-transparent"],
  "background-color:white": ["bg-white"],
  "background-color:black": ["bg-black"],
  "background-color:red": ["bg-red-500"],
  "background-color:blue": ["bg-blue-500"],
  "background-color:green": ["bg-green-500"],
  "background-color:yellow": ["bg-yellow-500"],
  "background-color:purple": ["bg-purple-500"],
  "background-color:pink": ["bg-pink-500"],
  "background-color:indigo": ["bg-indigo-500"],
  "background-color:gray": ["bg-gray-500"],
  "color:transparent": ["text-transparent"],
  "color:white": ["text-white"],
  "color:black": ["text-black"],
  "color:red": ["text-red-500"],
  "color:blue": ["text-blue-500"],
  "color:green": ["text-green-500"],
  "color:yellow": ["text-yellow-500"],
  "color:purple": ["text-purple-500"],
  "color:pink": ["text-pink-500"],
  "color:indigo": ["text-indigo-500"],
  "color:gray": ["text-gray-500"],

  // Borders
  "border-width:0": ["border-0"],
  "border-width:1px": ["border"],
  "border-width:2px": ["border-2"],
  "border-width:4px": ["border-4"],
  "border-width:8px": ["border-8"],
  "border-top-width:0": ["border-t-0"],
  "border-top-width:1px": ["border-t"],
  "border-top-width:2px": ["border-t-2"],
  "border-right-width:0": ["border-r-0"],
  "border-right-width:1px": ["border-r"],
  "border-right-width:2px": ["border-r-2"],
  "border-bottom-width:0": ["border-b-0"],
  "border-bottom-width:1px": ["border-b"],
  "border-bottom-width:2px": ["border-b-2"],
  "border-left-width:0": ["border-l-0"],
  "border-left-width:1px": ["border-l"],
  "border-left-width:2px": ["border-l-2"],
  "border-color:transparent": ["border-transparent"],
  "border-color:white": ["border-white"],
  "border-color:black": ["border-black"],
  "border-color:red": ["border-red-500"],
  "border-color:blue": ["border-blue-500"],
  "border-radius:0": ["rounded-none"],
  "border-radius:0.125rem": ["rounded-sm"],
  "border-radius:0.25rem": ["rounded"],
  "border-radius:0.375rem": ["rounded-md"],
  "border-radius:0.5rem": ["rounded-lg"],
  "border-radius:0.75rem": ["rounded-xl"],
  "border-radius:1rem": ["rounded-2xl"],
  "border-radius:1.5rem": ["rounded-3xl"],
  "border-radius:9999px": ["rounded-full"],

  // Effects
  "box-shadow:0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)": [
    "shadow-sm",
  ],
  "box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)": [
    "shadow",
  ],
  "box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)":
    ["shadow-md"],
  "box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)":
    ["shadow-lg"],
  "box-shadow:0 25px 50px -12px rgba(0,0,0,0.25)": ["shadow-xl"],
  "box-shadow:inset 0 2px 4px 0 rgba(0,0,0,0.06)": ["shadow-inner"],
  "box-shadow:none": ["shadow-none"],
  "opacity:0": ["opacity-0"],
  "opacity:0.25": ["opacity-25"],
  "opacity:0.5": ["opacity-50"],
  "opacity:0.75": ["opacity-75"],
  "opacity:1": ["opacity-100"],

  // Position
  "position:static": ["static"],
  "position:fixed": ["fixed"],
  "position:absolute": ["absolute"],
  "position:relative": ["relative"],
  "position:sticky": ["sticky"],
  "top:0": ["top-0"],
  "right:0": ["right-0"],
  "bottom:0": ["bottom-0"],
  "left:0": ["left-0"],
  "top:auto": ["top-auto"],
  "right:auto": ["right-auto"],
  "bottom:auto": ["bottom-auto"],
  "left:auto": ["left-auto"],
  "z-index:0": ["z-0"],
  "z-index:10": ["z-10"],
  "z-index:20": ["z-20"],
  "z-index:30": ["z-30"],
  "z-index:40": ["z-40"],
  "z-index:50": ["z-50"],

  // Overflow
  "overflow:auto": ["overflow-auto"],
  "overflow:hidden": ["overflow-hidden"],
  "overflow:visible": ["overflow-visible"],
  "overflow:scroll": ["overflow-scroll"],
  "overflow-x:auto": ["overflow-x-auto"],
  "overflow-x:hidden": ["overflow-x-hidden"],
  "overflow-y:auto": ["overflow-y-auto"],
  "overflow-y:hidden": ["overflow-y-hidden"],

  // Transitions
  "transition-property:all": ["transition-all"],
  "transition-property:none": ["transition-none"],
  "transition-duration:75ms": ["duration-75"],
  "transition-duration:100ms": ["duration-100"],
  "transition-duration:150ms": ["duration-150"],
  "transition-duration:200ms": ["duration-200"],
  "transition-duration:300ms": ["duration-300"],
  "transition-duration:500ms": ["duration-500"],
  "transition-duration:700ms": ["duration-700"],
  "transition-duration:1000ms": ["duration-1000"],
};

// Convert raw CSS string to an array of Tailwind classes
function convertCssToTailwind(css) {
  const classes = new Set();

  // Remove comments and extract CSS declarations
  const cleanedCss = css
    .replace(/\/\*.*?\*\//gs, "") // remove CSS comments
    .replace(/[^{]*\{([^}]*)\}/g, "$1") // extract inside blocks
    .replace(/\n/g, "") // remove newlines
    .trim();

  const decls = cleanedCss
    .split(/;+/)
    .map((str) => str.trim())
    .filter(Boolean);

  decls.forEach((decl) => {
    // Split by first colon to handle values that might contain colons (like box-shadow)
    const colonIndex = decl.indexOf(":");
    if (colonIndex === -1) return;

    const property = decl.substring(0, colonIndex).trim();
    const value = decl.substring(colonIndex + 1).trim();
    const key = `${property}:${value}`.toLowerCase();

    if (cssToTwMap[key]) {
      cssToTwMap[key].forEach((c) => classes.add(c));
    }
  });

  return Array.from(classes).join(" ");
}

const Tailwind = () => {
  const [copied, setCopied] = useState(false);
  const [cssInput, setCssInput] = useState("");
  const [convertedOutput, setConvertedOutput] = useState("");
  const [htmlOutput, setHtmlOutput] = useState("");
  const [convertTo, setConvertTo] = useState("tailwind");
  document.title = "Yassine Magri | My Tools";
  const handleConvert = () => {
    if (!cssInput.trim()) return;

    if (convertTo === "tailwind") {
      const twClasses = convertCssToTailwind(cssInput);
      setConvertedOutput(
        twClasses || "/* No matching Tailwind classes found */"
      );

      // Generate HTML output with the converted classes
      if (twClasses) {
        const selector = cssInput.match(/([^\s{]+)\s*\{/)?.[1] || ".class";
        const element = selector.startsWith(".") ? "div" : selector;
        setHtmlOutput(`<${element} class="${twClasses}"> </${element}>`);
      } else {
        setHtmlOutput("");
      }
    } else {
      // You can add a similar map for Bootstrap
      setConvertedOutput("/* Bootstrap conversion not implemented yet */");
      setHtmlOutput("");
    }
  };

  const handleCopy = () => {
    if (!convertedOutput) return;
    navigator.clipboard.writeText(htmlOutput || convertedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Add a new function to handle the example
  const handleExample = () => {
    setCssInput(".class {\n  background-color: blue;\n}");
    setTimeout(() => handleConvert(), 100);
  };

  return (
    <div className="rounded-lg border bg-gray-900 text-card-foreground shadow">
      <div className="p-6 space-y-6">
        <Textarea
          placeholder="/* Enter CSS declarations here, e.g. display: flex; */"
          className="min-h-32 font-mono text-sm"
          value={cssInput}
          onChange={(e) => setCssInput(e.target.value)}
        />

        <div className="flex gap-2">
          <Button
            onClick={handleConvert}
            className="bg-rose-300 hover:bg-rose-300 text-gray-900"
          >
            Convert <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            onClick={() => {
              setCssInput("h1 {\n  color: white;\n  text-align: center;\n}");
              setTimeout(() => handleConvert(), 100);
            }}
            className="text-sm"
          >
            Try Example: h1
          </Button>

          <Button variant="outline" onClick={handleExample} className="text-sm">
            Try Example: .class
          </Button>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="font-medium">Resulting Classes</label>
            {convertedOutput && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="h-8 gap-1"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" /> Copy
                  </>
                )}
              </Button>
            )}
          </div>
          <Textarea
            readOnly
            className="min-h-32 font-mono text-sm"
            value={convertedOutput}
          />
        </div>

        {htmlOutput && (
          <div>
            <div className="flex items-center justify-between">
              <label className="font-medium">HTML Element</label>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(htmlOutput);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="h-8 gap-1"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" /> Copy
                  </>
                )}
              </Button>
            </div>
            <div className="p-4 border rounded-md bg-slate-50 font-mono text-sm overflow-x-auto">
              {htmlOutput}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tailwind;
