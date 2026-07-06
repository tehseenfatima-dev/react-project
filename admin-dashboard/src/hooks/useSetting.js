import { useState, useEffect } from "react";

const defaultSettings = {
  darkMode: false,
  compact: false,
  emailNotif: true,
  pushNotif: false,
};

export default function useSetting() {
  // LOAD ON FIRST RENDER (LAZY INIT — BEST PRACTICE)
  const [settings, setSettings] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("settings"));
    return saved ? saved : defaultSettings;
  });

  // SAVE + APPLY THEME
  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));

    document.body.className = settings.darkMode ? "dark" : "light";
  }, [settings]);

  // TOGGLE FUNCTION
  const toggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return { settings, toggle };
}