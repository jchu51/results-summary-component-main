import React, { ReactNode } from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

export interface ThemeProviderProps {
  theme: DefaultTheme;
  children: ReactNode;
}

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export const theme = {
  fontFamily: "Hanken Grotesk",
  mediaQueries: {
    desktop: '@media (min-width: 1440px)',
    mobile: '@media (max-width: 375px)'
  },
  colors: {
    primary: {
      lightRed: "hsl(0, 100%, 67%)",
      orangeyYellow: "hsl(39, 100%, 56%)",
      greenTeal: "hsl(166, 100%, 37%)",
      cobaltBlue: "hsl(234, 85%, 45%)",
      black: "black",
    },
    lightPrimary: {
      lightRed: "hsl(0, 100%, 67%, 0.15)",
      orangeyYellow: "hsl(39, 100%, 56%, 0.15)",
      greenTeal: "hsl(166, 100%, 37%, 0.15)",
      cobaltBlue: "hsl(234, 85%, 45%, 0.15)",
      black: "black",
    },
    gradients: {
      lightSlateBlue: "hsl(252, 100%, 67%)",
      lightRoyalBlue: "hsl(241, 81%, 54%)",
      violetBlue: "hsla(256, 72%, 46%, 1)",
      persianBlue: "hsla(241, 72%, 46%, 0)",
    },
    neutral: {
      white: "hsl(0, 0%, 100%)",
      paleBlue: "hsl(221, 100%, 96%)",
      lightLavender: "hsl(241, 100%, 89%)",
      darkGrayBlue: "hsl(224, 30%, 27%)",
    },
  },
};

export default ThemeProvider;
