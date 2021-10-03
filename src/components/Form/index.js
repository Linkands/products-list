import styles from './Form.module.css'

function Form({ name, price, image, handleChange, handleSubmit }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Add product form</h2>
      <form onSubmit={handleSubmit}>
        <label>Image</label>
        <input
          name="image"
          value={image}
          required
          placeholder="https://cdn.pixabay.com/photo/2021/09/15/12/52/animal-6626792_1280.jpg"
          onChange={handleChange}
        ></input>
        <label>Name</label>
        <input
          name="name"
          value={name}
          required
          placeholder="John"
          onChange={handleChange}
        ></input>
        <label>Price</label>
        <input
          name="price"
          value={price}
          required
          placeholder="15000"
          onChange={handleChange}
        ></input>
        <button className={styles.button} type="submit">
          Add product
        </button>
      </form>
    </div>
  )
}

export default Form
