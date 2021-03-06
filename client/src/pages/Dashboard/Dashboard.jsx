import React, { useContext, useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import SideMenu from '../../components/SideMenu'
import MainContent from './MainContent'
import Subscribe from './Subscribe'
import Profile from './Profile'
import BookDetail from './BookDetail'

import SubscribeModal from './SubscribeModal'
import { AppContext } from '../../context/globalContext'
import { useHistory } from 'react-router-dom'
import { API } from '../../config/api'

const Dashboard = () => {
   const history = useHistory()
   const [state, dispatch] = useContext(AppContext)
   const [bookDetailPage, setBookDetailPage] = useState(null)

   const [home, setHome] = useState(true)
   const [subscribe, setSubscribe] = useState(false)
   const [profile, setProfile] = useState(false)
   const [detailbook, setDetailbook] = useState(false)

   const [userTransaction, setUserTransaction] = useState()

   const [show, setShow] = useState(false)

   const getTransaction = async () => {
    try {
      const result = await API.get("/transaction/" + state.user.id)
      setUserTransaction(result.data.data.transaction)
    } catch (error) {
      console.log("error getTransaction")
    }
   }

   const modalShow = () => {
      setShow(true);
   }
   
   const modalClose = () => {
      setShow(false);
      dispatch({
         type: "SUBSCRIBE_MODAL",
         payload: {
            subscribeModal: false,
         }
      })
      history.push("/")
   }

   const disSubscribe = () => {
      setHome(false)
      setSubscribe(true)
      setProfile(false)
      setDetailbook(false)
   }

   const disProfile = () => {
      setHome(false)
      setSubscribe(false)
      setProfile(true)
      setDetailbook(false)
   }
   const disHome = () => {
      setHome(true)
      setSubscribe(false)
      setProfile(false)
      setDetailbook(false)
   }
   const disDetailbook = () => {
      setHome(false)
      setSubscribe(false)
      setProfile(false)
      setDetailbook(true)
   }

   useEffect(() => {
      if (state.subscribeModal) modalShow()
   }, [state])

   useEffect(() => {
     getTransaction()
   }, [])
   
   return (
     <div className="Dashboard pt-3 pb-3">
       <Container fluid>
         <Row className="Dashboard-row">
           <Col className="Dashboard-comp Dashboard-comp-card profile" md={3}>
             <Card body className="bg-transparent border-0">
               <SideMenu
                 home={disHome}
                 subscribe={disSubscribe}
                 profile={disProfile}
               />
             </Card>
           </Col>

           <Col className="Dashboard-comp-hiden" md={3}></Col>
           <Col className="Dashboard-comp Dashboard-comp-card" md={9}>
             <Card
               className="Dashboard-comp-content bg-transparent border-0"
               body
             >
               <div style={{ display: home ? "block" : "none" }}>
                 <MainContent detailbook={disDetailbook} setBookDetailPage={setBookDetailPage} />
               </div>
               <div style={{ display: subscribe ? "block" : "none" }}>
                 <Subscribe userTransaction={userTransaction} />
               </div>
               <div style={{ display: profile ? "block" : "none" }}>
                 <Profile />
               </div>
               <div style={{ display: detailbook ? "block" : "none" }}>
                 <BookDetail bookDetailPage={bookDetailPage} />
               </div>
             </Card>
           </Col>
         </Row>

         <SubscribeModal show={show} modalClose={modalClose} />
       </Container>
     </div>
   );
}

export default Dashboard
