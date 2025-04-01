import { describe, it, expect } from 'vitest';
import { sub } from './test';

describe('sub', () => {
  it('should return sum of two numbers', () => {
    expect(sub(1, 2)).toBe(3);
    expect(sub(0, 0)).toBe(0);
    expect(sub(-1, 1)).toBe(0);
    expect(sub(10, -5)).toBe(5);
  });

  it('should handle decimal numbers', () => {
    expect(sub(1.5, 2.3)).toBe(3.8);
    expect(sub(-1.2, 3.4)).toBe(2.2);
  });

  it('should handle large numbers', () => {
    expect(sub(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    expect(sub(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1);
  });

  it('should handle NaN inputs', () => {
    expect(sub(NaN, 1)).toBeNaN();
    expect(sub(1, NaN)).toBeNaN();
    expect(sub(NaN, NaN)).toBeNaN();
  });

  it('should handle Infinity', () => {
    expect(sub(Infinity, Infinity)).toBe(Infinity);
    expect(sub(-Infinity, -Infinity)).toBe(-Infinity);
    expect(sub(Infinity, -Infinity)).toBeNaN(); // Updated to expect NaN
  });

  it('should handle undefined and null', () => {
    // @ts-expect-error Testing invalid input
    expect(sub(undefined, 1)).toBeNaN();
    // @ts-expect-error Testing invalid input
    expect(sub(1, undefined)).toBeNaN();
    // @ts-expect-error Testing invalid input
    expect(sub(null, 1)).toBe(1);
    // @ts-expect-error Testing invalid input
    expect(sub(1, null)).toBe(1);
  });
});
