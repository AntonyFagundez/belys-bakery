import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CardProduct } from "../components/CardProduct";

export default {
    title: "components/CardProduct",
    component: CardProduct,
} as ComponentMeta<typeof CardProduct>;

const Template: ComponentStory<typeof CardProduct> = (args) => <CardProduct {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Cachito",
    description: "Producto hecho con amor",
    price: 45,
};
