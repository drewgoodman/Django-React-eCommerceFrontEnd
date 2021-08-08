import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { listUsers } from '../actions/userActions'

function UserListScreen({ history }) {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList
    
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if(userInfo && userInfo.isAdmin)
        {
            dispatch(listUsers())
        } else {
            history.push('/login')
        }
    }, [dispatch, history])

    const deleteHandler = (id) => {
        console.log("Delete user #", id)
    }

    return (
        <div>
            <h1>Users</h1>
            {loading ? <Loader /> : error
                ? (<Message variant='red'>{error}</Message>
                ) : (
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map(user => (
                                <tr key={user._id}>
                                <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.isAdmin ? (
                                        <FontAwesomeIcon icon="check" style={{color: 'green'}} />
                                    ) : (
                                        <FontAwesomeIcon icon="times" style={{color: 'red'}}/>
                                    )} </td>
                                    <td><LinkContainer to={`/admin/user/${user._id}`}>
                                        <Button variant='light' className='btn-sm'>
                                        <FontAwesomeIcon icon="edit" />
                                        </Button>
                                    </LinkContainer>
                                    <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(user._id)}>
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

export default UserListScreen
