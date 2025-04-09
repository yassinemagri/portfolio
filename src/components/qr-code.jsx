import { useEffect, useRef } from "react"
import QRCode from "qrcode"

export function QRCodeGenerator({ url, size = 128, className = "" }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
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
  }, [url, size])

  return <canvas ref={canvasRef} className={className} />
}
