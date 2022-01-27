import React from "react"
import { Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import Product from "../components/Product"
import { listProducts } from "../actions/productActions"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import Loader from "../components/Loader"
import Message from "../components/Message"

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  const { products, loading, error } = productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
