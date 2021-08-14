import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Counter } from "../components/Counter";
import useCounter from "../hooks/useCounter";

export default {
    title: "components/Counter",
    component: Counter,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = ({ value: initValue }) => {
    const { value, add, substract } = useCounter(initValue);

    return <Counter value={value} onAddClick={add} onSubstractClick={substract} />;
};

export const Primary = Template.bind({});
Primary.args = {
    value: 3,
};
