import React from 'react'
import Form from './components/Form'

function App() {
  const [name, setName] = React.useState('')
  const [image, setImage] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [products, setProducts] = React.useState([])

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
    }
  }

  return (
    <>
      <Form
        name={name}
        image={image}
        price={price}
        handleChange={handleChange}
      ></Form>
    </>
  )
}

export default App
