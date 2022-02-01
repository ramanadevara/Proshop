import React, { useEffect } from "react"
import {
  Row,
  Col,
  ListGroupItem,
  Image,
  ListGroup,
  Form,
  Button,
  Card,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { addToCart, removeFromCart } from "../actions/cartActions"
import Message from "../components/Message"
const CartScreen = () => {
  const params = useParams()

  const { search } = useLocation()

  const productId = params.id

  const qty = search ? Number(search.split("=")[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const navigate = useNavigate()
  const checkoutHandler = () => {
    navigate("/login?redirect=shipping")
  }

  useEffect(() => {
    if (productId) {
      console.log(search)
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty. <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroupItem key={item.products}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>
                Subtotal ({cartItems.reduce((acc, cur) => acc + cur.qty, 0)})
                Items
              </h2>
              $
              {cartItems
                .reduce((acc, cur) => acc + cur.price * cur.qty, 0)
                .toFixed(2)}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
                style={{ width: "100%" }}
              >
                Proceed to Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
