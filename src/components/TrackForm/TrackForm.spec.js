import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import TrackForm from './TrackForm';

describe('TrackForm component', () => {
  const track = {
    "id": 1,
    "title": "Find The Real",
    "album": "One Day Remains",
    "band": "Alter Bridge",
    "year": "2004",
    "poster": "https://i.ebayimg.com/images/g/OqoAAOSwJYVg1y6E/s-l500.jpg",
    "url": "https://www.youtube.com/watch?v=w9LZ0OkdxGg&ab_channel=AlterBridge-Topic",
    "category": 3,
    "description": "One Day Remains is the debut studio album by the American hard rock band Alter Bridge, released on August 10, 2004, on Wind-up Records."
  };
  const categories = [
    {
      "id": 1,
      "title": "Hard Rock"
    },
    {
      "id": 2,
      "title": "Power rock"
    },
    {
      "id": 3,
      "title": "Metal"
    }
  ];

  it('should call onTrackChange when the track is updated', () => {
    const onTrackChange = jest.fn();
    render(<TrackForm track={track} categories={categories} onTrackChange={onTrackChange} />);
    fireEvent.click(screen.getByLabelText(/Band/));
    expect(onTrackChange).toBeCalledWith("band", false);
  });

  it('should call onSubmit when the form is submitted', () => {
    const onSubmit = jest.fn();
    render(<TrackForm track={track} categories={categories} onSubmit={onSubmit} />);
    fireEvent.click(screen.getByText("Submit"));
    expect(onSubmit).toBeCalled();
  });
});
