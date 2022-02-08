import React, { useEffect, useState } from "react"
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../actions/userActions"
import FormContainer from "../components/FormContainer"
import Loader from "../components/Loader"
import Message from "../components/Message"

const RegisterScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState(null)

  const userRegister = useSelector((state) => state.userRegister)

  const { userInfo, error, loading } = userRegister

  const navigate = useNavigate()

  useEffect(() => {
    if (
      typeof userInfo != "undefined" &&
      !(Object.entries(userInfo).length === 0)
    ) {
      navigate("/")
    }
  })
  const dispatch = useDispatch()
  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage("Passwords do not match")
    } else {
      dispatch(registerUser(email, password, name))
    }
  }
  return (
    <FormContainer>
      <h1> Sign Up</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      {message && <Message variant='danger'>{message}</Message>}
      <Form onSubmit={submitHandler}>
        <FormGroup controlId='name'>
          <FormLabel>Name</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='email'>
          <FormLabel>Email Address</FormLabel>
          <FormControl
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
        </FormGroup>
        <br></br>
        <FormGroup controlId='password'>
          <FormLabel>Password</FormLabel>
          <FormControl
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></FormControl>
        </FormGroup>
        <br></br>
        <FormGroup controlId='confirmPassword'>
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            type='password'
            placeholder='Enter password again'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></FormControl>
        </FormGroup>
        <br></br>
        <Button type='submit' variant='primary'>
          Sign Up
        </Button>
        <Row className='py-3'>
          <Col>
            Have an Account? <Link to='/login'>Login</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default RegisterScreen
