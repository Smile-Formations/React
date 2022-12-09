import { render, screen } from '@testing-library/react';

import Container from './Container';

describe('Container component', () => {
  it('should render children', () => {
    render(<Container><div>Hell Yeah !</div></Container>);
    expect(screen.getByText('Hell Yeah !')).toBeInTheDocument();
  });
});
