import React from 'react';
import { render, screen } from '@testing-library/react';

import JukeBox from './JukeBox';

describe('JukeBox component', () => {
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

  it('should render the category title', () => {
    render(<JukeBox track={{category: 1}} categories={categories} />);
    expect(screen.getByText('Metal')).toBeInTheDocument();
  });
});
