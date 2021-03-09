import React from 'react'

import { Modal } from 'react-bootstrap'

const BookDetailModalRead = (props) => {
    const show = props.show
    const modalClose = props.modalClose

    return (
        <div>
            <Modal show={show} onHide={modalClose}>

                <Modal.Body className="text-danger">please make a payment to read the latest books</Modal.Body>

            </Modal>
        </div>
    )
}

export default BookDetailModalRead
