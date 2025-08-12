"use client";

import { cn } from "@/common/utils";
import { useEffect, useState } from "react";

export function KonamiCheatCode() {
  const [konamiActivated, setKonamiActivated] = useState(false);

  useEffect(() => {
    // Konami Code implementation
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "KeyB",
      "KeyA",
    ];
    let konamiIndex = 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setKonamiActivated(true);
          console.log("🎮 KONAMI CODE ACTIVATED! 30 lives granted!");
          setTimeout(() => setKonamiActivated(false), 3000);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!konamiActivated) return null;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 pointer-events-none transition-all duration-500 animate-pulse bg-accent/5"
        )}
      />
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        <div className="text-6xl font-mono text-accent animate-bounce">
          🎮 30 LIVES! 🎮
        </div>
      </div>
    </>
  );
}
