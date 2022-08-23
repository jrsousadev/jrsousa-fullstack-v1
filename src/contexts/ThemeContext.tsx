import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ThemeContextProviderProps {
  children: ReactNode;
}

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config });

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
