import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext.jsx';

const Contact = (props) => {
   const {username, phone} = useContext(AppContext);

  return (
    <>
    <h2>Contact</h2>
    <h2>Username:{username}</h2>
    <h3>For any queries, please reach out to us at:{phone}</h3>
    </>
  )
}

export default Contact