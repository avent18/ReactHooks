 import React, { useContext}from 'react';
import { AppContext } from '../context/AppContext.jsx';

const Footer = () => {

  // Assuming props is passed down from a parent component
  const {phone} = useContext(AppContext);

  return (
    <>
    <h2>Footer</h2>
    <h3>For any queries, please reach out to us at:{phone}</h3>
    </>
  )
}

export default Footer