import React, { useState, useEffect, useContext } from "react";

import { CardDeck, Card, Col, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { API } from "../../config/api";
import { AppContext } from "../../context/globalContext";

const ProfileListbooks = () => {
  const history = useHistory();

  const [state, dispatch] = useContext(AppContext);
  const users = state.user.id

  const [loading, setLoading] = useState(true);
  const [listBook, setListBook] = useState({});

  const pushDetailBook = (idBook) => {
    history.push("/dashboard/book-read/" + idBook);
  };

  const getListBook = async () => {
    try {
      setLoading(true);
      const result = await API.get("/userlistbooks/"+users);
      console.log(result.data.data.listbooks);
      setListBook(result.data.data.listbooks);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListBook();
  }, []);

  return (
    <div className="ListBooks">
      {loading ? (
        <Col sm={12} className="container text-center p-5 m-5">
          <Spinner animation="border" role="status"></Spinner>
        </Col>
      ) : listBook.length < 1 ? (
         <div className="text-center" style={{width: "60vw"}}>
            <div className="">You dont have book list, get another one!</div>
         </div>
      ) : (
        <CardDeck>
          {listBook.map((book) => (
            <Col>
              <Link onClick={(idBook) => pushDetailBook(book.idBook.id)}>
                <Card className="ListBooks-card bg-transparent border-0">
                  <Card.Img
                    variant="top"
                    src={"http://localhost:5000/books/" + book.idBook.bookThumbnail}
                    style={{
                      width: "10vw",
                      height: "30vh",
                    }}
                  />
                  <Card.Body className="text-left p-0 pt-2">
                    <Card.Title className="ListBooks-title">
                      {book.idBook.title}
                    </Card.Title>
                    <Card.Text className="text-muted">{book.idBook.author}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </CardDeck>
      )}
    </div>
  );
};

export default ProfileListbooks
