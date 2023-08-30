import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Collection = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const db = getFirestore();

    const itemCollections = collection(db, 'TAPETES');
    getDocs(itemCollections).then((snapshots) =>{
      const docs = snapshots.docs.map((doc)=> doc.data());
      setProducts(docs);
    });
  }, []);
  

  return (
    <div>
      <h1>Producto</h1>
      {
        products.map((product) =>(
          <div key={product.id}>
            <p>nombre:{product.nombre}</p>
            <p>categoria:{product.categoria}</p>
            <p>descripcion{product.descripcion}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Collection;