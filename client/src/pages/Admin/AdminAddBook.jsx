import React, { useState, useContext } from 'react'
import attach from '../../img/icon/attach2.png'
import addBookIcon from '../../img/icon/addBook.png'

import { Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { API } from '../../config/api'
import { AppContext } from '../../context/globalContext'

function AdminAddBook(props) {
   const history = useHistory()
   const modalShow = props.modalShow
   const [state, dispatch] = useContext(AppContext)
   const [loading, setLoading] = useState(false);

   const [previewImage, setPreviewImage] = useState({
      file : null,
   })

   const [addBook, setAddBook] = useState({
      title: "",
      publicationDate: "",
      pages: "",
      author: "",
      isbn: "",
      about: "",
      bookThumbnail: null,
      bookFile: null,
   })

   const onChange = (e) => {
      const updateAddBook = { ...addBook };
      updateAddBook[e.target.name] = e.target.type === "file" ? e.target.files[0] : e.target.value;
      setAddBook(updateAddBook)
   };
   
   const onUploadThumbnail = (e) => {
      const updateAddBook = { ...addBook };
      updateAddBook[e.target.name] = e.target.type === "file" ? e.target.files[0] : e.target.value;
      setAddBook(updateAddBook)
      setPreviewImage({
         file: URL.createObjectURL(e.target.files[0])
      })
   }

   const onUploadEpub = (e) => {
      const updateAddBook = { ...addBook };
      updateAddBook[e.target.name] = e.target.type === "file" ? e.target.files[0] : e.target.value;
      setAddBook(updateAddBook)
   }

   const { title, publicationDate, pages, author, isbn, about, bookThumbnail, bookFile } = addBook

   const onSubmit = async (e) => {
      e.preventDefault();
      try {
         const form = new FormData();

         form.append("title", title);
         form.append("publicationDate", publicationDate);
         form.append("pages", pages);
         form.append("author", author);
         form.append("isbn", isbn);
         form.append("about", about);
         form.append("bookThumbnail", bookThumbnail);
         form.append("bookFile", bookFile);

         const config = {
            header: {
               "Content-Type": "multipart/form-data",
            },
         };

         setLoading(true);

         const book = await API.post("/book", form, config)

         setLoading(false)

         setAddBook({
            title: "",
            publicationDate: "",
            pages: "",
            author: "",
            isbn: "",
            about: "",
            bookThumbnail: null,
            bookFile: null,
         })

         dispatch({
            type: "ADD_BOOK_MODAL_OPEN",
            payload: {
               addBookModal: true,
               addBookStatus: true,
            }
         })
         history.push("/")
      } catch (error) {
         console.log(error)
         dispatch({
            type: "ADD_BOOK_MODAL_OPEN",
            payload: {
               addBookModal: true,
               addBookStatus: false,
            }
         })
         history.push("/")
      }
   }

   return (
      <div className="pt-5">
         <div className="pt-5">
            <div className="container pl-5 pr-5" style={{paddingTop: '5vh'}}>
               <div className="row">
                  <div className="col-md-12">
                     <h1 className="Admin-title text-left mb-5">Add Book</h1>
                     <Form.Group onSubmit={(e) => onSubmit(e)}>
                        <Form.Control onChange={(e) => onChange(e)} name="title" className="bgTextboxSubs" size="lg" type="text" placeholder="Title" />
                        <br />
                        <Form.Control onChange={(e) => onChange(e)} name="publicationDate" className="bgTextboxSubs" size="lg" type="text" placeholder="Publication Date" />
                        <br />
                        <Form.Control onChange={(e) => onChange(e)} name="pages" className="bgTextboxSubs" size="lg" type="text" placeholder="Pages" />
                        <br />
                        <Form.Control onChange={(e) => onChange(e)} name="author" className="bgTextboxSubs" size="lg" type="text" placeholder="Author" />
                        <br />
                        <Form.Control onChange={(e) => onChange(e)} name="isbn" className="bgTextboxSubs" size="lg" type="text" placeholder="ISBN" />
                        <br />
                        <Form.Control onChange={(e) => onChange(e)} name="about" className="bgTextboxSubs" size="lg" as="textarea" rows={3} placeholder="About This Book" />
                        <br />
                        <div className="form-group col-md-4 pl-0 pr-0">
                           <label for="bookThumbnail" className="bgTextboxAdd form-control">
                              <div className="justify-content-between row ml-1 mr-1">
                                 <p className="text-left ">
                                    Attache thumbnail book
                                 </p>
                                 <div className="">
                                    <img alt="" src={attach} />
                                 </div>
                              </div>
                           </label>
                           <input onChange={(e) => onUploadThumbnail(e)} name="bookThumbnail" id="bookThumbnail" type="file" style={{display:"none"}} />
                           <img  alt=""
                                 src={previewImage.file}
                                 style={{
                                    width: "240px"
                                 }} />
                        </div>
                        <div className="form-group col-md-4 pl-0 pr-0">
                           <label for="bookFile" className="bgTextboxAdd form-control">
                              <div className="justify-content-between row ml-1 mr-1">
                                 <p className="text-left ">
                                    Attache book file
                                 </p>
                                 <div className="">
                                    <img alt="" src={attach} />
                                 </div>
                              </div>
                           </label>
                           <input onChange={(e) => onUploadEpub(e)} name="bookFile" id="bookFile" type="file" style={{display:""}} />
                        </div>
                        <div className="row">
                           <div className="col-sm-12 text-right">
                              <button className="btn btn-dangerAdd m-1" type="submit" onClick={(e) => onSubmit(e)}>
                                 Add Book <img alt="" className="ml-2" src={addBookIcon} />
                              </button>
                           </div>
                        </div>
                     </Form.Group>
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default AdminAddBook
