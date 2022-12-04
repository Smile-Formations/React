import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Filters from './Filters';

describe('Filters component', () => {
  it('should call onFilterChanged when filter changes', () => {
    const onFilterChanged = jest.fn();
    render(<Filters onFilterChanged={onFilterChanged} />);
    fireEvent.click(screen.getByLabelText('Band'));
    expect(onFilterChanged).toBeCalledWith('band', 'band');
  });
});

