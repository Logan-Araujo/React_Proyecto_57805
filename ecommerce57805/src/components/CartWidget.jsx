import { Link } from "react-router-dom";
import { useContext } from "react";

import carrito from "../assets/cart.png";
import { ItemContext } from "../contexts/ItemsContext";

export const CartWidget = () => {
    const { items } = useContext(ItemContext)
    return (
    <Link to="/cart">
    <img src={carrito} />
    <span>{items.length}</span>
    </Link>
)
};