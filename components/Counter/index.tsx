import { Button, Center, Grid, SlideFade, Text } from "@chakra-ui/react";
import React from "react";

interface CounterProps {
    onAddClick: VoidFunction;
    onSubstractClick: VoidFunction;
    value: number;
    disablePadNumber?: boolean;
}

const Counter = ({
    onAddClick,
    onSubstractClick,
    value,
    disablePadNumber = true,
}: CounterProps) => {
    return (
        <>
            <Grid gap={1} templateColumns="32px minmax(32px,min-content) 32px" templateRows="32px">
                <Center>
                    <Button
                        color="secondary"
                        fontSize={"lg"}
                        size={"xs"}
                        onClick={onSubstractClick}
                    >
                        -
                    </Button>
                </Center>
                <Center bgColor="secondary" borderRadius="md" fontWeight="extrabold">
                    <SlideFade in={true} offsetY={-40}>
                        <Text color="white" fontSize="md">
                            {value > 0 && value < 10 && !disablePadNumber
                                ? value.toString().padStart(2, "0")
                                : value}
                        </Text>
                    </SlideFade>
                </Center>
                <Center>
                    <Button color="secondary" fontSize={"lg"} size={"xs"} onClick={onAddClick}>
                        +
                    </Button>
                </Center>
            </Grid>
        </>
    );
};

export default Counter;
