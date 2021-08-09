import { Box, Input, InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";
import React from "react";

interface CounterProps {
    add: VoidFunction;
    rest: VoidFunction;
    value: number;
}

export const Counter = ({ add, rest, value }: CounterProps) => {
    return (
        <>
            <Box display="grid" gridTemplateColumns="30px auto 30px" maxWidth="87px">
                <Box as="button" bg="red.400" borderRadius="50%" boxSize="30px" onClick={rest}>
                    -
                </Box>
                <Box color="secondary">
                    <Input
                        borderStyle="solid"
                        height="inherit"
                        minWidth="50px"
                        placeholder="Agrega"
                        type="number"
                        value={value}
                    />
                </Box>
                <Box as="button" bg="green.400" borderRadius="50%" boxSize="30px" onClick={add}>
                    +
                </Box>
            </Box>

            <InputGroup alignItems="center" size="sm">
                <InputLeftAddon
                    as="button"
                    bg="red.400"
                    borderBottomRightRadius="50%"
                    borderColor="red.400"
                    borderInlineEndColor="red.400"
                    borderRadius="50%"
                    borderTopRightRadius="50%"
                    // borderWidth="7px"
                    boxSizing="content-box"
                    color="white"
                    fontSize="30px"
                    fontWeight="bold"
                    justifyContent="center"
                    mr="-8px"
                    paddingInline="6px"
                    zIndex={2}
                    onClick={rest}
                >
                    -
                </InputLeftAddon>
                <Input height="25px" value={value} width="50px" zIndex={0} />
                <InputRightAddon
                    as="button"
                    bg="green.400"
                    borderBottomLeftRadius="50%"
                    borderColor="green.400"
                    borderInlineStartColor="green.400"
                    borderRadius="50%"
                    borderTopLeftRadius="50%"
                    // borderWidth="7px"
                    boxSizing="content-box"
                    color="white"
                    fontSize="30px"
                    fontWeight="bold"
                    ml="-8px"
                    paddingX="6px"
                    zIndex={1}
                    onClick={add}
                >
                    +
                </InputRightAddon>
            </InputGroup>
        </>
    );
};
