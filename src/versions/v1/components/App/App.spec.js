import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

jest.mock('../../services/track/track');
jest.mock('../../services/category/category');

describe('App component', () => {
  it('renders without crashing', async () => {
    render(<App />);
    const elements = await screen.findAllByText(/Article [0-9]/);
    expect(elements.length).toBe(3);
  });

  it('filters the articles', async () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText('Published'));
    const elements = await screen.findAllByText(/Article [0-9]/);
    expect(elements.length).toBe(2);
  });
});

