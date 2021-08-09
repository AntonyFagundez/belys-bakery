import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Counter } from "../components/Counter";

export default {
    title: "components/Counter",
    component: Counter,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = ({ value = 0 }) => {
    const [state, setState] = React.useState(value);

    const handleAdd = () => setState(state + 1);
    const handleRest = () => setState(state - 1);

    return <Counter add={handleAdd} rest={handleRest} value={state} />;
};

export const Primary = Template.bind({});
Primary.args = {
    value: 3,
};
