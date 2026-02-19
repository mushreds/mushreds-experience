"use client";

import { useState, useEffect } from "react";

export const useIntroState = () => {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);

  useEffect(() => {
    // Verifica se já existe o registro no localStorage
    const hasSeenIntro = localStorage.getItem("mushreds_intro_seen");
    
    if (hasSeenIntro) {
      setShowIntro(false);
    } else {
      setShowIntro(true);
    }
  }, []);

  const completeIntro = () => {
    localStorage.setItem("mushreds_intro_seen", "true");
    setShowIntro(false);
  };

  return { showIntro, completeIntro };
};
