import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating'
const Product = ({ product }) => {
  return (
    <Card className=' my-2 p-3 rounded h-auto'>
      <Link to={`/product/${product._id}`} alt=''>
        <Card.Img src={product.image} variant='top'></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} alt=''>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
         <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        </Card.Text>
        <Card.Text as='h3'>$ {product.price} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
