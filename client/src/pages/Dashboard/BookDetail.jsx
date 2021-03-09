import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, ListGroup, Row, Col, Container } from 'react-bootstrap'

import { BookContext } from '../../context/bookContext'
import SideMenu from '../../components/SideMenu'
import iconBookmark from '../../img/icon/bookmark.png'
import { API } from '../../config/api'

const BookDetail = (props) => {
  const { id } = useParams()
  const [stateBook] = useContext(BookContext)
  const [bookmark, setBookmark] = useState(false)
  const [loading, setLoading] = useState(true)
  const [book, setBook] = useState({})

  const getBook = async () => {
    try {
        setLoading(true)
        const result = await API.get("/book/" + id);
        await setBook(result.data.data.book)
        setLoading(false)
    } catch (error) {
        console.log("Error getBook")
    }
  }

  const getBookmark = () => {
    setBookmark(true)
  }

  useEffect(() => {
    getBook()
  }, [])

  return (
    <div className="BookDetail pt-3 pb-3">
      <Container fluid>
        <Row className="Dashboard-row">
          <Col className="Dashboard-comp Dashboard-comp-card profile" md={3}>
            <Card body className="bg-transparent border-0">
              <SideMenu
              // home={disHome}
              // subscribe={disSubscribe}
              // profile={disProfile}
              />
            </Card>
          </Col>

          <Col className="Dashboard-comp-hiden" md={3}></Col>
          <Col className="Dashboard-comp Dashboard-comp-card" md={9}>
            <Card body className="border-0 bg-transparent">
              <div className="row">
                <div className="col-md-4">
                  <ListGroup>
                    <img
                      alt=""
                      src={"http://localhost:5000/books/" + book.bookThumbnail}
                      style={{ width: "100%" }}
                    />
                  </ListGroup>
                </div>

                <div className="col-md-8">
                  <ListGroup horizontal>
                    <ListGroup.Item className="text-left border-0 bg-transparent">
                      <p className="BookDetail-title m-0 font-weight-bold">
                        {book.title}
                      </p>
                      <small className="text-muted">{book.author}</small>
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal>
                    <ListGroup.Item className="text-left border-0 bg-transparent mt-3">
                      <p className="m-0 font-weight-bold">Publication date</p>
                      <small className="text-muted">
                        {book.publicationDate}
                      </small>
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal>
                    <ListGroup.Item className="text-left border-0 bg-transparent">
                      <p className="m-0 font-weight-bold">Pages</p>
                      <small className="text-muted">{book.pages}</small>
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup horizontal>
                    <ListGroup.Item className="text-left border-0 bg-transparent">
                      <p className="m-0 font-weight-bold text-danger">ISBN</p>
                      <small className="text-muted">{book.isbn}</small>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>

              <div className="row mt-5 mb-5">
                <div className="col-sm-12">
                  <p className="BookDetail-aboutTitle text-left">
                    About This Book
                  </p>
                  <p className="BookDetail-aboutSub text-left">{book.about}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 text-right">
                  <Link onClick={getBookmark}>
                    <button
                      className="btn btn-danger m-1"
                      style={{ display: bookmark ? "none" : "inline-block" }}
                    >
                      Add My List{" "}
                      <img alt="" className="ml-2" src={iconBookmark} />
                    </button>
                  </Link>
                  <Link to={"/dashboard/book-read/" + book.id}>
                    <button
                      className="btn btn-light m-1"
                      style={{
                        background: "rgba(205, 205, 205, 0.7)",
                        display: bookmark ? "inline-block" : "none",
                      }}
                    >
                      Read Book <div className="vRotate ml-2">V</div>
                    </button>
                  </Link>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BookDetail
