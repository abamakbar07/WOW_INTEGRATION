import React, { useContext, useEffect, useState } from 'react'
import logo from '../img/logo.png'
import profileDefault from '../img/profileDefault.jpg'
import iconProfile from '../img/icon/iconProfile.png'
import iconSubscibe from '../img/icon/iconSubscibe.png'
import iconLogout from '../img/icon/iconLogout.png'

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import { AppContext } from '../context/globalContext'

const SideMenu = (props) => {
   const [state, dispatch] = useContext(AppContext);
   const isAdmin = state.isAdmin;

   const [transaction, setTransaction] = useState()

   const getTransaction = async () => {
      try {
         await setTransaction(props.userTransaction)
      } catch (error) {
         console.log("Error sidemenu gettransaction")
      }
   }

   console.log(transaction)
   console.log(props.userTransaction)
   const userTransaction = props.userTransaction
   console.log(userTransaction)

   let paymentStatus = null

   if (userTransaction) {
      paymentStatus = userTransaction.paymentStatus
   }
   console.log(paymentStatus)

   const signOut = async (e) => {
      dispatch({
         type: "LOGOUT"
      })
   }

   useEffect(() => {
      getTransaction()
   }, [])

   return (
      <div className="SideMenu container">
         <div className="Dashboard-comp-profile">
            <Link to="/Dashboard" onClick={props.home}>
               <Card.Img src={logo} style={{width: "105px", height: "84px", transform: "rotate(-15deg)"}} />
            </Link>
         </div>
         <div className="Dashboard-comp-profile">
            <Link to='/Dashboard' style={{maxWidth: "125px", maxHeight: "125px"}} onClick={props.profile} >
               <Card.Img className="rounded-circle mt-2" src={profileDefault} style={{height: "125px", width:"125px", border: "5px solid black"}} />
            </Link>
         </div>
         <h4 className="font-weight-bold mt-2">{state.user.fullname}</h4>
         <h6 className={
               state.paymentStatus == "Success" ? 'mt-2 text-success font-weight-bold' : state.paymentStatus == "Pending" ? 'mt-2 text-warning font-weight-bold' : 'mt-2 text-danger font-weight-bold'
            }>{state.paymentStatus == "Success" ? 'Subscribed' : 'Not Subscribed Yet' }
         </h6>

         <hr className="Dashboard-comp-profile-line"></hr>

         <div className="pt-5 d-flex">
            <div className="form-group row">
               <Link to='/Dashboard' onClick={props.profile} >
                  <button className="btn btn-block" style={{display: "flex"}}>
                     <div className="col-1 pr-4">
                        <img alt="" className="Dashboard-sidebar-icon" src={iconProfile} />
                     </div>
                     <p className="Dashboard-sidebar-text col-12 text-left mb-0 ml-2 text-secondary" >Profile</p>
                  </button>
               </Link>
            </div>
         </div>

         <div className="pt-5 d-flex">
            <div className="form-group row">
               <Link to={isAdmin ? '/Admin' : '/Dashboard'} onClick={props.subscribe}>
                  <button className="btn btn-block" style={{display: "flex"}}>
                     <div className="col-1 pr-4">
                        <img alt="" className="Dashboard-sidebar-icon" src={iconSubscibe} />
                     </div>
                     <p className="Dashboard-sidebar-text col-12 text-left mb-0 ml-2 text-secondary" >{isAdmin ? 'Admin Page' : 'Subscribe'}</p>
                  </button>
               </Link>
            </div>
         </div>

         <hr className="Dashboard-comp-profile-line"></hr>

         <div className="pt-5 d-flex">
            <div className="form-group row">
               <Link to="/">
                  <button className="btn btn-block" style={{display: "flex"}} onClick={(e) => signOut(e)}>
                     <div className="col-1 pr-4">
                        <img alt="" className="Dashboard-sidebar-icon" src={iconLogout} />
                     </div>
                     <p className="Dashboard-sidebar-text col-12 text-left mb-0 ml-2 text-secondary" >Logout</p>
                  </button>
               </Link>
            </div>
         </div>

      </div>

   )
}

export default SideMenu
