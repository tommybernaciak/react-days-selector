import { getPowers } from './powers';

describe('powers helper', () => {
  it('should return empty array for invalid input', function() {
    expect(getPowers(-1)).toEqual([]);
    expect(getPowers('test')).toEqual([]);
  });
  it('should split given number to powers of 2', function() {
    expect(getPowers(0)).toEqual([]);
    expect(getPowers(1)).toEqual([1]);
    expect(getPowers(2)).toEqual([2]);
    expect(getPowers(3)).toEqual([1, 2]);
    expect(getPowers(4)).toEqual([4]);
    expect(getPowers(5)).toEqual([1, 4]);
    expect(getPowers(6)).toEqual([2, 4]);
    expect(getPowers(7)).toEqual([1, 2, 4]);
    expect(getPowers(8)).toEqual([8]);
    expect(getPowers(9)).toEqual([1, 8]);
    expect(getPowers(10)).toEqual([2, 8]);
  });
});
