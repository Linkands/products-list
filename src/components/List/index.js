import styles from './List.module.css'
import React from 'react'

function List({ products, deleteProduct, addToCart }) {
  return (
    <ul className={styles.list}>
      {products.map(({ id, image, name, price }) => (
        <li key={id}>
          <button
            className={styles.deleteBtn}
            onClick={() => deleteProduct(id)}
          >
            X
          </button>
          <img src={image} alt={name} height={100} width={110}></img>
          <p>{name}</p>
          <p>{price}</p>
          <button
            className={styles.button}
            onClick={() => {
              addToCart(id, name, price, image)
            }}
          >
            Add to cart
          </button>
        </li>
      ))}
    </ul>
  )
}

export default List
