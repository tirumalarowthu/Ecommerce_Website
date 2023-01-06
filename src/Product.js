import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './Cart'
import { addToCart, deleteFromCart } from './redux/cartSlice'
import { fetchproducts } from './redux/productSlice'
export const Product = () => {
    const products = useSelector((state) => state.productlist.products)
    const status = useSelector((state) => state.productlist.status)
    const dispatch = useDispatch()
    // console.log(products)
    // console.log(status)
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchproducts())
        }
    }, [])
    var content;
    if (status === "loading") {
        content = <div style={{ width: "50%" }} className='text-center'><img style={{ margin: "100px 100px" }} src="https://i.gifer.com/origin/e0/e0ea055299e92297b2ec0ef1c80696bf_w200.gif" width="100" height="100" /></div>
    }
    else if (status === "success") {
        content = products && products.length > 0 ? <div className='row'>
            {products.map((item, index) => <div className='p-1 border col-3 border-2 text-center' key={index}>
                <div style={{ height: "100%" }} className='border '>
                    <img height="50%" width="100" src={item.image} />
                    <h5 style={{ height: "30%" }}>{item.title}</h5>
                    <div className='text-center ' style={{display:"flex",height:"17%",width:"99%",margin:"0px auto"}}>
                        <button onClick={() => dispatch(addToCart(item))}  className='btn btn-primary m-1'>Add to Cart</button>
                        <button onClick={()=>dispatch(deleteFromCart(item))} className='btn btn-warning m-1' >Remove to Cart</button>
                    </div>
                </div>
            </div>)
            }
        </div> : null
    }
    else if (status === "failed") {

    }
    return (
        <React.Fragment>
            <div style={{ minHeight: "400px" }}>
                {
                    content
                }
                <br></br>
                <br></br>
                <div>
                    <Cart />
                </div>
            </div>
        </React.Fragment>
    )
}
