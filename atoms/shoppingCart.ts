import React from "react";
import { atom, useRecoilState } from "recoil";

import type { Product } from "../Product/types";

export const shoppingCart = atom<(Product & { count: number })[]>({
    key: "shoppingCartState",
    default: [],
});

export const useShoppingCart = () => {
    const [cart, setCart] = useRecoilState(shoppingCart);

    const add = React.useCallback(
        (product: Product) => {
            setCart((prev) => [...prev, { ...product, count: getCount(product.id) + 1 }]);
        },
        [setCart]
    );

    const remove = React.useCallback(
        (id: string) => {
            setCart((prev) => {
                const index = prev.findIndex((product) => product.id === id);

                if (index === -1) {
                    return prev;
                }

                return [...prev.slice(0, index), ...prev.slice(index + 1)];
            });
        },
        [setCart]
    );

    const getCount = React.useCallback(
        (id: string) => {
            return cart.filter((p) => p.id === id).length;
        },
        [cart]
    );

    return {
        cart,
        add,
        remove,
        getCount,
    };
};
