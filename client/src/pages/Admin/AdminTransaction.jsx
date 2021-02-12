import React from 'react'
import { Table } from 'react-bootstrap'
import { dataTransaction } from './AdminDataTransaction'

// import { useParams } from "react-router-dom";
// import { products } from "../components/home/data";

function Transaction() {

//   const [product, setProduct] = useState(null);
//   const { id } = useParams();

//   const filterProduct = () => {
//     const filteredProduct = products.find((product) => product.id == id);

//     setProduct(filteredProduct);
//   };

//   useEffect(() => {
//     filterProduct();
//   }, []);

   return (
      <div className="Transaction">
         <div className="container"  style={{
               paddingTop: "20vh"
            }}>
            <div className="row">
               <div className="col-md-12">
                  <h1 className="Admin-title text-left mb-5">Incoming Transaction</h1>
                  <Table striped borderless hover className="bg-transparent">
                     <thead style={{
                        display: "block",
                     }}>
                        <tr className="tr-listTransaction text-danger">
                           <th>No</th>
                           <th>Users</th>
                           <th>Bukti Transfer</th>
                           <th>Remaining Active</th>
                           <th>Status User</th>
                           <th>Status Payment</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody style={{
                        display: "block",
                        height: "50vh",
                        overflowY: "auto",
                        overflowX: "hidden"
                     }}>

                        {dataTransaction.map((dataTrans) => (   
                           <tr className="tr-listTransaction" key={dataTrans.id}>
                              <td>{dataTrans.id}</td>
                              <td>{dataTrans.user}</td>
                              <td>{dataTrans.evidence}</td>
                              <td>{dataTrans.remain}</td>
                              <td className={
                                 dataTrans.userStat === 'Active' ? 'text-success' : 'text-danger'
                              } >{dataTrans.userStat}</td>
                              <td className={
                                 dataTrans.paymentStat === 'Approve' ? 'text-success' : 'text-danger'
                              } >{dataTrans.paymentStat}</td>
                              <td>V</td>
                           </tr>
                           ))}

                     </tbody>
                  </Table>
               </div>
            </div>

         </div>
      </div>
   )
}

export default Transaction
