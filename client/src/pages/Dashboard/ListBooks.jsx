import React, { useState, useEffect, useContext } from 'react'

import { CardDeck, Card, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { API } from '../../config/api'
import { BookContext } from '../../context/bookContext';


const ListBooks = (props) => {
  const [stateBook, dispatchBook] = useContext(BookContext)
  const [loading, setLoading] = useState(true)
  const [listBook, setListBook] = useState({})

  const getBookDetail = (id) => {
    dispatchBook({
      type: "SET_BOOK_DETAIL",
      payload: id
    })
  }

  
  const getListBook = async () => {
    try {
        setLoading(true)
        const result = await API.get("/books")
        console.log(result.data.data.books)
        setListBook(result.data.data.books);
        setLoading(false)
    } catch (error) {
        console.log(error)
    }
  }

   useEffect(() => {
      getListBook()
   }, [])

   return (
     <div className="ListBooks">
       {loading ? (
         <Col sm={12} className="container text-center p-5 m-5">
           <Spinner animation="border" role="status"></Spinner>
         </Col>
       ) : (
         <CardDeck>
           {listBook.map((book) => (
             <Col sm={3} >
                <Link to={"/dashboard/book-detail/" + book.id}>
                  <Card
                    className="ListBooks-card bg-transparent border-0"
                    onClick={props.detailbook}
                    >
                    <Card.Img
                      variant="top"
                      src={"http://localhost:5000/books/" + book.bookThumbnail}
                      style={{
                        width: "10vw",
                        height: "30vh",
                        }}
                        />
                    <Card.Body className="text-left">
                      <Card.Title className="ListBooks-title">
                        {book.title}
                      </Card.Title>
                      <Card.Text className="text-muted">{book.author}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
             </Col>
           ))}
         </CardDeck>
       )}
     </div>
   );
}

export default ListBooks
