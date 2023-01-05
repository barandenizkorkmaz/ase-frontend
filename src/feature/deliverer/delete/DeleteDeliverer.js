
import Form from 'react-bootstrap/Form';
import { Row, Container } from 'react-bootstrap';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


const DeleteDeliverer = () => {

 
    const [delivererId, setDelivereId] = useState("")   

    const formHandler=(ev)=>{
        ev.preventDefault();
        if (delivererId===''){
            alert('Please fill in all fields')
       }else{
            alert(`Welcome ${delivererId}`)
            setDelivereId('')
        }
    }

    return (
        <Container >
            <Row className="justify-content-md-center mt-5" xs={6} md={2}>
                <Form onSubmit={formHandler}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Deliverer ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter id" value={delivererId} onChange={val => {setDelivereId(val)}} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size="lg">
                            Delete
                        </Button>
                    </div>
                </Form>
            </Row>
        </Container>
    )
}

export default DeleteDeliverer