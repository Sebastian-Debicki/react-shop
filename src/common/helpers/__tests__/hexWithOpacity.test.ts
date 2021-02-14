import { hexWithOpacity } from '../hexWithOpacity';

describe('hexWithOpacity', () => {
  test('Should calculate opacity correctly', () => {
    const result = hexWithOpacity('#ff0000', 0.5);

    expect(result).toBe('#ff00007f');
  });
});
