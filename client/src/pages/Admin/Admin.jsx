import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

import AdminNavbar from '../../components/AdminNavbar'
import AdminTransaction from './AdminTransaction'
import AdminAddBook from './AdminAddBook'
import { AppContext } from '../../context/globalContext'

const Admin = () => {
   const history = useHistory()
   const [state, dispatch] = useContext(AppContext)
   const [loading, setLoading] = useState(true)
   const [addBook, setAddBook] = useState(false)

   const [show, setShow] = useState(false)

   const modalShow = () => {
      setShow(true);
      setLoading(false)
   }
   
   const modalClose = () => {
      setShow(false);
      dispatch({
         type: "ADD_BOOK_MODAL_CLOSE",
         payload: {
            addBookModal: false,
            addBookStatus: null,
         }
      })
      history.push("/")
   }

   const getAddBook = () => {
      setAddBook(!addBook)
   }

   useEffect(() => {
      if (state.addBookModal) modalShow()
   }, [state]) 
   
   return (  
         <div className="Admin">
            <AdminNavbar isAddbook={addBook} addbook={getAddBook} />

               <div style={{display: addBook ? 'none' : 'block'}}>
                  <AdminTransaction />
               </div>

               <div style={{display: addBook ? 'block' : 'none'}}>
                  <AdminAddBook modalShow={modalShow} addbook={getAddBook} />
               </div>

            <Modal show={show} onHide={modalClose}>
               <Modal.Header closeButton>
                  <Modal.Title>Adding New Book</Modal.Title>
               </Modal.Header>
               <Modal.Body className={state.addBookStatus ? "text-success" : "d-none"}>Book Successfuly added!</Modal.Body>
               <Modal.Body className={state.addBookStatus ? "d-none" : "text-danger"}>Failed to adding new book! Cek console.log</Modal.Body>
               <Modal.Footer>
                  <Button variant="danger" onClick={modalClose}>
                     Ok
                  </Button>
               </Modal.Footer>
            </Modal>
         </div>
   )
}

export default Admin
