import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Categories from '../../contexts/Categories';

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
    render(<Categories.Provider value={categories}>
      <JukeBox track={{category: 1}} />
    </Categories.Provider>, {wrapper: MemoryRouter});
    expect(screen.getByText('Hard Rock')).toBeInTheDocument();
  });

  it('should call onRemove when the remove button is clicked', () => {
    const onRemove = jest.fn();
    render(<Categories.Provider value={categories}>
      <JukeBox track={{category: 1, id: 1}} onRemove={onRemove} />
    </Categories.Provider>, {wrapper: MemoryRouter});
    fireEvent.click(screen.getByText('Metal'));
    expect(onRemove).toBeCalledWith(1);
  });
});
