import { makeQuery } from '../makeQuery';

describe('makeQuery', () => {
  test('Should return correct query string', () => {
    const query = {
      active: false,
      search: '',
      page: 2,
    };

    const result = makeQuery(query);
    expect(result).toBe('active=&search=&page=2');
  });
});
