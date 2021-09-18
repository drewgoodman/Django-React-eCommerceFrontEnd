import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { listProducts } from '../actions/productActions'

function ProductListScreen({ history, match }) {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if(userInfo && userInfo.isAdmin)
        {
            dispatch(listProducts())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure you want to delete this product?'))
        {
            // dispatch(deleteUser(id))
            // delete Products
        }
    }

    const createProductHandler = (product) => {
        // Create product
    }

    return (
        <div>
            <Row className="align-items">
                <Col>
                    <h1>Products</h1>
                </Col>
                <Col className="text-right">
                    <Button className="my-3" onClick={createProductHandler}>
                        <FontAwesomeIcon icon='plus' /> Create Product
                    </Button>
                </Col>

            </Row>
            {loading ? <Loader /> : error
                ? (<Message variant='red'>{error}</Message>
                ) : (
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.map(product => (
                                <tr key={product._id}>
                                <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.brand}</td>
                                    <td><LinkContainer to={`/admin/product/${product._id}/edit`}>
                                        <Button variant='light' className='btn-sm'>
                                        <FontAwesomeIcon icon="edit" />
                                        </Button>
                                    </LinkContainer>
                                    <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(product._id)}>
                                        <FontAwesomeIcon icon='trash' />
                                    </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
        </div>
    )
}

export default ProductListScreen
