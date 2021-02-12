import React, { useState } from 'react'
import SideMenu from '../../comp/SideMenu'
import MainContent from './MainContent'
import Subscribe from './Subscribe'
import Profile from './Profile';
import BookDetail from './BookDetail';

import { Container, Row, Col, Card } from 'react-bootstrap';

function Dashboard() {
   const [home, setHome] = useState(true)
   const [subscribe, setSubscribe] = useState(false)
   const [profile, setProfile] = useState(false)
   const [detailbook, setDetailbook] = useState(false)

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
   
   return (
      <div className="Dashboard pt-3 pb-3">
         <Container fluid>
            <Row className="Dashboard-row">
               <Col className="Dashboard-comp Dashboard-comp-card profile" md={3}>
                  <Card body className="bg-transparent border-0">
                     <SideMenu 
                        home={disHome}
                        subscribe={disSubscribe}
                        profile={disProfile} />
                  </Card>
               </Col>

               <Col className="Dashboard-comp-hiden" md={3}></Col>
               <Col className="Dashboard-comp Dashboard-comp-card" md={9}>
                  <Card className="Dashboard-comp-content bg-transparent border-0" body>
                     <div style={{display: home ? 'block' : 'none'}}>
                        <MainContent detailbook={disDetailbook} />
                     </div>
                     <div style={{display: subscribe ? 'block' : 'none'}}>
                        <Subscribe />
                     </div>
                     <div style={{display: profile ? 'block' : 'none'}}>
                        <Profile />
                     </div>
                     <div style={{display: detailbook ? 'block' : 'none'}}>
                        <BookDetail />
                     </div>
                  </Card>
               </Col>
            </Row>
         </Container>
         
      </div>
   )
}

export default Dashboard
