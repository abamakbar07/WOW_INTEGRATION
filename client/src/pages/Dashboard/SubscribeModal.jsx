import React from 'react'

import { Modal, Button } from 'react-bootstrap'

const SubscribeModal = (props) => {
   const show = props.show
   const modalClose = props.modalClose

   return (
      <div>
         <Modal show={show} onHide={modalClose}>

            <Modal.Body className="text-success">Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction, thank you</Modal.Body>

         </Modal>
      </div>
   )
}

export default SubscribeModal
