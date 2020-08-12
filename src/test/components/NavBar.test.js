import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import NavBar from '../../components/NavBar';

test('shows if navbar renders properly', () => {
  const testNav = [
    'Catalog',
    'Add to Catalog',
    'Filter',
    'Reset',
  ];
  render(<NavBar />)
  for (var i = 0; i < testNav.length; i++) {
    expect(screen.queryByText(testNav[i])).not.toBeNull()
  }
})
