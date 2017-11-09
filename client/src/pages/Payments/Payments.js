
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
        client_id: '',
        client_secret: ''});

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
            <br />
            <section>
                <form target="paypal" action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="19218" />
                    <table>
                        <tr><td><input type="hidden" name="on0" value="Color" />Color</td></tr><tr><td><select name="os0">
                        <option value="Red">Red $10.00</option>
                        <option value="Blue">Blue $8.00</option>
                        <option value="Green">Green $12.00</option>
                    </select> </td></tr>
                    <tr><td><input type="hidden" name="on1" value="Size" />Size</td></tr><tr><td><select name="os1">
                    <option value="Small">Small</option>
                    <option value="Large">Large</option>
                    </select> </td></tr>
                    </table>
                    <br />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/webstatic/en_US/i/btn/png/btn_addtocart_120x26.png" alt="Add to Cart" name="submit" />
                    <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </section>
        </main>
    </Container>
    );
  }
}

export default Payments;