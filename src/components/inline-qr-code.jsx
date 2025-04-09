import { useEffect, useRef, useState } from "react"
import QRCode from "qrcode"
import { QrCode } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


export function InlineQRCode({ url, size = 100, className = "" }) {
  const [isOpen, setIsOpen] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current && isOpen) {
      QRCode.toCanvas(
        canvasRef.current,
        url,
        {
          width: size,
          margin: 1,
          color: {
            dark: "#000000",
            light: "#ffffff",
          },
        },
        (error) => {
          if (error) console.error("Error generating QR code:", error)
        },
      )
    }
  }, [url, size, isOpen])

  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen}>
        <TooltipTrigger asChild>
          <button className="ml-2 p-1 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-colors duration-300">
            <QrCode className="h-4 w-4 text-rose-500 dark:text-rose-400" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-white p-2 border border-gray-200 shadow-lg">
          <canvas ref={canvasRef} className={className} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
