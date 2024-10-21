import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import styles from "./Nav.module.css"

function Nav({ cart }) {
    const [numItems, setNumItems] = useState(0)
    useEffect(() => {
      const newNumItems = cart.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue.quantity || 0),
        0
      )
      setNumItems(newNumItems)

    }, [cart])

    return (
        <>
          <nav className={styles.navbar}>
            <img className={styles.logo} src="bird-logo.png" alt="Company Logo - Bird"/>
            <h1 className={styles.title}>o novo tempo</h1>
            <ul className={styles.alllinks}>
              <li className={styles.individual}>
                <Link className={styles.link} to="/">Home</Link>
              </li>
              <li className={styles.individual}>
                <Link className={styles.link} to="/shop">Shop</Link>
              </li>
              <li className={styles.individual}>
                <Link className={styles.link} to="/cart">
                  Cart(
                  {numItems}
                  )
                </Link>
              </li>
            </ul>
          </nav>
        </>
    );
}

export default Nav;