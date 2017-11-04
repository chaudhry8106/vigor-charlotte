
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import moment from 'moment'
import axios from 'axios'

class Payments extends Component {


  render() {  
    return (
    <Container fluid>
        <Nav />
        <main className="col-xs-12 col-sm-8 offset-sm-4 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4">
            <Header>
                <h1 className="float-left text-center text-md-left">Payments</h1>
            </Header>
            <section>
                <div id="sq-ccbox">
                    <form id="nonce-form" novalidate action="path/to/payment/processing/page" method="post">
                        Pay with a Credit Card
                        <table>
                            <tbody>
                                <tr>
                                <td>Card Number:</td>
                                <td><div id="sq-card-number"></div></td>
                                </tr>
                                <tr>
                                <td>CVV:</td>
                                <td><div id="sq-cvv"></div></td>
                                </tr>
                                <tr>
                                <td>Expiration Date: </td>
                                <td><div id="sq-expiration-date"></div></td>
                                </tr>
                                <tr>
                                <td>Postal Code:</td>
                                <td><div id="sq-postal-code"></div></td>
                                </tr>
                                <tr>
                                <td colspan="2">
                                    <button id="sq-creditcard" className="button-credit-card" onclick="requestCardNonce(event)">Pay with card</button>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="hidden" id="card-nonce" name="nonce" />
                    </form>
                </div>
            </section>
        </main>
    </Container>
    );
  }
}

export default Payments;