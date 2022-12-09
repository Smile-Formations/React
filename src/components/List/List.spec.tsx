import { fireEvent, render, screen } from '@testing-library/react';

import List from './List';
import { MemoryRouter } from 'react-router-dom';

describe('List component', () => {
  const tracks = [
    {
      "id": 1,
      "title": "Find The Real",
      "album": "One Day Remains",
      "band": "Alter Bridge",
      "year": "2004",
      "poster": "https://i.ebayimg.com/images/g/OqoAAOSwJYVg1y6E/s-l500.jpg",
      "url": "https://www.youtube.com/watch?v=w9LZ0OkdxGg&ab_channel=AlterBridge-Topic",
      "category": 3,
      "description": "One Day Remains is the debut studio album by the American hard rock band Alter Bridge, released on August 10, 2004, on Wind-up Records."
    },
    {
      "id": 2,
      "title": "Metalingus",
      "album": "One Day Remains",
      "band": "Alter Bridge",
      "year": "2004",
      "poster":  "https://i.ebayimg.com/images/g/OqoAAOSwJYVg1y6E/s-l500.jpg",
      "url":  "https://www.youtube.com/watch?v=N-I8ALlYxdY&ab_channel=fukubitch1510",
      "category": 3,
      "description": "One Day Remains is the debut studio album by the American hard rock band Alter Bridge, released on August 10, 2004, on Wind-up Records."
    },
    {
      "id": 3,
      "title": "Sweet Child O' Mine",
      "album": "Appetite for Destruction",
      "band": "Guns 'N' Roses",
      "year": "1987",
      "poster":  "https://m.media-amazon.com/images/I/71H9ZR6EGFL._SL1400_.jpg",
      "url":  "https://www.youtube.com/watch?v=1w7OgIMMRc4&ab_channel=GunsNRosesVEVO",
      "category": 1,
      "description": "Appetite for Destruction is the debut studio album by American hard rock band Guns N' Roses. It was released on July 21, 1987, by Geffen Records. The album was released to little mainstream attention in 1987."
    }
  ];

  it('should render 3 JukeBox components', async () => {
    render(<List tracks={tracks} />, {wrapper: MemoryRouter});
    const elements = await screen.findAllByText(/Track/);
    expect(elements.length).toBe(3);
  });
});
