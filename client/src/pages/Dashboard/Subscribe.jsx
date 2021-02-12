import React from 'react'
import wow from './../../img/wow.png'
import attach from './../../img/icon/attach.png'
import { Card, Form, Button } from 'react-bootstrap';

function Subscribe() {
   return (
      <div className="Subscribe">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <Card className="Subscribe-card border-0 bg-transparent">
                     <Card.Body className="Subscribe-body">
                        <div>
                           <h1>Premium</h1>
                           <p>Pay now and access all the latest books from <img src={wow} alt="" /></p>
                           <p className="font-weight-bold"><img src={wow} alt="" />: 0981312323</p>
                              <Form>
                                 <Form.Group>
                                    <Form.Control className="bgTextboxFile" type="id" placeholder="Input your account number" />
                                 </Form.Group>
                                 
                                 <div className="form-group">
                                    <label for="fusk" className="bgTextboxSubs form-control">
                                       <div className="justify-content-between row ml-1 mr-1">
                                          <p className="text-left ">
                                             Attache proof of transfer
                                          </p>
                                          <div className="">
                                             <img src={attach} alt="" />
                                          </div>
                                       </div>
                                    </label>
                                    <input id="fusk" type="file" name="photo" style={{display:"none"}} />
                                 </div>

                                 <Form.Group className="submit-button mt-5">
                                 <Button className="mt-2" variant="danger" type="file">
                                    Send
                                 </Button>
                                 </Form.Group>
           
                              </Form>
                        </div>
                     </Card.Body>
                  </Card>
               </div>
            </div>

         </div>
      </div>
   )
}

export default Subscribe
