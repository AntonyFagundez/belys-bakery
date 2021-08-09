import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// import "@fontsource/noto-serif";

export const theme = extendTheme({
    colors: {
        primary: "#CCB568",
        secondary: "#2C3343",
    },
    fonts: {
        heading: `'DM Serif Text', serif`,
        // link: `'DM Serif Text', serif`,
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
export default MyApp;
