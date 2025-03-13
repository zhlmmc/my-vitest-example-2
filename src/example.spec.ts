import { describe, it, expect } from 'vitest'
import { sub } from './example'

describe('sub', () => {
  it('should subtract two positive numbers correctly', () => {
    expect(sub(5, 3)).toBe(2)
  })

  it('should subtract negative numbers correctly', () => {
    expect(sub(-2, -5)).toBe(3)
  })

  it('should handle zero correctly', () => {
    expect(sub(10, 0)).toBe(10)
    expect(sub(0, 5)).toBe(-5)
    expect(sub(0, 0)).toBe(0)
  })

  it('should handle decimal numbers correctly', () => {
    expect(sub(3.5, 1.2)).toBeCloseTo(2.3)
  })

  it('should handle large numbers correctly', () => {
    expect(sub(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER - 1)
  })
})
