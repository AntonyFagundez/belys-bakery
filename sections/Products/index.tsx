import { Box, Heading, Stack, Divider } from "@chakra-ui/react";
import React from "react";

import { CardProduct } from "../../components/CardProduct";
import { Product } from "../../Product/types";

interface IProductProps {
    data: Product[];
}

const Products = ({ data }: IProductProps) => {
    return (
        <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            id="productos"
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
                {data.map(({ category: _categ, image: _img, ...otherProps }, i) => (
                    <CardProduct key={`Product-${otherProps.id}-${i}`} {...otherProps} />
                ))}
            </Stack>
            <Divider display={["none", "block"]} />
        </Box>
    );
};

export default Products;
