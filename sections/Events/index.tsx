import { Box, Heading, Stack, Divider } from "@chakra-ui/react";
import React from "react";

import CardEvent from "../../components/CardEvent";
import { Product } from "../../Product/types";

interface IEventsProps {
    data: Product[];
}

const Events = ({ data }: IEventsProps) => {
    if (data.length === 0) {
        return null;
    }

    return (
        <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            id="eventos"
            justifyContent={{ base: "center" }}
            minHeight="100px"
        >
            <Heading color="secondary" fontWeight="normal" id="productos" mb="2" mt="10">
                Eventos
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
                {data.map(({ category: _categ, image: _image, ...otherProps }, i) => (
                    <CardEvent key={`Event-${otherProps.id}-${i}`} {...otherProps} />
                ))}
            </Stack>
            <Divider display={["none", "block"]} />
        </Box>
    );
};

export default Events;
