import Form from 'react-bootstrap/Form';
import { Row, Container } from 'react-bootstrap';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


const AddCustomer = () => {

 
    const [email, setEmail] = useState("")   
    const [password, setPassword] = useState("")  

    const formHandler=(ev)=>{
        ev.preventDefault();
        if (email==='' || password===''){
            alert('Please fill in all fields')
       }else{
            alert(`Welcome ${email}`)
            setEmail('')
            setPassword('')

        }
    }

    return (
        <Container >
            <Row className="justify-content-md-center mt-5" xs={6} md={2}>
                <Form onSubmit={formHandler}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Customer Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={val => {setEmail(val)}} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Customer Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" value={password} onChange={val => {setPassword(val)}} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size="lg">
                            Add Customer
                        </Button>
                    </div>
                </Form>
            </Row>
        </Container>
    )
}

export default AddCustomer