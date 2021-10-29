import React from "react";
import './Products.css'

function Products(props) {
    return (
            <div id="container">
                    <div className="cards">
                        <img
                            width="220px" height='220px'
                            src={props.img} alt={props.id} />
                    </div>
                    <br />
                    <div className="">
                        <span>{props.name}</span>
                    </div>
                    <div className="ps-2">
                        <b style={{ color: 'red' }}>Rs. {props.price}</b>
                    </div>
                    <br />
                </div>
    );
}
export default Products;
