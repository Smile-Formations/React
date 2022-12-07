import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header component', () => {
    it('renders the header', () => {
        render(<Header />, {wrapper: MemoryRouter});
        expect(screen.getByText('Home')).toBeInTheDocument();
    });
});