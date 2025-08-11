import searchReducer, { setTerm } from './searchSlice';

const initialState = { term: 'olhos' };

describe('testing searchSlice', () => {
  it('returns the empty initial state', () => {
    const novoEstado = searchReducer(undefined, { type: '' });
    expect(novoEstado).toEqual({ term: '' });
  });

  it('changes the search term', () => {
    const novoEstado = searchReducer(initialState, setTerm('hidratante'));
    expect(novoEstado.term).toBe('hidratante');
  });
});