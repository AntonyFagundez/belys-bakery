import { Box, Link, Image, Stack, Heading, Divider } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

// import api from "../Product/api";
import { Product } from "../Product/types";
import data from "../data";
import { CardProduct } from "../components/CardProduct";
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
                background={{
                    base: "none",
                    md: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(178,161,105,1) 32%)",
                }}
                display="flex"
                height={{ base: "200px", sm: "400px", md: "500px" }}
                justifyContent={{ base: "center", md: "flex-end" }}
                maxHeight="500px"
            >
                <Image alt="image home" display="flex" minWidth="320px" src="/home.jpeg" />
            </Box>

            <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                justifyContent={{ base: "center" }}
                minHeight="100px"
            >
                <Heading color="secondary" fontWeight="normal" id="productos" mb="2" mt="10">
                    Productos
                </Heading>
                <Stack
                    display="grid"
                    gridGap={["", "10"]}
                    gridTemplateColumns={{
                        base: "repeat(1, 320px)",
                        md: "repeat(2, 320px)",
                        lg: "repeat(3, 320px)",
                    }}
                    marginBottom="10"
                    maxWidth="1200px"
                >
                    {products &&
                        products.map(({ category: _categ, image, ...otherProps }, i) => (
                            <CardProduct
                                key={`Product-${otherProps.id}-${i}`}
                                image={{
                                    src: "https://dummyimage.com/135X135/969696/ffffff.png",
                                    alt: otherProps.title,
                                }}
                                {...otherProps}
                            />
                        ))}
                </Stack>
                <Divider display={["none", "block"]} />
            </Box>

            {/* <main>{JSON.stringify(products)}</main> */}
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    // const products = await api.list();
    return {
        props: {
            products: data,
        },
        revalidate: 86400,
    };
};

export default IndexRoute;
