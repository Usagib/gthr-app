import '@testing-library/jest-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/index';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import Catalog from '../../containers/Catalog';
import SearchForm from '../../containers/SearchForm';

const store = createStore(rootReducer);

test('shows if searchForm buttons are rendered properly', () => {
  const buttonName = [
    'Add to Catalog',
    'Reset',
  ];
  render(
    <Provider store={store}>
      <SearchForm />
    </Provider>
  )
  for (var i = 0; i < buttonName.length; i++) {
    expect(screen.queryByText(buttonName[i])).not.toBeNull()
  }
})

test('shows if add action triggers properly', async() => {
  render(
    <Provider store={store}>
      <SearchForm />
      <Catalog />
    </Provider>
  )
  fireEvent.click(screen.getByText('Add to Catalog'))
  await (() => screen.getByText('Abundance'))
  expect(screen.queryByText('Abundance')).toBeNull()
})

test('shows if add reset triggers properly', () => {
  render(
    <Provider store={store}>
      <SearchForm />
      <Catalog />
    </Provider>
  )
  fireEvent.click(screen.getByText('Reset'))
  expect(screen.queryByText('Abundance')).toBeNull()
})
