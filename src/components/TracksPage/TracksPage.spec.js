import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import TracksPage from './TracksPage';

jest.mock('../../services/track/track');
jest.mock('../../services/category/category');

describe('TracksPage component', () => {
  it('renders without crashing', async () => {
    render(<TracksPage />);
    const elements = await screen.findAllByText(/Track [0-9]/);
    expect(elements.length).toBe(3);
  });

  it('filters the articles', async () => {
    render(<TracksPage />);
    fireEvent.click(screen.getByLabelText(/Band/));
    const elements = await screen.findAllByText(/Track [0-9]/);
    expect(elements.length).toBe(2);
  });
});

