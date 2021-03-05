import React from 'react'

const SubscribeModal = (props) => {
   return (
      <div>
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

export default SubscribeModal
