import { Button, Center, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import styles from "./styles.module.css";
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
    const [clicked, setClicked] = React.useState<boolean>(true);

    const textRef = React.useRef<HTMLParagraphElement>(null);
    const handleAdd = () => {
        if (textRef.current) {
            textRef.current.className.replace(styles.substract, "");
        }

        setClicked((prev) => !prev);
        onAddClick();
    };
    const handleSub = () => {
        if (value !== 0) {
            if (textRef.current) {
                textRef.current.className.concat(` ${styles.substract}`);
            }
            setClicked((prev) => !prev);
        }
        onSubstractClick();
    };

    return (
        <>
            <Grid gap={1} templateColumns="32px minmax(32px,min-content) 32px" templateRows="32px">
                <Center>
                    <Button color="secondary" fontSize={"lg"} size={"xs"} onClick={handleSub}>
                        -
                    </Button>
                </Center>
                <Center borderRadius="md" className={styles.text} fontWeight="extrabold">
                    <SwitchTransition>
                        <CSSTransition
                            key={clicked.toString()}
                            addEndListener={(node, done) => {
                                node.addEventListener("transitionend", done, false);
                            }}
                            classNames={{
                                enter: styles.enter,
                                exit: styles.exit,
                                enterActive: styles["enter-active"],
                                exitActive: styles["exit-active"],
                            }}
                            in={clicked}
                        >
                            <Text ref={textRef} color="white" fontSize="md">
                                {value > 0 && value < 10 && !disablePadNumber
                                    ? value.toString().padStart(2, "0")
                                    : value}
                            </Text>
                        </CSSTransition>
                    </SwitchTransition>
                </Center>
                <Center>
                    <Button color="secondary" fontSize={"lg"} size={"xs"} onClick={handleAdd}>
                        +
                    </Button>
                </Center>
            </Grid>
        </>
    );
};

export default Counter;
