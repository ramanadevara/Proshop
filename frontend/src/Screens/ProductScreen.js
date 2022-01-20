import React from "react"
import products from "../products"
import { useParams } from "react-router-dom"
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap"
import { Link } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"
import Rating from "../components/Rating"
const ProductScreen = () => {
  const params = useParams()
  const product = products.find((product) => product._id === params.id)
  return (
    <>
      <LinkContainer to={"/"}>
        <Button variant='dark' className='my-3'>
          Go back
        </Button>
      </LinkContainer>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <ListGroup></ListGroup>
          <ListGroupItem>
            <h3>{product.name}</h3>
          </ListGroupItem>
          <ListGroupItem>
            <Rating value={product.rating} total={product.numReviews}></Rating>
          </ListGroupItem>
          <ListGroupItem>{product.description}</ListGroupItem>
          <ListGroupItem>Price: ${product.price}</ListGroupItem>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of stock"}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  type='button'
                  disabled={product.countInStock === 0}
                  className='btn-block'
                  style={{ width: "100%" }}
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
