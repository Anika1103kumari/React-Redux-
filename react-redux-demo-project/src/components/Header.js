import React from 'react';
import AddCartIcon from '../assests/images/cart1.png'

const Header = (props) => {
    return (
        <div>
            <div className='add-to-cart'><img src={AddCartIcon} />
                <span className='nuber-count-add-cart'  >{props?.data?.cardItems?.length}</span></div>
        </div>
    );
}

export default Header;
