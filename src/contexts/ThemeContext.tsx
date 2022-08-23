import { ReactNode } from "react";
import { ChakraProvider, ThemeConfig } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

interface IThemeContext {
  children: ReactNode;
}

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config });

export const ThemeContextProvider = ({ children }: IThemeContext) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
