import React, { useEffect, useState } from 'react';
import Product from '../../molecules/Product/Product';
import styles from './Products.module.scss';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  const getData=async()=>{
       const res = await axios.get("http://localhost:5000/products")
       console.log(res.data)
      setProducts(res.data.products);
    };

  useEffect(()=>{
      getData();
  },[]); 
  console.log(products)

  return (
    <>
      <h1 className={styles.title}>Products Detaisl</h1>

      <div className={styles.products}>
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
