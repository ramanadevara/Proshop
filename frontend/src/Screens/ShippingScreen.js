import React from "react"
import { useState } from "react"
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { saveShippingAddress } from "../actions/cartActions"
import FormContainer from "../components/FormContainer"
const ShippingScreen = () => {
  const { shippingAddress } = useSelector((state) => state.cart)
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submitHandler = () => {
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    navigate("/payment")
  }
  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup controlId='address'>
          <FormLabel>Address</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId='city'>
          <FormLabel>City</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId='postalCode'>
          <FormLabel>Postal Code</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter Postal Code'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId='country'>
          <FormLabel>Country</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></FormControl>
        </FormGroup>

        <Button type='submit' variant='primary' style={{ marginTop: "30px" }}>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
