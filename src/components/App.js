import React from 'react';
import Api from '../containers/Api';
import SearchForm from '../containers/SearchForm';
import Catalog from '../containers/Catalog';

const App = () => (
  <div>
    <SearchForm />
    <Catalog />
    <Api />
  </div>
)

export default App;
