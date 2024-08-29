import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div style={{width:'100%',height:'300px'}} className='d-flex justify-content-center align-items-center flex-column mt-5 bg-primary'>
<div className='d-flex justify-content-evenly align-item-center mb-5 w-100' style={{color:'white'}}>
<div style={{width:'400px',color:'white'}}>
  <h4 >

  <i style={{color:'white'}} class="fa-solid fa-cart-shopping fa-bounce me-3">E-KART</i>
  </h4>
  <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, vitae animi? Atque magni veniam, aperiam, facere impedit tempore incidunt ullam, dolores cumque amet vero id esse cum? Inventore, distinctio ipsum.</h6>
</div>
<div className='d-flex flex-column'>
<h4>Links</h4>
<Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
<Link to={'/cart'}style={{textDecoration:'none',color:'white'}}>Cart</Link>
<Link to={'/wishlist'}style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
</div>
<div className='d-flex flex-column'>
<h4>Guides</h4>
<Link to={'https://react.dev'}target='blank' style={{textDecoration:'none', color:'white'}}>React</Link>
<Link to={'https://react.dev'}target='blank' style={{textDecoration:'none', color:'white'}}>React Bootstrap</Link>
<Link to ={'https://react.dev'}target='blank' style={{textDecoration:'none', color:'white'}}>React Watch</Link>
</div>
<div className='d-flex flex-column'>
<h4>Contact</h4>
<div className='d-flex'>
<input type='text'className='form control' placeholder='Enter Email Id'/>
<button className='btn btn-warning  ms-2'>Subscribe</button>
</div>
<div className='d-flex justify-content-evenly mt-3'>
<Link style={{textDecoration:'none', }}className='text-warning'><i class="fa-brands fa-instagram fa-2x"></i></Link>
<Link style={{textDecoration:'none', }}className='text-warning'><i class="fa-brands fa-facebook fa-2"></i></Link>
<Link style={{textDecoration:'none',}}className='text-warning'><i class="fa-brands fa-reddit-alien fa-2"></i></Link>
<Link style={{textDecoration:'none',}}className='text-warning'><i class="fa-brands fa-linkedin fa-2"></i></Link>

</div>
</div>
</div>
<p style={{color:'white'}}>Copyright 	&#169; 2024 E-KART build with react redux</p>
    </div>
    </>
  )
}

export default Footer