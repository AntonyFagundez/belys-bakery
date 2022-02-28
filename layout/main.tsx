import { useDisclosure } from "@chakra-ui/react";
import React from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Main: React.FC = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(null);

    return (
        <>
            <Header btnRef={btnRef} onOpen={onOpen} />
            <Sidebar btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
            {children}
        </>
    );
};

export default Main;
