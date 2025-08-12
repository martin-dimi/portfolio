"use client";

import { useEffect } from "react";

export function ConsoleLogs() {
  useEffect(() => {
    console.log("Welcome to my website!");
    console.log("⭐ Fun fact: Try the Konami Code (↑↑↓↓←→←→BA)");
  }, []);

  return null;
}
