import React, { useDebugValue } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { removeFromwishlist } from '../redux/wishlistSlice';


function Wishlist() {
  const wishlistItem = useSelector((state)=>state.wishlistReducer);
  console.log("wishlist items in wishlist page====");
  console.log(wishlistItem)
  const dispatch =useDispatch()
  return (

  <>
  <button className='btn btn-success mt-4 ms-4'>
    <Link to={'/'} style={{textDecoration:'none',color:"white"}}>
    <i class="fa-solid fa-arrow-left me-2" ></i>
    BACK TO HOME
    </Link>
      
    </button>
   <Row className='m-5'>
    
      {
        wishlistItem?.length>0?
        wishlistItem.map((item)=>(
          <Col sm={12} md={6} lg={4} xl={3} className='mb-3'>
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={item.image} height={'200px'}className='p-3'/>
         <Card.Body>
           <Card.Title>{item.title.slice(0,20)}...</Card.Title>
           <Card.Text>
           <p>{item.description.slice(0,50)}...</p>
           <p className='fa-bolder'>Price:&#x20B9;{item.price}</p>
           </Card.Text>
           <div className='d-flex align-item-center justify-content-between'>
           <Button variant="outline-danger"><i class="fa-solid fa-trash"onClick={()=>dispatch(removeFromwishlist(item.id))}></i></Button>
           <Button variant="outline-success"><i class="fa-solid fa-cart-shopping"></i></Button>
           </div>
          
         </Card.Body>
       </Card>
       </Col>
        ))
        :
       
        <div style={{height:'100vh'}}className='d-flex  align-items-center flex-column'>
        < img src="https://tse2.mm.bing.net/th?id=OIP.D6W-oBbXwD0xSNp6XInukQAAAA&pid=Api&P=0&h=180"></img>
        <h3 className='text-danger fw-bolder'>Your Cart Is Empty</h3>
        </div>
       



      }
     
    </Row>
  </>
  )
}

export default Wishlist