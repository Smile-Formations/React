import { fireEvent, render, screen } from '@testing-library/react';

import Categories from '../../contexts/Categories';

import Filters from './Filters';

describe('Filters component', () => {
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

  it('should call onFilterChanged when filter changes', () => {
    const onFilterChanged = jest.fn();
    render(<Categories.Provider value={categories}>
      <Filters onFilterChanged={onFilterChanged} />
    </Categories.Provider>);
    fireEvent.click(screen.getByLabelText('Band'));
    expect(onFilterChanged).toBeCalledWith('band', 'band');
  });
});

