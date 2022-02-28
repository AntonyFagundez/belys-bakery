import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RecoilRoot, useRecoilSnapshot } from "recoil";
import React from "react";

import Main from "../layout/main";

export const theme = extendTheme({
    colors: {
        primary: "#CCB568",
        secondary: "#2C3343",
    },
    fonts: {
        heading: `'DM Serif Text', serif`,
    },
});

function DebugObserver() {
    const snapshot = useRecoilSnapshot();

    React.useEffect(() => {
        console.debug("The following atoms were modified:");
        for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
            console.debug(node.key, snapshot.getLoadable(node));
        }
    }, [snapshot]);

    return null;
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <DebugObserver />
            <ChakraProvider theme={theme}>
                <Main>
                    <Component {...pageProps} />
                </Main>
            </ChakraProvider>
        </RecoilRoot>
    );
}
export default MyApp;
