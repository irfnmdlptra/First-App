import { useState } from "react";

const Products = ()=> {
    const url = 'https://fakestoreapi.com/products';
    const [products,setProducts] = useState([]);
    return (
        <>
        <h1>Products</h1>
        </>
    )
}

export default Products