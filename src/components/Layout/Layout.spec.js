import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Layout from './Layout';

describe('Layout component', () => {
    it('should render without crashing', () => {
        render(<Layout/>, {wrapper: MemoryRouter});
    });
});