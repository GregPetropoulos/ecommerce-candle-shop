import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`} alt=''>
        <Card.Img src={product.image} variant='top'></Card.Img>
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`} alt=''>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <div className='my-3'>
            {product.rating} from {product.numReview} Reviews
          </div>
        </Card.Text>
        <Card.Text as='h3'>$ {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
