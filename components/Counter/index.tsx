import { Button, FormLabel, Stack } from "@chakra-ui/react";
import React from "react";

interface CounterProps {
    onAddClick: VoidFunction;
    onSubstractClick: VoidFunction;
    value: number;
    disablePadNumber?: boolean;
}

export const Counter = ({
    onAddClick,
    onSubstractClick,
    value,
    disablePadNumber = true,
}: CounterProps) => {
    return (
        <>
            <Stack
                alignItems="center"
                display="grid"
                gridAutoFlow="column"
                gridTemplateColumns="28px 28px 28px"
                size="sm"
            >
                <Button
                    _active={{
                        bg: "red.400",
                        transform: "scale(0.98)",
                        borderColor: "var(--chakra-colors-red-600)",
                    }}
                    _focus={{
                        boxShadow:
                            "0 0 1px 3px var(--chakra-colors-red-400),0 2px 2px var(--chakra-colors-red-400)",
                    }}
                    borderRadius="50%"
                    color="white"
                    colorScheme="red"
                    flexDirection={"column"}
                    fontSize="25px"
                    fontWeight="bold"
                    height={7}
                    justifyContent="flex-end"
                    lineHeight="initial"
                    minWidth={7}
                    paddingX="0px"
                    zIndex={1}
                    onClick={onSubstractClick}
                >
                    -
                </Button>
                <FormLabel
                    alignItems={"center"}
                    bg="#fafafa"
                    boxShadow="0px 0px 0px 2px rgb(0 0 0 / 25%)"
                    color="#757575"
                    display="flex"
                    height="20px"
                    justifyContent={"center"}
                    marginLeft="-12px !important"
                    marginTop="0px !important"
                    pointerEvents="none"
                    textAlign="center"
                    userSelect="none"
                    width="50px"
                    zIndex={0}
                >
                    {" "}
                    {value > 0 && value < 10 && !disablePadNumber
                        ? value.toString().padStart(2, "0")
                        : value}
                </FormLabel>
                <Button
                    _active={{
                        bg: "green.400",
                        transform: "scale(0.98)",
                        borderColor: "var(--chakra-colors-green-600)",
                    }}
                    _focus={{
                        boxShadow:
                            "0 0 1px 3px var(--chakra-colors-green-400),0 2px 2px var(--chakra-colors-green-400)",
                    }}
                    _hover={{
                        bg: "#85E264",
                    }}
                    alignItems="flex-start"
                    bg="#70d84a"
                    borderRadius="50%"
                    color="white"
                    fontSize="20px"
                    fontWeight="bold"
                    height={7}
                    marginTop="0 !important"
                    minWidth={7}
                    paddingX="0"
                    zIndex={1}
                    onClick={onAddClick}
                >
                    +
                </Button>
            </Stack>
        </>
    );
};
