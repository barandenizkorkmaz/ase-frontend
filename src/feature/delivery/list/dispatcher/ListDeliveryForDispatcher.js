import axios from "axios";
import { Component } from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import QRCode from "react-qr-code";

export class ListDeliveryForDispatcher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deliveries: [],
            showQr: false,
            currentDeliverer: ""
        }
        this.getDeliveries();
        this.generateQr = this.generateQr.bind(this);
    }

    getDeliveries() {
        axios.get("")
            .then(
                (response) => {
                    this.setState(
                        { deliveries: [...response.data] }
                    )
                    console.log(this.state.deliveries);
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    generateQr(delivererId) {
        this.setState(
            {
                showQr: !this.state.showQr,
                currentDeliverer: delivererId
            }
        )
        console.log("showQr" + this.state.showQr);
    }

    render() {
        return (
            <Table className="mt-5 justify-content-md-center" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Deliverer Id</th>
                        <th>Box Id</th>
                        <th>Customer Id</th>
                        <th>Status</th>
                        <th>Generate Qr</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.deliveries.map((el) => {
                        return (
                            <tr key={el["id"]}>
                                <td>{el["id"]}</td>
                                <td>{el["delivererId"]}</td>
                                <td>{el["boxId"]}</td>
                                <td>{el["customerId"]}</td>
                                <td>{el["deliveryStatus"]}</td>
                                <td><Button onClick={() => this.generateQr(el["delivererId"])}>Generate</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
                {
                    this.state.showQr ?
                        <QRCode
                            className="mt-5"
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={this.state.currentDeliverer}
                            viewBox={`0 0 256 256`}
                        />
                        : <div />
                }
            </Table>

        )
    }
}