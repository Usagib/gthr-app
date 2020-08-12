import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from '../../components/Header';

test('shows if header renders properly', () => {
  const testString ='Create your MTG card Catalog and browse through it directly from Magic The Gathering Official API'
  render(<Header />)
  expect(screen.queryByText(testString)).not.toBeNull()
})
