import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import TrackForm from './TrackForm';

describe('TrackForm component', () => {
  const track = {
    id: 1,
    title: 'Track 1',
    category: 1,
    published: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  };
  const categories = [
    {
      id: 1,
      title: 'News'
    },
    {
      id: 2,
      title: 'Blog post'
    }
  ];

  it('should call onTrackChange when the track is updated', () => {
    const onTrackChange = jest.fn();
    render(<TrackForm track={track} categories={categories} onTrackChange={onTrackChange} />);
    fireEvent.click(screen.getByLabelText(/Published/));
    expect(onTrackChange).toBeCalledWith("published", false);
  });

  it('should call onSubmit when the form is submitted', () => {
    const onSubmit = jest.fn();
    render(<TrackForm track={track} categories={categories} onSubmit={onSubmit} />);
    fireEvent.click(screen.getByText("Submit"));
    expect(onSubmit).toBeCalled();
  });
});
