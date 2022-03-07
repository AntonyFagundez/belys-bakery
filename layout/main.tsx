import { Box, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import React from "react";

import Header from "../components/Header";
import ShopButton from "../components/ShopButton";
import Sidebar from "../components/Sidebar";

const Main: React.FC = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(null);
    const [isMobile] = useMediaQuery("(max-width: 600px)");

    return (
        <>
            <Header btnRef={btnRef} onOpen={onOpen} />
            <Sidebar btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
            {children}
            {isMobile && !isOpen && (
                <Box bottom={"1em"} left={"auto"} position="fixed" right={"1em"}>
                    <ShopButton ref={btnRef} count={0} onOpen={onOpen} />
                </Box>
            )}
        </>
    );
};

export default Main;
