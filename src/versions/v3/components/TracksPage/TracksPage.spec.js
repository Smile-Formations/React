import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import TracksPage from './TracksPage';

jest.mock('../../services/track/track');
jest.mock('../../services/category/category');

describe('App component', () => {
  it('renders without crashing', async () => {
    render(<TracksPage />, {wrapper: MemoryRouter});
    const elements = await screen.findAllByText(/Track [0-9]/);
    expect(elements.length).toBe(3);
  });

  it('filters the tracks', async () => {
    render(<TracksPage />, {wrapper: MemoryRouter});
    fireEvent.click(screen.getByLabelText('Band'));
    const elements = await screen.findAllByText(/Track [0-9]/);
    expect(elements.length).toBe(2);
  });

  it('removes one track', async () => {
    await act(async () => {
      await render(<TracksPage />, {wrapper: MemoryRouter});
    });
    fireEvent.click(screen.getAllByText('remove')[0]);
    waitFor(async () => {
      const elements = await screen.findAllByText(/Track [0-9]/);
      expect(elements.length).toBe(2);
    });
  });
});
