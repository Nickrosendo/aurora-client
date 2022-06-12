import { getRandomColor } from '@root/helpers';

describe('getRandomColor tests', () => {
  it('should return a string', () => {
    const returnType = typeof getRandomColor();
    expect(returnType).toBe('string');
  });
});
