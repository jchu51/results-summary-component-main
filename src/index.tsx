import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/app";
import ThemeProvider, { theme } from "./context/theme";
import GlobalStyle from "./global-style";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
