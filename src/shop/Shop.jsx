import { useEffect, useState } from "react";
import { fetchJewelry, fetchElectronics, fetchClothing} from "./fetchApi";
import ItemCard from "./ItemCard";
import styles from "./Shop.module.css"

function Shop () {
    const [shopItems, setShopItems] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const jewelryItems = await fetchClothing(10)
            setShopItems(jewelryItems)
        }
        fetchData()
    }, [])

    return (
        <>
        <div className={styles.shop}>
            <h1>Welcome to the shop</h1>
            <div className={styles.shopItems}>
                {shopItems.map((item) => (
                    <ItemCard key={item.id} id={item.id} title={item.title} imageUrl={item.image} price={item.price} />
                ))}
            </div>
        </div>
        </>
    )
}

export default Shop;