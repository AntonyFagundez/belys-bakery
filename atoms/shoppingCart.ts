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
                if (prev.some((p) => p.id === product.id)) {
                    return prev.map((p) => {
                        if (p.id === product.id) {
                            return { ...p, count: p.count + 1 };
                        }

                        return p;
                    });
                } else {
                    return [...prev, { ...product, count: getCount(product.id) + 1 }];
                }
            });
        },
        [setCart, getCount]
    );

    const remove = React.useCallback(
        (id: string) => {
            setCart((prev) => {
                if (prev.some((p) => p.id === id)) {
                    return prev.map((p) => {
                        if (p.id === id && p.count > 0) {
                            return { ...p, count: p.count - 1 };
                        }

                        return p;
                    });
                }

                return prev;
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
