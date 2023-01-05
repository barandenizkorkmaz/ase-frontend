import Form from 'react-bootstrap/Form';
import { Row, Container } from 'react-bootstrap';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


const AddDelivery = () => {

 
    const [delivererId, setDelivererId] = useState("")   
    const [customerId, setCustomerId] = useState("")  
    const [boxId, setBoxId] = useState("")

    const formHandler=(ev)=>{
        ev.preventDefault();
        if (delivererId==='' || customerId==='' || boxId===''){
            alert('Please fill in all fields')
       }else{
            alert(`Welcome ${delivererId}`)
            setDelivererId('')
            setCustomerId('')
            setBoxId('')
        }
    }

    return (
        <Container >
            <Row className="justify-content-md-center mt-5" xs={6} md={2}>
                <Form onSubmit={formHandler}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Deliver ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter id" value={delivererId} onChange={val => {setDelivererId(val)}} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Customer ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter id" value={customerId} onChange={val => {setCustomerId(val)}} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Box ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter id" value={boxId} onChange={val => {setBoxId(val)}} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size="lg">
                            Add
                        </Button>
                    </div>
                </Form>
            </Row>
        </Container>
    )
}

export default AddDelivery