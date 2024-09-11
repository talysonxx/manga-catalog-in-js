import { colors } from "./theme";

export const setCSSVariables = () => {
  const root = document.documentElement;
  Object.keys(colors).forEach((key) => {
    root.style.setProperty(`--${key}`, colors[key]);
  });
};