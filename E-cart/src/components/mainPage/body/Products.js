import React from "react";
import './Products.css'
import { Button } from 'react-bootstrap'

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
                <h6 style={{
                    color: "#f00"
                }}>₹ {props.price}</h6>
            </div>
            <div><Button id="button" variant="warning">Add to Cart</Button></div>
            <br />
        </div>
    );
}
export default Products;
