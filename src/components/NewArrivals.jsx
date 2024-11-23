import React from 'react';
import ProductCard from './ProductCart';
import products from '../data/products';


const NewArrivals = () => {
  return (
    <section className="new-arrivals">
      <h2>New Arrivals</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
