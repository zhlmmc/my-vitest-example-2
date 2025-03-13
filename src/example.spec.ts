import { describe, it, expect } from 'vitest'
import { sub } from './example'

describe('sub', () => {
  it('should subtract two positive numbers correctly', () => {
    expect(sub(5, 3)).toBe(2)
  })

  it('should subtract when first number is smaller', () => {
    expect(sub(3, 5)).toBe(-2)
  })

  it('should subtract negative numbers correctly', () => {
    expect(sub(-5, -3)).toBe(-2)
  })

  it('should subtract zero correctly', () => {
    expect(sub(5, 0)).toBe(5)
    expect(sub(0, 5)).toBe(-5)
    expect(sub(0, 0)).toBe(0)
  })

  it('should handle decimal numbers', () => {
    expect(sub(5.5, 2.2)).toBe(3.3)
  })
})
