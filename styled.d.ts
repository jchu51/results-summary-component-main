// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    mediaQueries: {
      desktop: string;
      mobile: string;
    };
    colors: {
      primary: {
        lightRed: string;
        orangeyYellow: string;
        greenTeal: string;
        cobaltBlue: string;
        black: string;
      };
      lightPrimary: {
        lightRed: string;
        orangeyYellow: string;
        greenTeal: string;
        cobaltBlue: string;
        black: string;
      };
      gradients: {
        lightSlateBlue: string;
        lightRoyalBlue: string;
        violetBlue: string;
        persianBlue: string;
      };
      neutral: {
        white: string;
        paleBlue: string;
        lightLavender: string;
        darkGrayBlue: string;
      };
    };
  }
}
