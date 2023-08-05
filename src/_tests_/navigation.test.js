import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navigation from '../components/navigation';

describe('continents Display snapshot Testing', () => {
  test('testing continents with Snapshot', () => {
    const tree = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
