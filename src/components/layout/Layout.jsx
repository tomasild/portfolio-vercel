// En /components/layout/Layout.js
import React from 'react';
import Header from './Header';
import Footer from "./Footer"

const Layout = ({ children }) => (
  <div className='lg:hidden'>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;