import React from 'react';
import { render, screen } from '@testing-library/react';

import JukeBox from './JukeBox';

describe('JukeBox component', () => {
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

  it('should render the "Published" label', () => {
    render(<JukeBox track={{published: true}} />);
    expect(screen.getByText('Published')).toBeInTheDocument();
  });

  it('should render the "Draft" label', () => {
    render(<JukeBox track={{published: false}} />);
    expect(screen.getByText('Draft')).toBeInTheDocument();
  });

  it('should render the category title', () => {
    render(<JukeBox track={{category: 1}} categories={categories} />);
    expect(screen.getByText('News')).toBeInTheDocument();
  });
});
