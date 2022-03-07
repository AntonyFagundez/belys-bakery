import { IconButton } from "@chakra-ui/react";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";

interface IShipButtonProps {
    count: number;
    onOpen: VoidFunction;
}

const ShopButton = React.forwardRef<HTMLButtonElement, IShipButtonProps>(
    ({ count, onOpen }, ref) => {
        return (
            <IconButton
                ref={ref}
                _before={{
                    content: `"${count}"`,
                    display: "block",
                    fontSize: "12px",
                    fontWeight: "bold",
                    lineHeight: "1",
                    position: "absolute",
                    left: "0",
                    bottom: "0",
                    transform: "translateY(15%)",
                    backgroundColor: "var(--chakra-colors-secondary)",
                    color: "white",
                    padding: "0.35em 0.5em",
                    borderRadius: "50%",
                }}
                aria-label="shopping-cart-nav"
                height={"35px"}
                icon={<HiShoppingCart size={20} />}
                marginLeft={"30px"}
                onClick={onOpen}
            />
        );
    }
);

ShopButton.displayName = "ShopButton";

export default ShopButton;
