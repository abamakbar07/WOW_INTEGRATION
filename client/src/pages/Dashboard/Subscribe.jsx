import React, { useContext, useState, useEffect } from 'react'
import { Card, Form, Button } from 'react-bootstrap';

import { AppContext } from '../../context/globalContext';

import wow from './../../img/wow.png'
import attach from './../../img/icon/attach.png'
import { API } from '../../config/api';
import { useHistory } from 'react-router-dom';

const Subscribe = (props) => {
   const history = useHistory()
   const userTransaction = props.userTransaction

   let paymentStatus = null

   if (userTransaction) {
      paymentStatus = userTransaction.paymentStatus
   }

   const [state, dispatch] = useContext(AppContext)
   
   const [loading, setLoading] = useState(false)
   
   const [previewImage, setPreviewImage] = useState({
      file : null,
   })

   const [addTransaction, setAddTransaction] = useState({
      userId: state.user.id,
      transferProof: null,
   })

   const onUploadTransferProof = (e) => {
      const updateAddTransaction = { ...addTransaction };
      updateAddTransaction[e.target.name] = e.target.type === "file" ? e.target.files[0] : e.target.value;
      setAddTransaction(updateAddTransaction)
      setPreviewImage({
         file: URL.createObjectURL(e.target.files[0])
      })
   }

   const { userId, transferProof } = addTransaction

   const onSubmit = async (e) => {
      e.preventDefault()
      try {
         const form = new FormData();
         form.append("userId", userId)
         form.append("transferProof", transferProof)

         const config = {
            header: {
               "Content-Type": "multipart/form-data",
            }
         }

         setLoading(true)
         await API.post("/transaction", form, config)
         setLoading(false)

         setAddTransaction({
            userId: state.user.id,
            transferProof: null,
         })

         dispatch({
            type: "SUBSCRIBE_MODAL",
            payload: {
               subscribeModal: true,
            }
         })

         history.push("/")
      } catch (error) {
         console.log(error)
      }
   }

   return (
     <div className="Subscribe">
       <div className="container">
         <div className="row">
           <div className="col-md-12">
             <Card className="Subscribe-card border-0 bg-transparent">
               <Card.Body className="Subscribe-body">
                 <div>
                   <h1>Premium</h1>
                   {!userTransaction ? (
                     <div>
                       <p>
                         Pay now and access all the latest books from{" "}
                         <img src={wow} alt="" />
                       </p>
                       <p className="font-weight-bold">
                         <img src={wow} alt="" />: 0981312323
                       </p>
                       <Form>
                         <Form.Group onSubmit={(e) => onSubmit(e)}>
                           <Form.Control
                             className="bgTextboxFile"
                             type="id"
                             placeholder="Input your account number"
                           />
                           {/* </Form.Group> */}
                           <div className="form-group mt-3">
                             <label
                               for="transferProof"
                               className="bgTextboxSubs form-control"
                             >
                               <div className="justify-content-between row ml-1 mr-1">
                                 <p className="text-left ">
                                   Attache proof of transfer
                                 </p>
                                 <div className="">
                                   <img src={attach} alt="" />
                                 </div>
                               </div>
                             </label>
                             <input
                               onChange={(e) => onUploadTransferProof(e)}
                               id="transferProof"
                               type="file"
                               name="transferProof"
                               style={{ display: "none" }}
                             />
                             <img
                               alt=""
                               src={previewImage.file}
                               style={{
                                 width: "120px",
                               }}
                             />
                           </div>
                           {/* <Form.Group className="submit-button mt-5"> */}
                           <div className="submit-button">
                             <Button
                               className="mt-2"
                               variant="danger"
                               type="submit"
                               onClick={(e) => onSubmit(e)}
                             >
                               Send
                             </Button>
                           </div>
                         </Form.Group>
                       </Form>
                     </div>
                   ) : paymentStatus == "Pending" ? (
                     <div>
                       <h3>Getting a cup of coffee</h3>
                       <h5>
                         Your transaction is on process now! Wait a second for
                         admin verification!
                       </h5>
                     </div>
                   ) : paymentStatus == "Cancel" ? (
                     <div>
                       <h3 className="text-danger">
                         Sorry, your transaction is be canceled from Admin!
                       </h3>
                       <h5>Contact us, or make a new transaction</h5>
                     </div>
                   ) : (
                     <div>
                       <h3 className="text-success">
                         Congratulation! You're subscribed now!
                       </h3>
                       <h5>Happy Reading :*</h5>
                     </div>
                   )}
                 </div>
               </Card.Body>
             </Card>
           </div>
         </div>
       </div>
     </div>
   );
}

export default Subscribe
