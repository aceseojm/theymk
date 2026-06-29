"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Lang = "ko" | "en";
const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "ko",
  toggle: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  useEffect(() => {
    const saved = localStorage.getItem("ymk-lang") as Lang;
    if (saved === "en" || saved === "ko") setLang(saved);
  }, []);

  const toggle = () =>
    setLang((prev) => {
      const next = prev === "ko" ? "en" : "ko";
      localStorage.setItem("ymk-lang", next);
      return next;
    });

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
