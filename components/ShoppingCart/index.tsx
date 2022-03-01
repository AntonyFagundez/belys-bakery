import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from "@chakra-ui/react";
import React from "react";

import { useShoppingCart } from "../../atoms/shoppingCart";

const ShoppingCart = () => {
    const { total, filteredCart, getCount } = useShoppingCart();

    return (
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>Item</Th>
                    <Th isNumeric>Cantidad</Th>
                    <Th isNumeric>Precio por unidad</Th>
                </Tr>
            </Thead>
            <Tbody>
                {filteredCart.map((item) => (
                    <Tr key={item.id}>
                        <Td>{item.title}</Td>
                        <Td isNumeric>{getCount(item.id)}</Td>
                        <Td isNumeric>${item.price}</Td>
                    </Tr>
                ))}
            </Tbody>
            <Tfoot>
                <Tr>
                    <Th colSpan={2}>Total</Th>
                    <Th isNumeric>${total}</Th>
                </Tr>
            </Tfoot>
        </Table>
    );
};

export default ShoppingCart;
