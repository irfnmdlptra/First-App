import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Products = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProducts = await response.json();
    setProducts(dataProducts);
  };

  useEffect(() => {
    getDataProducts();
  });
  return (
    <div className="container">
      <div className="row">
        <h1>My Products</h1>
        {products.map((produk) => {
          return (
            <div className="col-3">
              <CardProduct 
              key={produk.id} 
              title={produl.title} 
              price={produk.price}
              description={produk.description} 
              image={produk.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
function CardProduct(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default Products;
