import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container, Placeholder } from "react-bootstrap"
import HomeScreen from "./Screens/HomeScreen"
import ProductScreen from "./Screens/ProductScreen"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CartScreen from "./Screens/CartScreen"
import LoginScreen from "./Screens/LoginScreen"
import RegisterScreen from "./Screens/RegisterScreen"
import ProfileScreen from "./Screens/ProfileScreen"
import ShippingScreen from "./Screens/ShippingScreen"
import PaymentScreen from "./Screens/PaymentScreen"
import PlaceOrderScreen from "./Screens/PlaceOrderScreen"
import OrderScreen from "./Screens/OrderScreen"

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Container>
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/login' element={<LoginScreen />}></Route>
            <Route path='/register' element={<RegisterScreen />}></Route>
            <Route path='/profile' element={<ProfileScreen />}></Route>
            <Route path='/shipping' element={<ShippingScreen />}></Route>
            <Route path='/payment' element={<PaymentScreen />}></Route>
            <Route path='/placeOrder' element={<PlaceOrderScreen />}></Route>
            <Route path='/order/:id' element={<OrderScreen />}></Route>
          </Routes>
        </main>
      </Container>
      <Footer></Footer>
    </Router>
  )
}

export default App
