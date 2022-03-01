import { Badge, Box, Image } from "@chakra-ui/react";
import React from "react";

interface Event {
    title: string;
    image?: string;
    description: string;
    date?: string;
}

const CardEvent = ({
    title,
    description,
    image = "https://dummyimage.com/320X135/969696/ffffff.png",
    date = "06/05/2022",
}: Event) => {
    return (
        <Box borderRadius="lg" borderWidth="1px" maxW="sm" overflow="hidden">
            <Image alt={title} src={image} />

            <Box p="6">
                <Box alignItems="baseline" display="flex">
                    <Badge borderRadius="full" colorScheme="teal" px="2">
                        Nuevo
                    </Badge>
                    <Box
                        color="gray.500"
                        fontSize="xs"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        ml="2"
                        textTransform="uppercase"
                    >
                        {date}
                    </Box>
                </Box>

                <Box isTruncated as="h4" fontWeight="semibold" lineHeight="tight" mt="1">
                    {description}
                </Box>
            </Box>
        </Box>
    );
};

export default CardEvent;
