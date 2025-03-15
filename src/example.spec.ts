import { describe, it, expect } from 'vitest'
import { sub } from './example'

describe('sub', () => {
  it('should subtract two positive numbers', () => {
    expect(sub(5, 3)).toBe(2)
  })

  it('should subtract a positive and negative number', () => {
    expect(sub(5, -3)).toBe(8)
  })

  it('should subtract two negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2)
  })

  it('should handle zero', () => {
    expect(sub(5, 0)).toBe(5)
    expect(sub(0, 5)).toBe(-5)
    expect(sub(0, 0)).toBe(0)
  })

  it('should handle decimal numbers', () => {
    expect(sub(5.5, 2.2)).toBe(3.3)
  })

  it('should handle large numbers', () => {
    expect(sub(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER - 1)
  })
})
