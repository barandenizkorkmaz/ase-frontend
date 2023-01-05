import { Component } from "react";
import Table from 'react-bootstrap/Table';


export class ListDeliverer extends Component {

    render() {
        return (
            <Table className="mt-5" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Delivery Name</th>
                        <th>Customer Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}