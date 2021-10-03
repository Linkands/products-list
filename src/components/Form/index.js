import styles from './Form.module.css'

function Form({ name, price, image, handleChange, handleSubmit }) {
  return (
    <div className={styles.wrapper}>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="image"
          value={image}
          required
          placeholder="Product image(URL)"
          onChange={handleChange}
        ></input>
        <input
          name="name"
          value={name}
          required
          placeholder="Product name"
          onChange={handleChange}
        ></input>
        <input
          name="price"
          value={price}
          required
          placeholder="Product price"
          onChange={handleChange}
        ></input>
        <button type="submit">Add product</button>
      </form>
    </div>
  )
}

export default Form
