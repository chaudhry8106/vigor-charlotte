
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import moment from 'moment'
import axios from 'axios'

import paypal from 'paypal-rest-sdk';

const handleSubmit = () => {
    
    paypal.configure({
        mode: 'sandbox', // Sandbox or live
        client_id: 'Ac37b331jiGLND930-RDRgmeCmOEUWtYnNcNO7MA-rmdN2pFiIzdEwEsonM4uBANxCTrugcTCjIYj2-P',
        client_secret: 'EGJHGSQ5UgQFIjJm6lPFUOtd0cxYxK71HphbcUeN1Q0KkztD8WNDvU0ohMwZKjh-dTayQM8xNiCc2jiw'});

    const card_data = {
        "type": "visa",
        "number": "4417119669820331",
        "expire_month": "11",
        "expire_year": "2018",
        "cvv2": "123",
        "first_name": "Joe",
        "last_name": "Shopper"
      };
     axios.post('api/payments', (res, req) => {
        
        paypal.creditCard.create(card_data, function(error, credit_card){
            if (error) {
              console.log(error);
              throw error;
            } else {
              console.log("Create Credit-Card Response");
              console.log(credit_card);
            }
          })

     })
     .then(response => 
       {
           console.log(response);
       }
     )
     .catch(err => {
       console.log(err)
     })
   }



class Payments extends Component {


  render() {  
    return (
    <Container fluid>
        <Nav />
        <main className="col-xs-12 col-sm-8 offset-sm-4 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4">
            <Header>
                <h1 className="float-left text-center text-md-left">Payments</h1>
            </Header>
            {/* <section>
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
            </section> */}
            <section>
                <div id="pay-invoice" className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h3 className="text-center">Pay Invoice</h3>
                        </div>
                        <hr />
                        <form action="" method="post" novalidate="novalidate">
                            <div className="form-group text-center">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><i className="text-muted fa fa-cc-visa fa-2x"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-cc-mastercard fa-2x"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-cc-amex fa-2x"></i></li>
                                    <li className="list-inline-item"><i className="fa fa-cc-discover fa-2x"></i></li>
                                </ul>
                            </div>
                            <div className="form-group">
                                <label for="cc-payment" className="control-label mb-1">Payment amount</label>
                                <input id="cc-pament" name="cc-payment" type="text" className="form-control" aria-required="true" aria-invalid="false" value="100.00"/>
                            </div>
                            <div className="form-group has-success">
                                <label for="cc-name" className="control-label mb-1">Name on card</label>
                                <input id="cc-name" name="cc-name" type="text" className="form-control cc-name valid" data-val="true" data-val-required="Please enter the name on card" autocomplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name-error"/>
                                <span className="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
                            </div>
                            <div className="form-group">
                                <label for="cc-number" className="control-label mb-1">Card number</label>
                                <input id="cc-number" name="cc-number" type="tel" className="form-control cc-number identified visa" value="" data-val="true" data-val-required="Please enter the card number" data-val-cc-number="Please enter a valid card number" autocomplete="cc-number"/>
                                <span className="help-block" data-valmsg-for="cc-number" data-valmsg-replace="true"></span>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label for="cc-exp" className="control-label mb-1">Expiration</label>
                                        <input id="cc-exp" name="cc-exp" type="tel" className="form-control cc-exp" value="" data-val="true" data-val-required="Please enter the card expiration" data-val-cc-exp="Please enter a valid month and year" placeholder="MM / YY" autocomplete="cc-exp"/>
                                        <span className="help-block" data-valmsg-for="cc-exp" data-valmsg-replace="true"></span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label for="x_card_code" className="control-label mb-1">Security code</label>
                                    <div className="input-group">
                                        <input id="x_card_code" name="x_card_code" type="tel" className="form-control cc-cvc" value="" data-val="true" data-val-required="Please enter the security code" data-val-cc-cvc="Please enter a valid security code" autocomplete="off"/>
                                        <div className="input-group-addon">
                                            <span className="fa fa-question-circle fa-lg" data-toggle="popover" data-container="body" data-html="true" data-title="Security Code" 
                                            data-content="<div class='text-center one-card'>The 3 digit code on back of the card..<div class='visa-mc-cvc-preview'></div></div>"
                                            data-trigger="hover"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="x_zip" className="control-label mb-1">Postal code</label>
                                <input id="x_zip" name="x_zip" type="text" className="form-control" value="" data-val="true" data-val-required="Please enter the ZIP/Postal code" autocomplete="postal-code"/>
                                <span className="help-block" data-valmsg-for="x_zip" data-valmsg-replace="true"></span>
                            </div>
                            <div>
                                <button id="payment-button" type="submit" className="btn btn-lg btn-primary btn-block">
                                    <i class="fa fa-lock fa-lg"></i>&nbsp;
                                    <span id="payment-button-amount">Pay $100.00</span>
                                    {/* <span id="payment-button-sending" style="display:none;">Sending…</span> */}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    </Container>
    );
  }
}

export default Payments;