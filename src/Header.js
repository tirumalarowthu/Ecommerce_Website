import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./HeaderStyles.css"
import { getTotal } from './redux/cartSlice'
const Header = () => {
    const totalQuantity = useSelector((state) => state.cart.totalCartQuantity)
    const cartItems = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotal())
    }, [cartItems])
    const handleSubmit = (e) => {
        e.preventDefault()
        

    }
    return (
        <React.Fragment>
            <div className='header my-3'>
                <div style={{ padding: "0px" }} className='division'>
                    <ol className='headerlist nav'>
                        <li><Link to="/"><span><i className="fa fa-home" aria-hidden="true"></i></span>Home</Link></li>
                        <li><span><i className="fa fa-info" aria-hidden="true"></i></span>About</li>
                        <li><span><i className="fa fa-address-book" aria-hidden="true"></i></span>Contact US</li>
                        <li><span><i className="fa fa-sign-in" aria-hidden="true"></i></span>Signin</li>
                        {/* <li><span><i className="fa fa-sign-out" aria-hidden="true"></i></span>Log Out</li> */}
                        {/* <li><span><i className="fa fa-reddit-square" aria-hidden="true"></i></span>Wishlist</li> */}
                        <li><Link to="/cart"><span><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></span>Cart({totalQuantity})</Link></li>
                        <li><form onSubmit={handleSubmit}><span className='search-icon'><i className='fa fa-search'></i></span><input id="search" className='search' type="text" placeholder='Search ...' /></form> </li>
                    </ol>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header