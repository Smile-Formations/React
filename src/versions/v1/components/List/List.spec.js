import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import List from './List';
import JukeBox from '../JukeBox/Article';

describe('List component', () => {
  const articles = [
    {
      id: 1,
      title: 'JukeBox 1',
      category: 1,
      published: true,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      title: 'JukeBox 2',
      category: 2,
      published: true,
      content: 'Donec malesuada enim ac ipsum dictum placerat.'
    },
    {
      id: 3,
      title: 'JukeBox 3',
      category: 1,
      published: false,
      content: 'Phasellus sit amet bibendum augue.'
    }
  ];

  it('should render 3 JukeBox components', async () => {
    render(<List articles={articles} />);
    const elements = await screen.findAllByText(/Article/);
    expect(elements.length).toBe(3);
  });
});
