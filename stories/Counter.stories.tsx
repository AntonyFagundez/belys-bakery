import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Counter from "../components/Counter";

export default {
    title: "components/Counter",
    component: Counter,
    argTypes: {
        value: { type: "number" },
        onAddClick: { type: "function" },
        onSubstractClick: { type: "function" },
    },
    parameters: {
        actions: {
            argTypesRegex: "^on[A-Z].*",
        },
    },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: 3,
};
