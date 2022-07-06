import { ref, onMounted } from "vue";

import { useState } from "./useState";

export const useDarkModeToggle = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isSystem, setSystem] = useState(true);
  const [isVisible, setVisible] = useState(false);

  const saveTheme = (nextTheme: Theme) => {
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    setTheme(nextTheme);
  };

  const switchTheme = () => {
    setSystem(false);

    if (theme.value === "light") {
      saveTheme("dark");
    } else if (theme.value === "dark") {
      saveTheme("light");
    }
  };

  const toggleSystem = () => {
    if (isSystem) {
      setSystem(false);
    } else {
      setSystem(true);
      setTheme(detectOSTheme());
      localStorage.setItem("theme", "system");
    }
  };

  onMounted(() => {
    (async () => {
      const { initialTheme, persistedIsSystem } = detectInitialTheme();
      saveTheme(initialTheme);
      setSystem(persistedIsSystem);
    })();

    const timerId = setTimeout(() => {
      setVisible(true);
    }, 0);

    return () => {
      clearTimeout(timerId);
    };
  });

  return { switchTheme };
};

const darkModeToggleRef = document.getElementById("dark-mode-toggle");

function detectOSTheme() {
  if (!window.matchMedia) {
    return "dark";
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    const osTheme = "dark";

    document.documentElement.setAttribute("data-theme", osTheme);

    return osTheme;
  } else {
    return "light";
  }
}

function detectInitialTheme() {
  let initialTheme: Theme = "light";

  const persistedTheme = localStorage.getItem("theme") ?? "system";
  const persistedIsSystem = persistedTheme === "system";

  if (persistedTheme === "dark") {
    initialTheme = "dark";
  } else if (persistedIsSystem) {
    initialTheme = detectOSTheme();
  }

  document.documentElement.setAttribute("data-theme", initialTheme);

  return { initialTheme, persistedIsSystem };
}

type Theme = "dark" | "light";
