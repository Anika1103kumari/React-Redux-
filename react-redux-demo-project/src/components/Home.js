import React from 'react';
import './Home.css';
import AddCartIcon from '../assests/images/cart1.png'
import CartMobile from '../assests/images/cartmobile.jpeg'
const Home = (props) => {
    console.log(props,"Home")
    return (
        <div>

            <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>Home</h1>
            </div>
       
           
            <div className='cart-wrapper'>
                <div className="img-wrapper item"></div>
                <img src={CartMobile} className="Cart-Img" alt="img" />
                <div className='text-wrapper item'>
                    <span>I-Phone</span>
                    <span>Price $1000</span>
                </div>
                <div className='btn-wrapper item'>
                    <button onClick={()=>props.addToCartHandler({price:1000,name:"i phone 11"})}>Add to Cart</button>
                    <button style={{background:"red"}} onClick={()=>props.removeToCartHandler()}>Remove to Cart</button>
                    
               
                </div>

            </div>
           
        </div>
    );
}

export default Home;
