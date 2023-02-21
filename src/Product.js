import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './Cart'
import "./HeaderStyles.css"
import dummyProducts from "./products.json"
import { addToCart, deleteFromCart } from './redux/cartSlice'
import { fetchproducts } from './redux/productSlice'
export const Product = () => {
    const products = useSelector((state) => state.productlist.products)
    const status = useSelector((state) => state.productlist.status)
    const dispatch = useDispatch()
   // console.log(dummyProducts.products)

    // console.log(products)
    // console.log(status)
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchproducts())
        }
    }, [dispatch, status])
    var content;
    if (status === "loading") {
        content = <div style={{ width: "50%" }} className='text-center'><img alt="Items" style={{ margin: "100px 100px" }} src="https://i.gifer.com/origin/e0/e0ea055299e92297b2ec0ef1c80696bf_w200.gif" width="100" height="100" /></div>
    }
    else if (status === "success") {
        content = products && products.length > 0 ? <><div className='row'>
            {products.map((item, index) => <div className='p-1 col-lg-3 col-md-4 col-sm-2 col-xs-1  text-center' key={index}>
                <div style={{ height: "100%" }} className='border p-4 rounded '>
                    <img alt="item" height="50%" width="100" src={item.image} />
                    <h5 style={{ height: "20%",overflow:"hidden" }}>{item.title}</h5>
                    <h5 style={{ height: "10%" ,color:"yellowgreen"}}>Special Price:${item.price}</h5>
                    <div className='text-center cartitems'>
                        <button onClick={() => dispatch(addToCart(item))} className='btn btn-primary m-1'>Add to Cart</button>
                        {/* <button  onClick={()=>dispatch(deleteFromCart(item))} className='btn btn-warning m-1' >Remove from Cart</button> */}
                    </div>
                </div>
            </div>)
            }
        </div>
            <div  className='row'>
                {dummyProducts.products.map((item, index) => <div  className='p-1 col-lg-3 col-md-4 col-sm-2 col-xs-1  text-center' key={index}>
                    <div style={{ height: "100%" }} className='border p-4 rounded '>
                        <img alt="item" height="50%" width="100" src={item.thumbnail} />
                        <h5 style={{ height: "20%",overflow:'hidden' }}>{item.title}</h5>
                        <h5 style={{height:"10%",color:"yellowgreen"}}>Special Price:${item.price}</h5>
                        <div className='text-center cartitems'>
                            <button onClick={() => dispatch(addToCart(item))} className='btn btn-primary m-1'>Add to Cart</button>
                            {/* <button  onClick={()=>dispatch(deleteFromCart(item))} className='btn btn-warning m-1' >Remove from Cart</button> */}
                        </div>
                    </div>
                </div>)
                }
            </div>




        </> : null
    }
    else if (status === "failed") {

    }
    return (
        <React.Fragment>
            <div className='container my-4 ' style={{ minHeight: "400px" }}>
                {
                    content
                }

            </div>
        </React.Fragment>
    )
}
