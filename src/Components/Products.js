import { useEffect, useState } from "react";

const Products = ()=> {
    const url = 'https://fakestoreapi.com/products';
    const [products,setProducts] = useState([]);

    const getDataProducts = async ()=> {
       const response = await fetch(url);
        const dataProducts = await response.json();
        setProducts(dataProducts);
        console.log(products)
    } 

    useEffect( ()=> {
        getDataProducts();
    })
    return (
        <>
        <h1>Products</h1>
        </>
    )
}

export default Products