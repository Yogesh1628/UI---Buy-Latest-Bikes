import React from 'react';

const ProductCard = ({ product }) => {
  const handleClick = () => {
    alert(`Clicked on ${product.name}`); 
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product.image} alt={product.name} />
      <h3 className='product-card-name'>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
