import React from "react"
import { Card } from "react-bootstrap"
import Rating from "./Rating"
import { propTypes } from "react-bootstrap/esm/Image"

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`\product\${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>
      <Card.Body>
        <a href={`\product\${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text>
          <Rating value={product.rating} total={product.numReviews}></Rating>
        </Card.Text>
        <Card.Text>
          <h3>${product.price}</h3>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product