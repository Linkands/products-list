import React from 'react'
import Container from './components/Container'
import Form from './components/Form'
import List from './components/List'
import Cart from './components/Cart'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [name, setName] = React.useState('')
  const [image, setImage] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [products, setProducts] = React.useState([])

  const [cart, setCart] = React.useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'image':
        setImage(value)
        break
      case 'price':
        setPrice(value)
        break
      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const randomId = uuidv4()
    setProducts([
      ...products,
      { id: randomId, name: name, image: image, price: price },
    ])
    refreshInputs()
  }

  const refreshInputs = () => {
    setName('')
    setImage('')
    setPrice('')
  }

  const deleteProduct = (productId) => {
    setProducts((prevState) => prevState.filter(({ id }) => id !== productId))
  }

  const addToCart = (id, name, image, price) => {
    setCart([...cart, { id, name, image, price }])
  }

  return (
    <Container>
      <Form
        name={name}
        image={image}
        price={price}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></Form>
      <Cart cart={cart}></Cart>
      <List
        products={products}
        deleteProduct={deleteProduct}
        addToCart={addToCart}
      ></List>
    </Container>
  )
}

export default App
