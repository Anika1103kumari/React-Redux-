import React from 'react';
import './Home.css';
import AddCartIcon from '../assests/images/addcarticon.jpg'
import CartMobile from '../assests/images/cartmobile.jpeg'
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <div className='add-to-cart'><img src ={AddCartIcon} /></div>
            <div className='cart-wrapper'>
                <div className="img-wrapper item"></div>
                <img src={CartMobile} className="Cart-Img" alt="img" />
                <div className='text-wrapper item'>
                    <span>I-Phone</span>
                    <span>Price $1000</span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
