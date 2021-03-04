import React, { useContext } from 'react'
import logo from './../img/logo.png'
import profileDefault from '../img/profileDefault.jpg'
import iconLogout from '../img/icon/iconLogout.png'
import iconBook from '../img/icon/addBookGrey.png'

import { Navbar, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { AppContext } from '../context/globalContext'

const AdminNavbar = (props) => {
   const addBook = props.isAddbook

   const [state, dispatch] = useContext(AppContext);

   const signOut = () => {
      dispatch({
         type: "LOGOUT"
      })
   }

   return (
      <div className="AdminNavbar">
         <div className="container-fluid" style={{
            position: "fixed"
         }}>
            <Navbar className="justify-content-between bg-transparent pt-3">
               <Link to="/admin" >
                  <img alt="" src={logo} width="105px" style={{transform: "rotate(-15deg)"}} />
               </Link>

               <Dropdown drop="left">
                  <Dropdown.Toggle className="bg-transparent border-0">
                     <img alt="" className="rounded-circle" style={{border: "3px solid black"}} src={profileDefault} width="50px" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item className="p-0" onClick={props.addbook}>
                        <div className="row container text-right">
                           <div className="">
                              <img alt="" className="ml-3 invert" width="25px" src={iconBook} />
                           </div>
                           <p className="text-left m-0 p-0 text-secondary" >{addBook ? "Transaction" : "Add Book"}</p>
                        </div>
                     </Dropdown.Item>

                     <Dropdown.Divider />

                     <Dropdown.Item className="p-0">
                        <Link onClick={signOut} >
                           <div className="row container text-right">
                              <div className="">
                                 <img alt="" className="ml-3" src={iconLogout} />
                              </div>
                              <p className="text-left m-0 p-0 text-secondary" >Logout</p>
                           </div>
                        </Link>
                     </Dropdown.Item>

                  </Dropdown.Menu>
               </Dropdown>

            </Navbar>
         </div>
         
      </div>
   )
}

export default AdminNavbar
