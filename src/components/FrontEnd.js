import React from 'react';
import Navbar from './NavBar';
import Header from './Header';
import SearchForm from '../containers/SearchForm';
import Catalog from '../containers/Catalog';

const FrontEnd = () => (
  <div className="mt-5">
    <Navbar />
    <Header />
    <SearchForm />
    <Catalog />
  </div>
);

export default FrontEnd;
