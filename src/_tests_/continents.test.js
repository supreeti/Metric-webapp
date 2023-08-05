import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Continents from '../components/continents';

describe('continents Display snapshot Testing', () => {
  test('testing continents with Snapshot', () => {
    const tree = render(
      <MemoryRouter>
        <Continents />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
