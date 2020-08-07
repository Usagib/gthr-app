import React from 'react';
import Api from '../containers/Api';
import SearchForm from '../containers/SearchForm';
import Catalog from '../containers/Catalog';

const App = () => (
  <div>
    <Catalog />
    <SearchForm />
  </div>
)

export default App;
