import React from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from './NavBar';
import Header from './Header';
import SearchForm from '../containers/SearchForm';
import Catalog from '../containers/Catalog';

const FrontEnd = props => {
  return (
    <div className="mt-5">
      <Navbar />
      <Header />
      <SearchForm />
      <Catalog />
    </div>
  );
}

export default FrontEnd;
