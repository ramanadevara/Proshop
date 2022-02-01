import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  FormControl,
  Form,
} from "react-bootstrap"
import { Link } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"
import Rating from "../components/Rating"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listProduct } from "../actions/productActions.js"
import axios from "axios"
import Loader from "../components/Loader"
import Message from "../components/Message"
import { useHistory } from "react-router-dom"

const ProductScreen = (props) => {
  const params = useParams()

  const navigate = useNavigate()

  const productDetails = useSelector((state) => state.productDetails)

  const [qty, setQty] = useState(1)
  const { loading, error, product } = productDetails
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProduct(params.id))
  }, [dispatch])

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`)
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
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
                <Rating
                  value={product.rating}
                  total={product.numReviews}
                ></Rating>
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
                  {product.countInStock > 0 ? (
                    <ListGroupItem>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (num) => (
                                <option key={num + 1} value={num + 1}>
                                  {num + 1}
                                </option>
                              )
                            )}
                          </Form.Select>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ) : null}

                  <ListGroupItem>
                    <Button
                      type='button'
                      onClick={addToCartHandler}
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
      )}
    </>
  )
}

export default ProductScreen
