import { Box, Link, Stack, Image } from "@chakra-ui/react";
import React from "react";

import { useShoppingCart } from "../../atoms/shoppingCart";
import ShopButton from "../ShopButton";

interface IHeaderProps {
    btnRef?: React.Ref<HTMLButtonElement>;
    onOpen: () => void;
}

const Header = ({ btnRef, onOpen }: IHeaderProps) => {
    const { cart } = useShoppingCart();
    const totalCount = cart.reduce((acc, item) => acc + item.count, 0);

    return (
        <Box
            as="nav"
            boxShadow="0px 3px 28px var(--chakra-colors-blackAlpha-200)"
            display="flex"
            height={"12"}
            justifyContent="center"
            minWidth={"320px"}
            top={0}
            width={"100%"}
        >
            <Stack
                flexGrow={1}
                maxHeight={"10"}
                maxWidth="container.xl"
                paddingX={"10"}
                paddingY={2}
            >
                <Box display="flex">
                    <Box
                        display="flex"
                        flexGrow={{ base: 1, md: undefined }}
                        justifyContent={{ base: "center", md: "flex-start" }}
                    >
                        <Image alt="icon-navbar" maxHeight={"33px"} src="/icon-nav.png" />
                    </Box>
                    <Box alignItems="center" display={{ base: "none", md: "flex" }}>
                        <Link
                            color="secondary"
                            fontFamily={`'DM Serif Text', serif`}
                            href="#productos"
                            mx={"2"}
                        >
                            Productos
                        </Link>
                        <Link
                            color="secondary"
                            fontFamily={`'DM Serif Text', serif`}
                            href="#eventos"
                            mx={"2"}
                        >
                            Eventos
                        </Link>
                        <Link
                            color="secondary"
                            fontFamily={`'DM Serif Text', serif`}
                            href="#"
                            mx={"2"}
                        >
                            Contacto
                        </Link>
                        {totalCount > 0 && (
                            <ShopButton ref={btnRef} count={totalCount} onOpen={onOpen} />
                        )}
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default Header;
