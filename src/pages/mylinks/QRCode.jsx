import React, { useState } from "react";
import QrCode from "@/assets/imgs/qrcode.png";
const QRCode = ({url}) => {
  const [isLoading, setIsLoading] = useState(true);

  const QRCode = encodeURIComponent(
    `https://www.youtube.com/${url}?sub_confirmation=1`
  );
  function ToHex(hslString) {
    const regex =
      /hsl\(\s*(\d+)\s+([\d.]+)%\s+([\d.]+)%\s*(?:\/\s*([\d.]+))?\s*\)/;
    const match = hslString.match(regex);

    if (!match) return null;

    let [, h, s, l, a] = match;
    h = parseFloat(h);
    s = parseFloat(s) / 100;
    l = parseFloat(l) / 100;
    a = a !== undefined ? parseFloat(a) : 1;

    const k = (n) => (n + h / 30) % 12;
    const f = (n) =>
      Math.round(
        255 *
          (l -
            s *
              Math.min(l, 1 - l) *
              Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1))))
      );

    const r = f(0),
      g = f(8),
      b = f(4);
    const alpha = Math.round(a * 255);

    const toHex = (x) => x.toString(16).padStart(2, "0");

    return `#${toHex(r)}${toHex(g)}${toHex(b)}${
      alpha < 255 ? toHex(alpha) : ""
    }`;
  }
  const QRCColor = ToHex("hsl(33 25% 62% / 1)").replace("#", "");
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${QRCode}&size=200x200&color=${QRCColor}`;

  return (
    <div className="relative w-full max-w-xs mx-auto p-4">
      {isLoading && (
        <img
          src={QrCode}
          alt="QRCode QR Code"
          className="w-full h-auto "
          onLoad={() => setIsLoading(false)}
        />
      )}

      <img
        src={qrUrl}
        alt="QRCode QR Code"
        className="w-full h-auto "
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default QRCode;
