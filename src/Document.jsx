import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const Document = () => {
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    const db = getFirestore();
  
    const oneItem = doc(db, 'TAPETES', 'En6waXur3l95HqqueZiA');
    getDoc(oneItem).then((snapshot) => {
      if(snapshot.exists()){
        const docs = snapshot.data();
        setProduct(docs);
      }
    });
  }, []);
  

  return (
    <div>
      <h1>Producto</h1>
      {
        <div>
          <h3>
                Producto
          </h3>
        </div>
      }
    </div>
  );
};

export default Document;