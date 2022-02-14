import React from "react"
import { useState } from "react"
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Col,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { savePaymentMethod, saveShippingAddress } from "../actions/cartActions"
import CheckoutSteps from "../components/CheckoutSteps"
import FormContainer from "../components/FormContainer"
const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = () => {
    dispatch(savePaymentMethod(paymentMethod))
    navigate("/placeorder")
  }
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Form.Label>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              onChange={(e) => setPaymentMethod(e.target.value)}
              checked
            ></Form.Check>
          </Col>
        </FormGroup>

        <Button type='submit' variant='primary' style={{ marginTop: "30px" }}>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
