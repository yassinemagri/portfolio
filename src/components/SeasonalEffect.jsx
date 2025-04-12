"use client"

import { useEffect, useState } from "react"

export default function SeasonalEffect() {
  const [season, setSeason] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Determine current season based on month in Northern Hemisphere
    const determineCurrentSeason = () => {
      const now = new Date()
      const month = now.getMonth() // 0-11 (Jan-Dec)

      // Simple season determination
      if (month >= 2 && month <= 4) return "spring" // Mar-May
      if (month >= 5 && month <= 7) return "summer" // Jun-Aug
      if (month >= 8 && month <= 10) return "autumn" // Sep-Nov
      return "winter" // Dec-Feb
    }

    setSeason(determineCurrentSeason())
  }, [])

  // Don't render anything on the server to avoid hydration mismatch
  if (!mounted) return null

  // Return different seasonal effects based on the current season
  switch (season) {
    case "summer":
      return <SummerEffect />
    case "autumn":
      return <AutumnEffect />
    case "winter":
      return <WinterEffect />
    case "spring":
      return <SpringEffect />
    default:
      return null
  }
}

// Summer effect - sun rays
function SummerEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-500 rounded-full opacity-70 blur-md animate-pulse"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-300 rounded-full opacity-20 blur-xl"></div>
      {/* Sun rays */}
      <div className="absolute top-10 right-10 w-96 h-96 opacity-30">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 h-48 w-1 bg-yellow-300 origin-bottom"
            style={{
              transform: `rotate(${i * 30}deg) translateX(-50%)`,
              animation: `pulse 3s infinite ${i * 0.25}s`,
            }}
          ></div>
        ))}
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}

// Autumn effect - falling leaves
function AutumnEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
      {/* Falling leaves */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-sm opacity-70"
          style={{
            top: `-${Math.random() * 10}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: ["#e67e22", "#d35400", "#f39c12", "#c0392b"][Math.floor(Math.random() * 4)],
            animation: `fall ${5 + Math.random() * 10}s linear infinite ${Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        ></div>
      ))}
      <style>{`
        @keyframes fall {
          0% { 
            transform: translateY(-10px) rotate(0deg); 
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          100% { 
            transform: translateY(100vh) rotate(360deg); 
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

// Winter effect - snowfall
function WinterEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
      {/* Snowflakes */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            top: `-${Math.random() * 10}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            animation: `snowfall ${8 + Math.random() * 12}s linear infinite ${Math.random() * 5}s`,
          }}
        ></div>
      ))}
      <style>{`
        @keyframes snowfall {
          0% { 
            transform: translateY(-10px) translateX(0); 
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          100% { 
            transform: translateY(100vh) translateX(${Math.random() > 0.5 ? "+" : "-"}${Math.random() * 100}px); 
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

// Spring effect - flower petals
function SpringEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent"></div>
      {/* Flower petals */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-70"
          style={{
            width: `${Math.random() * 8 + 5}px`,
            height: `${Math.random() * 8 + 5}px`,
            borderRadius: "50% 0 50% 0",
            top: `-${Math.random() * 10}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: ["#ff9ff3", "#f368e0", "#feca57", "#ff6b6b"][Math.floor(Math.random() * 4)],
            animation: `flutter ${10 + Math.random() * 15}s linear infinite ${Math.random() * 5}s`,
          }}
        ></div>
      ))}
      <style>{`
        @keyframes flutter {
          0% { 
            transform: translateY(-10px) rotate(0deg); 
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          100% { 
            transform: translateY(100vh) rotate(720deg) translateX(${Math.random() * 200 - 100}px); 
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
