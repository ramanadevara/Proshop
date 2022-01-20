import React from "react"
import { Card } from "react-bootstrap"
import Rating from "./Rating"
import { propTypes } from "react-bootstrap/esm/Image"
import { Link } from "react-router-dom"

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
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
