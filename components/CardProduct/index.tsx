import React from "react";
import { Box, Image, ImageProps, Text, Stack } from "@chakra-ui/react";

import { Counter } from "../Counter";

interface CardProductProps {
    id: string;
    image: ImageProps;
    title: string;
    price: number;
    description?: string;
}

export const CardProduct = ({
    image = { src: "https://dummyimage.com/135X135/969696/ffffff.png", alt: "image-photo" },
    title,
    price,
    description,
}: CardProductProps) => {
    return (
        <Box
            _after={{
                borderTopRightRadius: "25px",
                borderBottomRightRadius: "25px",
                boxShadow: "1px 1px 5px 5px rgba(0,0,0,0.15)",
                content: "''",
                display: "inherit",
                position: "absolute",
                height: "125px",
                width: "225px",
                zIndex: "-2",
                bgColor: "transparent",
                marginLeft: "118px",
                marginTop: "10px",
            }}
            _before={{
                borderRadius: "50%",
                boxShadow: "1px 1px 5px 5px rgba(0,0,0,0.15)",
                content: "''",
                display: "inherit",
                position: "absolute",
                height: "145px",
                width: "145px",
                zIndex: "-1",
                bgColor: "transparent",
            }}
            display="grid"
            gridTemplateColumns="145px auto"
            height="145px"
            width="335px"
        >
            <Box bg="white" border="white solid 5px" borderRadius="50%" zIndex={1}>
                <Image {...image} alt={image.alt ?? ""} borderRadius="50%" />
            </Box>
            <Box
                alignSelf="center"
                bg="white"
                borderBottomRightRadius="25px"
                borderTopRightRadius="25px"
                color="#2C3343"
                height="125px"
                marginLeft="-35px"
                padding="10px 10px 0px 40px"
            >
                <Stack
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    maxWidth="175px"
                >
                    <Text fontSize="2xl">{title}</Text>
                    <Text
                        color="gray.500"
                        fontSize="xl"
                        fontWeight="bold"
                        marginTop="0px !important"
                    >
                        ${price}
                    </Text>
                </Stack>
                <Text fontSize="xs" maxWidth="175px" mb="8px" minHeight="35px">
                    {description}
                </Text>
                <Stack display="flex" flexDirection="row" justifyContent="center">
                    <Counter value={0} onAddClick={() => {}} onSubstractClick={() => {}} />
                </Stack>
            </Box>
        </Box>
    );
};
