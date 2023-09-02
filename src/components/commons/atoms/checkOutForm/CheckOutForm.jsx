import React, { useState } from 'react';
import './CheckOutForm.scss';
import { Button, Input } from '@chakra-ui/react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const CheckOutForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [dir, setDir] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(ordersCollection, order)
      .then(({ id }) => {
        setOrderId(id);
        setSubmitted(true); 
      })
      .catch((error) => {
        console.error('Error al agregar el documento:', error);
      });
  };

  const order = {
    name,
    tel,
    email,
    dir,
    zipcode
  };

  const ordersCollection = collection(db, 'orden');

  return (
    <div className='today-checkout'>
      <div className='overlay' onClick={onClose}></div>
      <div className='card-containform'>
        <div className='containform'>
          {submitted ? (
            <div className='modal-order'>
              <p>Numero de Orden: {orderId}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <Input
                placeholder='Nombre completo'
                type='text'
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder='Número celular'
                type='text'
                onChange={(e) => setTel(e.target.value)}
              />
              <Input
                placeholder='Correo electronico'
                type='text'
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder='Dirección completa'
                type='text'
                onChange={(e) => setDir(e.target.value)}
              />
              <Input
                placeholder='C.P.'
                type='text'
                onChange={(e) => setZipcode(e.target.value)}
              />
              <Button type='submit'>COMPRAR</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOutForm;
