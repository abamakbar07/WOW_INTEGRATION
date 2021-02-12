import React from 'react'
import email from '../../img/icon/email.png'
import genderMale from '../../img/icon/genderMale.png'
import phone from '../../img/icon/phone.png'
import address from '../../img/icon/address.png'
import profileDetail from '../../img/profileDetail.png'

import { Card, ListGroup } from 'react-bootstrap'

function ProfileDetail() {
   return (
      <div className="ProfileDetail col-sm-12">
         <Card body className="border-0">
            <div className="row">
            <div className="col-md-8">
               <ListGroup horizontal>
                  <ListGroup.Item className="col-1 border-0 bg-transparent">
                     <img className="" src={email} alt="" />
                  </ListGroup.Item>
                  <ListGroup.Item className="text-left border-0 bg-transparent">
                     <p className="m-0 font-weight-bold">
                        egigans@gmail.com
                     </p>
                     <small className="text-muted">
                        Email
                     </small>
                  </ListGroup.Item>
               </ListGroup>
               <ListGroup horizontal>
                  <ListGroup.Item className="col-1 border-0 bg-transparent">
                     <img className="" src={genderMale} alt="" />
                  </ListGroup.Item>
                  <ListGroup.Item className="text-left border-0 bg-transparent">
                     <p className="m-0 font-weight-bold">
                        Male
                     </p>
                     <small className="text-muted">
                        Gender
                     </small>
                  </ListGroup.Item>
               </ListGroup>
               <ListGroup horizontal>
                  <ListGroup.Item className="col-1 border-0 bg-transparent">
                     <img className="" src={phone} alt="" />
                  </ListGroup.Item>
                  <ListGroup.Item className="text-left border-0 bg-transparent">
                     <p className="m-0 font-weight-bold">
                        0812-8623-8911
                     </p>
                     <small className="text-muted">
                        Mobile Phone
                     </small>
                  </ListGroup.Item>
               </ListGroup>
               <ListGroup horizontal>
                  <ListGroup.Item className="col-1 border-0 bg-transparent">
                     <img className="" src={address} alt="" />
                  </ListGroup.Item>
                  <ListGroup.Item className="text-left border-0 bg-transparent">
                     <p className="m-0 font-weight-bold">
                        Perumahan Permata Bintaro Residence C-3
                     </p>
                     <small className="text-muted">
                        Address
                     </small>
                  </ListGroup.Item>
               </ListGroup>
            </div>
            <div className="col-md-4">
               <ListGroup>
                  <img src={profileDetail} style={{width: "100%"}} alt="" />
               </ListGroup>
               <ListGroup className="mt-2">
                  <div className="btn btn-danger">Edit Profile</div>
               </ListGroup>
            </div>
            </div>
         </Card>
      </div>
   )
}

export default ProfileDetail
