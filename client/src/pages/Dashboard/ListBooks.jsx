import React from 'react'
import book1 from '../../img/buku1.png'
import book2 from '../../img/buku2.png'
import book3 from '../../img/buku3.png'
import book4 from '../../img/buku4.png'
import { CardDeck, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function ListBooks(props) {

   return (
      <div className="ListBooks">
         <CardDeck>
            <Card className="ListBooks-card bg-transparent border-0">
               <Card.Img variant="top" src={book1} />
               <Card.Body className="text-left">
                  <Card.Title className="ListBooks-title" >Serangkai</Card.Title>
                  <Card.Text className="text-muted">
                  Valeri Patkar
                  </Card.Text>
               </Card.Body>
            </Card>
            <Card className="ListBooks-card bg-transparent border-0">
               <Card.Img variant="top" src={book2} />
               <Card.Body className="text-left">
                  <Card.Title className="ListBooks-title" >Z1 - Sd/Mi Buku Siswa Tematik Terpadu</Card.Title>
                  <Card.Text className="text-muted">
                  Afi Yustiyana
                  </Card.Text>
               </Card.Body>
            </Card>
            <Card className="ListBooks-card bg-transparent border-0">
               <Card.Img variant="top" src={book3} />
               <Card.Body className="text-left">
                  <Card.Title className="ListBooks-title" >Kabar Rahasia Dari Alam Kubur</Card.Title>
                  <Card.Text className="text-muted">
                  DR. Kamil Yusuf Al-Atum
                  </Card.Text>
               </Card.Body>
            </Card>
            <Link to="/Dashboard" onClick={props.detailbook} >
               <Card className="ListBooks-card bg-transparent border-0">
                  <Card.Img variant="top" src={book4} />
                  <Card.Body className="text-left">
                     <Card.Title className="ListBooks-title" >Tess on the Road</Card.Title>
                     <Card.Text className="text-muted">
                     Rachel Hartman
                     </Card.Text>
                  </Card.Body>
               </Card>
            </Link>
         </CardDeck>
      </div>
   )
}

export default ListBooks
