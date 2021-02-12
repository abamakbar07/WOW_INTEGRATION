import React, { useState } from 'react'
import logo from './../img/logo.png'
import profile from './../img/profile.png'

import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AdminNavbar(props) {

   return (
      <div className="AdminNavbar">
         <div className="container-fluid" style={{
            position: "fixed"
         }}>
            <Navbar className="justify-content-between bg-transparent pt-3">
               <Link to="/Dashboard" >
                  <img alt="" src={logo} width="105px" style={{transform: "rotate(-15deg)"}} />
               </Link>
               <Link to="/Admin" onClick={props.addbook}>
                  <img alt="" src={profile} width="50px" />
               </Link>
            </Navbar>
         </div>
         
      </div>
   )
}

export default AdminNavbar
