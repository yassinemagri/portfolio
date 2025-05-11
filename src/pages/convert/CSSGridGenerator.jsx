import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Copy } from "lucide-react";

export default function CSSGridGenerator() {
  const [columns, setColumns] = useState(5);
  const [rows, setRows] = useState(5);
  const [columnGap, setColumnGap] = useState(0);
  const [rowGap, setRowGap] = useState(0);
  const [generatedCSS, setGeneratedCSS] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    generateCSS();
  }, [columns, rows, columnGap, rowGap]);

  const generateCSS = () => {
    const css = `.grid-container {
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  column-gap: ${columnGap}px;
  row-gap: ${rowGap}px;
  width: 100%;
  height: 100%;
}`;
    setGeneratedCSS(css);
  };

  const resetGrid = () => {
    setColumns(5);
    setRows(5);
    setColumnGap(0);
    setRowGap(0);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCSS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate grid cells for preview
  const renderGridCells = () => {
    const cells = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        cells.push(
          <div
            key={`cell-${r}-${c}`}
            className="bg-gray-800 border border-teal-500/30"
          ></div>
        );
      }
    }
    return cells;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white p-6">
      <header className="flex justify-center items-center mb-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="text-teal-500 border border-teal-500 p-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold">CSS Grid Generator</h1>
          </div>
          <p className="text-yellow-300 text-sm mt-1">
            built with <span className="text-white">☁️</span> by sarah_edo
          </p>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="relative border-2 border-teal-500 rounded p-1 h-96">
            {/* Column indicators */}
            <div className="absolute top-0 left-0 w-full flex">
              {Array.from({ length: columns }).map((_, i) => (
                <div key={`col-${i}`} className="flex-1 flex justify-center -mt-8">
                  <span className="bg-gray-800 border border-gray-700 text-xs px-2 py-1 rounded">
                    1fr
                  </span>
                </div>
              ))}
            </div>

            {/* Row indicators */}
            <div className="absolute top-0 left-0 h-full flex flex-col">
              {Array.from({ length: rows }).map((_, i) => (
                <div key={`row-${i}`} className="flex-1 flex items-center -ml-8">
                  <span className="bg-gray-800 border border-gray-700 text-xs px-2 py-1 rounded">
                    1fr
                  </span>
                </div>
              ))}
            </div>

            {/* Grid preview */}
            <div
              className="w-full h-full"
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                columnGap: `${columnGap}px`,
                rowGap: `${rowGap}px`,
              }}
            >
              {renderGridCells()}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6 w-full lg:w-72">
          <div className="space-y-4">
            <div>
              <Label htmlFor="columns" className="text-sm mb-1 block">
                Columns
              </Label>
              <Input
                id="columns"
                type="number"
                min="1"
                max="12"
                value={columns}
                onChange={(e) => setColumns(Math.max(1, parseInt(e.target.value) || 1))}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div>
              <Label htmlFor="rows" className="text-sm mb-1 block">
                Rows
              </Label>
              <Input
                id="rows"
                type="number"
                min="1"
                max="12"
                value={rows}
                onChange={(e) => setRows(Math.max(1, parseInt(e.target.value) || 1))}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div>
              <Label htmlFor="columnGap" className="text-sm mb-1 block">
                Column Gap (in px)
              </Label>
              <Input
                id="columnGap"
                type="number"
                min="0"
                value={columnGap}
                onChange={(e) => setColumnGap(Math.max(0, parseInt(e.target.value) || 0))}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div>
              <Label htmlFor="rowGap" className="text-sm mb-1 block">
                Row Gap (in px)
              </Label>
              <Input
                id="rowGap"
                type="number"
                min="0"
                value={rowGap}
                onChange={(e) => setRowGap(Math.max(0, parseInt(e.target.value) || 0))}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </div>

          <Button 
            onClick={copyToClipboard} 
            className="bg-teal-600 hover:bg-teal-700 text-white border-none w-full"
          >
            {copied ? "Copied!" : "Copy CSS code"}
          </Button>

          <Button 
            onClick={resetGrid} 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            Reset grid
          </Button>

          <div className="mt-8">
            <h3 className="text-gray-400 italic mb-4">What does this project do?</h3>
            <p className="text-sm text-gray-400">
              This tool helps you visually create and customize CSS grid layouts. 
              Adjust the rows, columns, and gaps to generate the corresponding CSS code.
            </p>
          </div>
        </div>
      </div>

      <Card className="mt-8 bg-gray-800 border-gray-700 p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium">Generated CSS</h3>
          <Button 
            size="sm" 
            variant="ghost" 
            className="h-8 w-8 p-0 text-gray-400 hover:text-white"
            onClick={copyToClipboard}
          >
            <Copy size={16} />
          </Button>
        </div>
        <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
          {generatedCSS}
        </pre>
      </Card>
    </div>
  );
}