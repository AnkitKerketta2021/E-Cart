import React from 'react'
// import { Card, Button } from 'react-bootstrap'
import './Body.css'
import data from './Data'
import Products from './Products';

function createEntry(data) {
    return (
        <Products
            key={data.id}
            img={data.img}
            name={data.name}
            price={data.price}
        />
    );
}

function Body() {
    return (
            <div>
                <dl className="dts">{data.map(createEntry)}</dl>
            </div>
    )
}

export default Body
