import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from "@chakra-ui/react";
import React from "react";

import { useShoppingCart } from "../../atoms/shoppingCart";

const ShoppingCart = () => {
    const { cart, getCount } = useShoppingCart();

    const total = cart.reduce((acc, item) => acc + item.price, 0);
    //get unique items by title

    return (
        <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
                <Tr>
                    <Th>Item</Th>
                    <Th>Cantidad</Th>
                    <Th isNumeric>Precio por unidad</Th>
                </Tr>
            </Thead>
            <Tbody>
                {cart.map((item) => (
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
