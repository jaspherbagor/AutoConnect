import React from 'react';
import ClientNavbar from '../../layouts/client/navbar';
import ClientFooter from '../../layouts/client/footer';
const Home = () => {
  return (
    <div>
        <ClientNavbar />

        <p>This is a home page</p>
        
        <ClientFooter />
    </div>
  )
}

export default Home