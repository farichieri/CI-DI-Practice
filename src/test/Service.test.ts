import { getCoolName } from '../app/Service';

describe('Service test suite', () => {
  test('Name should be cool', () => {
    const expected = 'Very Cool Name';

    const actual = getCoolName();

    expect(actual).toBe(expected);
  });
});
