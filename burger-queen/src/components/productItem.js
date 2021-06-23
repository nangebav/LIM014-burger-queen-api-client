
import React, { useState, useEffect } from 'react';
import '../style/main.scss'
import UnitaryProduct from './unitaryProduct';

function ProductItem(props) {

  
  const products = props.products;

  const listProduct = products.map((product) => 
  
    <UnitaryProduct name={product.name} price={product.price} _id={product._id} image={product.image} key={product._id}/>

  );
    return (
      <>{listProduct}</>
    );
}
  
export default ProductItem;

