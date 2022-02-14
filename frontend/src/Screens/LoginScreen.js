import React, { useEffect, useState } from "react"
import FormContainer from "../components/FormContainer"
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
  Row,
  Col,
} from "react-bootstrap"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../actions/userActions"
import Message from "../components/Message"
import Loader from "../components/Loader"
const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { search } = useLocation()

  const redirect = search ? "/" + search.split("=")[1] : "/"

  const dispatch = useDispatch()

  const submitHandler = async (e) => {
    e.preventDefault()
    dispatch(loginUser(email, password))
  }

  const userLogin = useSelector((state) => state.userLogin)

  const { loading, error, userInfo } = userLogin

  const navigate = useNavigate()

  useEffect(() => {
    //console.log(Object.entries(userInfo).length)
    console.log(search)
    console.log(redirect)
    if (
      typeof userInfo != "undefined" &&
      !(Object.entries(userInfo).length === 0)
    ) {
      navigate(redirect)
    }
  })
  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
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
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
        <Row className='py-3'>
          <Col>
            New Customer? <Link to='/register'>Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen
