import {
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
} from "@chakra-ui/react";
import React from "react";
import type { FocusableElement } from "@chakra-ui/utils";

import ShoppingCart from "../ShoppingCart";

interface ISidebarProps {
    btnRef?: React.RefObject<FocusableElement>;
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = ({ btnRef, isOpen, onClose }: ISidebarProps) => {
    return (
        <>
            <Drawer finalFocusRef={btnRef} isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Finalizar pedido</DrawerHeader>

                    <DrawerBody>
                        <ShoppingCart />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button mr={3} variant="outline" onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme="blue">Hacer pedido</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Sidebar;
