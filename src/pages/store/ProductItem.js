import React from 'react';
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useCart();

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return ( 
        <div className="card card-body">
            <img style={{display: "block", margin: "0 auto 10px", height: "90px",width:"120px"}} className="img-fluid" 
            src={product.photo + '?v=' + product.id} alt=""/>
            <div style={{height:"30px"}}></div>
            <p style={{color:"black"}}>{product.name}</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
            <br/>
            <div className="text-right" >
                <a href={product.address}  className="btn btn-link btn-sm mr-2">Details</a>
                
                
                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm">Add more</button>
                }

                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm">Add to cart</button>
                }
                
            </div>
        </div>
    );
}

export default ProductItem;