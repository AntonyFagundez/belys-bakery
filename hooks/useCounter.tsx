import React from "react";

const useCounter = (initValue: number = 0) => {
    const [value, setValue] = React.useState(initValue);

    const substract = React.useCallback(() => {
        setValue((prevValue) => {
            if (prevValue > 0) {
                return prevValue - 1;
            }

            return prevValue;
        });
    }, []);

    const add = React.useCallback(() => {
        setValue((prevValue) => prevValue + 1);
    }, []);

    return {
        add,
        substract,
        value,
    };
};

export default useCounter;
