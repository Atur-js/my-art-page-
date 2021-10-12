import React from 'react';
import { Link } from 'react-router-dom';

import CartProducts from './CartProducts';
import Layout from '../../components/Layout';
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const Cart = () => {

    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useCart();
    
    return ( 
        <React.Fragment>
        <div>
        <Layout title="Cart" description="This is the Cart page" style={{marginTop:"50px"}} >
            <div  >
                <div className="text-center mt-5">
                    
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3"  >
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div className="p-3 text-center text-muted">
                                <button style={{color:"black",border:"none",borderRadius:"5px"}}> Your cart is empty</button>
                            </div>
                        }

                        { checkout && 
                            <div className="p-3 text-center text-success">
                                <button style={{color:"black",border:"none",borderRadius:"5px",backgroundColor:"lightgreen"}}>Checkout successfull</button>
                                <br/>
                                <Link to="/" className="btn btn-outline-success btn-sm" style={{color:"black",backgroundColor:"white",border:"none",borderRadius:"5px"}}>BUY MORE</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Total Payment</p>
                                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2" onClick={handleCheckout}>CHECKOUT</button>
                                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                                </div>

                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </Layout>
        </div>
        </React.Fragment>
     );
}
 
export default Cart;