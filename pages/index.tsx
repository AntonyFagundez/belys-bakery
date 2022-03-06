import { Box, Image } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

// import api from "../Product/api";
import { Product } from "../Product/types";
import data from "../data";
import ProductsSection from "../sections/Products";
import EventsSection from "../sections/Events";
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
                as="section"
                background={{
                    base: "none",
                    md: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(178,161,105,1) 32%)",
                }}
                display="flex"
                height={{ base: "200px", sm: "400px", md: "500px" }}
                justifyContent={{ base: "center", md: "flex-end" }}
                maxHeight="500px"
                objectFit="cover"
            >
                <Image alt="banner-home" display="flex" minWidth="320px" src="/home.jpeg" />
            </Box>

            <ProductsSection data={products} />
            <EventsSection data={products} />
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
