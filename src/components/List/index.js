import styles from './List.module.css'
import React from 'react'

function List({ products, deleteProduct, addToCart }) {
  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <li key={product.id}>
          <button
            className={styles.deleteBtn}
            onClick={() => deleteProduct(product.id)}
          >
            X
          </button>
          <img
            src={product.image}
            alt={product.name}
            height={100}
            width={110}
          ></img>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button
            className={styles.button}
            onClick={() => {
              addToCart(product.id, product.name, product.price, product.image)
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
