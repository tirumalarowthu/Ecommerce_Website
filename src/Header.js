import React from 'react'
import { Link } from 'react-router-dom'
import "./HeaderStyles.css"
const Header = () => {
    return (
        <React.Fragment>
            <div className='header my-3'>
                <div style={{padding:"0px"}} className='division'>
                    <ol className='headerlist nav'>
                        <li><span><i className="fa fa-home" aria-hidden="true"></i></span>Home</li>
                        <li><span><i className="fa fa-info" aria-hidden="true"></i></span>About</li>
                        <li><span><i className="fa fa-address-book" aria-hidden="true"></i></span>Contact US</li>
                        <li><span><i className="fa fa-sign-in" aria-hidden="true"></i></span>Signin</li>
                        {/* <li><span><i className="fa fa-sign-out" aria-hidden="true"></i></span>Log Out</li> */}
                        <li><span><i className="fa fa-reddit-square" aria-hidden="true"></i></span>Wishlist</li>
                        <li><a><span><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></span>Cart()</a></li>
                        <li><span className='search-icon'><i className='fa fa-search'></i></span><input className='search' type="text" placeholder='Search ...' /> </li>
                    </ol>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header