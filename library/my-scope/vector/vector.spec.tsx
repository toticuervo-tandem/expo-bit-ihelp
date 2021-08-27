import React from 'react';
import { render } from '@testing-library/react';
import { BasicVector } from './vector.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicVector />);
  const rendered = getByText('hello from Vector');
  expect(rendered).toBeTruthy();
});
