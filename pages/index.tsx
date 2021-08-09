import { Box, Link, Image, Stack, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

import api from "../Product/api";
import { Product } from "../Product/types";

interface Props {
    products: Product[];
}

const IndexRoute: React.FC<Props> = ({ products }) => {
    return (
        <div>
            <Head>
                <title>Bely&apos;s Bakery | Home</title>
            </Head>

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
                            <Image alt="icon-navbar" src="/icon-nav.png" />
                        </Box>
                        <Box alignItems="center" display={{ base: "none", md: "flex" }}>
                            <Link
                                color="secondary"
                                fontFamily={`'DM Serif Text', serif`}
                                href="#"
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
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Box
                background={{
                    base: "none",
                    md: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(178,161,105,1) 32%)",
                }}
                display="flex"
                height={{ base: "200px", sm: "400px", md: "500px" }}
                justifyContent={{ base: "center", md: "flex-end" }}
                maxHeight="500px"
            >
                <Box alignItems="center" display={{ base: "none", md: "flex" }}>
                    {/* <Heading color="white">Siempre contigo</Heading> */}
                </Box>

                <Image alt="image home" display="flex" minWidth="320px" src="/home.jpeg" />
            </Box>

            <Box
                alignItems="center"
                display="flex"
                justifyContent={{ base: "center" }}
                minHeight="100px"
            >
                <Heading color="secondary" fontWeight="normal">
                    Productos
                </Heading>
            </Box>

            {/* <main>{JSON.stringify(products)}</main> */}
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const products = await api.list();

    return {
        props: {
            products,
        },
        revalidate: 86400,
    };
};

export default IndexRoute;
