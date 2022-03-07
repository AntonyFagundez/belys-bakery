import React from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

import type { Product } from "../Product/types";
import data from "../data";

export interface ShoppingItem extends Product {
    count: number;
}

export const shoppingCart = atom<ShoppingItem[]>({
    key: "shoppingCartState",
    default: data.map((product) => ({ ...product, count: 0 })),
});

const shoppingCartSelector = selector({
    key: "shoppingCartSelector", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const cart = get(shoppingCart);
        const filteredCart = cart.filter((item) => item.count > 0);
        const total = filteredCart.reduce((acc, item) => acc + item.price * item.count, 0);

        return {
            cart,
            filteredCart,
            total,
        };
    },
});

export const useShoppingCart = () => {
    const setCart = useSetRecoilState(shoppingCart);
    const { cart, filteredCart, total } = useRecoilValue(shoppingCartSelector);

    const getCount = React.useCallback(
        (id: string) => {
            return cart.find((p) => p.id === id)?.count ?? 0;
        },
        [cart]
    );
    const add = React.useCallback(
        (product: Product) => {
            setCart((prev) => {
                return prev.map((prod) => {
                    if (prod.id === product.id) {
                        return {
                            ...prod,
                            count: prod.count + 1,
                        };
                    }

                    return prod;
                });
            });
        },
        [setCart]
    );

    const remove = React.useCallback(
        (id: string) => {
            setCart((prev) => {
                return prev.map((p) => {
                    if (p.id === id && p.count > 0) {
                        return { ...p, count: p.count - 1 };
                    }

                    return p;
                });
            });
        },
        [setCart]
    );

    return {
        cart,
        add,
        remove,
        getCount,
        total,
        filteredCart,
    };
};
