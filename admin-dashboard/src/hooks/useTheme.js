import { useEffect } from "react";

export default function useTheme() {
  // force dark mode only
  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
  }, []);

  return { theme: "dark" };
}