import { Box, Link, Stack, Image, IconButton } from "@chakra-ui/react";
import React from "react";
import type { FocusableElement } from "@chakra-ui/utils";
import { HiShoppingCart } from "react-icons/hi";

import { useShoppingCart } from "../../atoms/shoppingCart";

interface IHeaderProps {
    btnRef?: React.RefObject<FocusableElement>;
    onOpen: () => void;
}

const Header = ({ btnRef, onOpen }: IHeaderProps) => {
    const { cart } = useShoppingCart();

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
                            href="#"
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
                        {cart.length > 0 && (
                            <IconButton
                                ref={btnRef as React.LegacyRef<HTMLButtonElement> | undefined}
                                _before={{
                                    content: `"${cart.length}"`,
                                    display: "block",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    lineHeight: "1",
                                    position: "absolute",
                                    left: "0",
                                    bottom: "0",
                                    transform: "translateY(15%)",
                                    backgroundColor: "var(--chakra-colors-secondary)",
                                    color: "white",
                                    padding: "0.35em 0.5em",
                                    borderRadius: "50%",
                                }}
                                aria-label="shopping-cart-nav"
                                height={"35px"}
                                icon={<HiShoppingCart size={20} />}
                                marginLeft={"30px"}
                                onClick={onOpen}
                            />
                        )}
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default Header;
