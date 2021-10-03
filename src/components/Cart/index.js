import styles from './Cart.module.css'

function Cart({ cart }) {
  return (
    <div className={styles.wrapper}>
      <p>Products in cart: {cart.length}</p>
    </div>
  )
}

export default Cart
