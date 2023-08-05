import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import HomePage from '../components/homepage';

describe('continents Display snapshot Testing', () => {
  test('testing continents with Snapshot', () => {
    const tree = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
