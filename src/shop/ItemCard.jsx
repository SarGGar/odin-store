import { useState } from "react";
import styles from "./ItemCard.module.css";
import { useOutletContext } from "react-router-dom";
import PropTypes from 'prop-types';

function ItemCard ({id, title, imageUrl, price}) {
    const [cart, setCart] = useOutletContext();
    const [quantity, setQuantity] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {id: id, title:title, imageUrl:imageUrl, price:price, quantity:quantity}
        setCart((cart)=> [...cart, newItem]);
        setQuantity(0)
    }

    return (
        <>
        <div className={styles.itemCard}>
            <div className={styles.itemName}>
                <h2>{title}</h2>
            </div>
            <div className={styles.itemImage}><img src={imageUrl} alt={title} /></div>
            <h3>{price}</h3>
            <div className={styles.quantitySelection}>
                <h4>Quantity</h4>
                <form onSubmit={handleSubmit}>
                    <input type="number" name="quantity" min={0} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
        </>
    )
}

ItemCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number
}

export default ItemCard