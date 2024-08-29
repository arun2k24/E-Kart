import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/cartSlice';

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch()
  //hook used to navigate a particular path or page
  const navigate =useNavigate()
  const[total, setTotal]=useState(0)
  const getTotal = ()=>{
    let sum =0;
    cartArray.forEach((item)=> {
      sum = sum + item.price;
      
    })
  setTotal(sum)
  
    
  }
  useEffect(() => {
    getTotal();
  }, [cartArray])
  const handleCart = ()=>{

    alert("Thank You '' Your order placed successfully")
    dispatch( emptyCart())
    navigate('/')
  }
  return (
    <>
    
        {cartArray.length > 0 ? 
          <div className='row w-100'>
          <div className='col-lg-6 m-5'>
            <table className='table shadow border'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Title</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title.slice(0, 20)}...</td>
                    <td>
                      <img src={item.image} alt={item.title} height="70px" width="70px" />
                    </td>
                    <td>💲{item.price}</td>
                    <td>
                      <button variant="outline-danger"
                        onClick={()=>dispatch(removeFromCart(item.id))}
                        ><i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='col-lg-4'>
            <div className=' border shadow p-5'>
              <h3 className='text-primary'>
                Cart Summary
              </h3>
              <h5> Total Number Of Produts:<span className='text-warning fw-bolder'>{cartArray?.length}</span></h5>
              <h5>
                Total Prices:<span className='text-warning fw-bolder'>₹ 300</span>

              </h5>
              <Button className='btn btn-success rounded w-100' onClick={handleCart}>CHECK OUT</Button>
            </div>
          </div>
          </div>
         : 
          <div style={{ height: '100vh' }} className='d-flex align-items-center flex-column'>
            <img src="https://tse2.mm.bing.net/th?id=OIP.D6W-oBbXwD0xSNp6XInukQAAAA&pid=Api&P=0&h=180" alt="Empty Cart" />
            <h3 className='text-danger fw-bolder'>Your Cart Is Empty</h3>
          </div>
          
        }
      
    </>
  );
}

export default Cart;
