import '@testing-library/jest-dom';
import React from 'react';
import {render, screen} from '@testing-library/react';
import Filter from '../../components/Filter';

test('shows if filter is rendered properly', () => {
  const testType = [
    'Type',
    'Instant',
    'Sorcery',
    'Artifact',
    'Creature',
    'Enchantment',
    'Land',
    'Planeswalker',
  ];
  render(<Filter />)
  for (var i = 0; i < testType.length; i++) {
    expect(screen.queryByText(testType[i])).not.toBeNull()
  }
})

test('handles filter change', () => {
  const testChange = Filter.handleChange
  render(<Filter />)
    expect(testChange).not.toBeNull()
})
