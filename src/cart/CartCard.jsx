import styles from './CartCard.module.css'
import PropTypes from 'prop-types';

function CartCard({ item, removeItem }) {

    return (
        <>
        <div className={styles.itemCard}>
            <div>
                <h3>{item.title}</h3>
                <img className={styles.refImg} src={item.imageUrl} alt={item.title} />
            </div>
            <div>
                <table className={styles.tableUnit}>
                    <thead><tr><th>Quantity</th></tr></thead>
                    <tbody><tr><td>{item.quantity}</td></tr></tbody>
                </table>
            </div>
            <div>
                <table className={styles.tableUnit}>
                    <thead><tr><th>Item Price</th></tr></thead>
                    <tbody><tr><td>{item.price}</td></tr></tbody>
                </table>
            </div>
            <div>
                <table className={styles.tableUnit}>
                    <thead><tr><th>Order Subtotal</th></tr></thead>
                    <tbody><tr><td>{item.price*item.quantity}</td></tr></tbody>
                </table>
            </div>
            <div><button className={styles.removeButton} onClick={removeItem}>Remove</button></div>
        </div>
        
        </>
    )
}

CartCard.propTypes = {
    item: PropTypes.object,
    removeItem: PropTypes.func
}

export default CartCard;