import { describe, it, expect } from 'vitest'
import { sub } from './example'

describe('sub', () => {
  it('should subtract two positive numbers correctly', () => {
    expect(sub(5, 3)).toBe(2)
  })

  it('should subtract with negative numbers', () => {
    expect(sub(-5, 3)).toBe(-8)
    expect(sub(5, -3)).toBe(8)
    expect(sub(-5, -3)).toBe(-2)
  })

  it('should subtract zero correctly', () => {
    expect(sub(5, 0)).toBe(5)
    expect(sub(0, 5)).toBe(-5)
    expect(sub(0, 0)).toBe(0)
  })

  it('should handle decimal numbers', () => {
    expect(sub(3.5, 1.2)).toBeCloseTo(2.3)
    expect(sub(-3.5, 1.2)).toBeCloseTo(-4.7)
  })

  it('should handle large numbers', () => {
    expect(sub(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER - 1)
    expect(sub(1, Number.MAX_SAFE_INTEGER)).toBe(1 - Number.MAX_SAFE_INTEGER)
  })
})
