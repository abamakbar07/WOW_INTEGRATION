import React, { useEffect, useState } from 'react'
import { Table, Col, Spinner, Dropdown } from 'react-bootstrap'
import { API } from '../../config/api'
import { dataTransaction } from './AdminDataTransaction'

const Transaction = () => {
   const [loading, setLoading] = useState(true)
   const [listTransaction, setListTransaction] = useState()

   const getTransaction = async () => {
      try {
         setLoading(true)

         const result = await API.get("/transactions")
         setListTransaction(result.data.data.transactions)

         setLoading(false)
      } catch (error) {
         console.log("Error getTransaction")
      }
   }

   const approveButton = async (id) => {
     try {
       const body = JSON.stringify({
         paymentStatus: "Approve",
         userStatus: "Active",
         remainingActive: 30,
       });
       const config = {
         headers: {
           "Content-Type": "application/json",
         },
       };
       await API.patch("/transaction/" + id, body, config);

       setLoading(false);

       getTransaction();
       // history.push("/")
     } catch (error) {
       console.log(error);
     }
   }

   const cancelButton = async (id) => {
     try {
       const body = JSON.stringify({
         paymentStatus: "Cancel",
         userStatus: "Non Active",
         remainingActive: 0,
       });
       const config = {
         headers: {
           "Content-Type": "application/json",
         },
       };
       await API.patch("/transaction/" + id, body, config);

       setLoading(false);

       getTransaction();
       // history.push("/")
     } catch (error) {
       console.log(error);
     }
   };

   useEffect(() => {
      getTransaction()
   }, [])

   return (
     <div className="Transaction">
       <div
         className="container"
         style={{
           paddingTop: "20vh",
         }}
       >
         <div className="row">
           <div className="col-md-12">
             <h1 className="Admin-title text-left mb-5">
               Incoming Transaction
             </h1>
             <Table striped borderless hover className="bg-transparent">
               <thead
                 style={{
                   display: "block",
                 }}
               >
                 <tr className="tr-listTransaction text-danger">
                   <th style={{ width: "5vw" }}>No</th>
                   <th style={{ width: "15vw" }}>Users</th>
                   <th style={{ width: "20vw" }}>Bukti Transfer</th>
                   <th style={{ width: "15vw" }}>Remaining Active</th>
                   <th style={{ width: "10vw" }}>Status User</th>
                   <th style={{ width: "10vw" }}>Status Payment</th>
                   <th style={{ width: "5vw" }}>Action</th>
                 </tr>
               </thead>
               <tbody
                 style={{
                   display: "block",
                   height: "50vh",
                   overflowY: "auto",
                   overflowX: "hidden",
                 }}
               >
                 {loading ? (
                   <Col sm={12} className="container text-center p-5 m-5">
                     <Spinner animation="border" role="status"></Spinner>
                   </Col>
                 ) : (
                   listTransaction.map((dataTrans, index) => (
                     <tr className="tr-listTransaction" key={dataTrans.id}>
                       <td style={{ width: "5vw" }}>{index + 1}</td>
                       <td style={{ width: "15vw" }}>
                         {dataTrans.users.fullname}
                       </td>
                       <td style={{ width: "20vw" }}>
                         {dataTrans.transferProof}
                       </td>
                       <td style={{ width: "15vw" }}>
                         {dataTrans.remainingActive + " day(s) left"}
                       </td>
                       <td
                         style={{ width: "10vw" }}
                         className={
                           dataTrans.userStatus === "Active"
                             ? "text-success"
                             : "text-danger"
                         }
                       >
                         {dataTrans.userStatus}
                       </td>
                       <td
                         style={{ width: "10vw" }}
                         className={
                           dataTrans.paymentStatus === "Approve"
                             ? "text-success"
                             : dataTrans.paymentStatus === "Cancel"
                             ? "text-danger"
                             : "text-warning"
                         }
                       >
                         {dataTrans.paymentStatus}
                       </td>
                       <td style={{ width: "5vw" }}>
                         <Dropdown>
                           <Dropdown.Toggle
                             variant="success"
                             id="dropdown-basic"
                           ></Dropdown.Toggle>

                           <Dropdown.Menu>
                             <Dropdown.Item
                               onClick={() => approveButton(dataTrans.id)}
                             >
                               Approve
                             </Dropdown.Item>
                             <Dropdown.Item
                               onClick={() => cancelButton(dataTrans.id)}
                             >
                               Cancel
                             </Dropdown.Item>
                           </Dropdown.Menu>
                         </Dropdown>
                       </td>
                     </tr>
                   ))
                 )}
               </tbody>
             </Table>
           </div>
         </div>
       </div>
     </div>
   );
}

export default Transaction
