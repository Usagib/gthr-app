import React from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from './NavBar';
import Header from './Header';
import SearchForm from '../containers/SearchForm';
import Catalog from '../containers/Catalog';

class FrontEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: null
    };
  }

  render(){
    return (
      <div className="mt-5">
        <Navbar />
        <Header />
        <SearchForm />
        <Catalog />
      </div>
    );
  }
}

export default FrontEnd;
