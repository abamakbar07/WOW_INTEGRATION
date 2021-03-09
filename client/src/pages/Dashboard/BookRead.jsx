import React, { useEffect, useState } from 'react'
import { ReactReader } from 'react-reader'
import { Link, useParams } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { API } from '../../config/api';

import logo from '../../img/logo.png';

const BookRead = () => {
   const { id } = useParams()
   const [loading, setLoading] = useState(true);
   const [book, setBook] = useState({});

   console.log(book.title)

   const getBook = async () => {
      try {
         setLoading(true);
         const result = await API.get("/book/" + id);
         await setBook(result.data.data.book);
         setLoading(false);
      } catch (error) {
         console.log("Error getBook");
      }
   };

   useEffect(() => {
      getBook();
   }, []);

   return (
      <div className="container-fluid" style={{ height: "100vh" }}>
         <Navbar className="justify-content-between bg-transparent pt-3 pb-3">
            <Link to="/dashboard">
            <img
               alt=""
               src={logo}
               width="105px"
               style={{ transform: "rotate(-15deg)", marginLeft: "5rem" }}
            />
            </Link>
         </Navbar>
         <div
            className="mr-3 ml-3"
            style={{ position: "relative", height: "75vh" }}
         >
            {" "}
            <ReactReader
            url={"http://localhost:5000/books/" + book.bookFile}
            title={book.title}
            />
         </div>
      </div>
   );
}

export default BookRead
