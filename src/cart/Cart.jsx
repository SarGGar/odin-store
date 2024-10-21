import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import CartCard from "./CartCard";

function Cart () {
    const [cart, setCart] = useOutletContext();

    const [orderTotal, setOrderTotal] = useState(0)

    useEffect(() => {
        const newTotal = cart.reduce(
            (accumulator, currentEle) => accumulator + Number(currentEle.quantity) *Number(currentEle.price)
            ,0
        )
        setOrderTotal(newTotal)

    }, [cart])

    const removeItemFromCart = (id) => {
        const newCart = cart.filter((item) => item.id != id)
        setCart(newCart)
    }

    return (
        <>
        {cart && cart.length > 0 ? (
            <>
                <h1>Your cart</h1>
                {cart.map((item) => (
                    <CartCard key={item.id} item={item} removeItem={() => removeItemFromCart(item.id)}/>
                ))}
                <h2>Order Total: ${orderTotal}</h2>
            </>
        ) : (
            <h1>No items yet!</h1>
        )}
        </>
    )
}

export default Cart;