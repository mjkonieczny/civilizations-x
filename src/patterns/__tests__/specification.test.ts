import { describe, it, expect } from 'vitest'
import { and, not, or } from '../specification'

describe('specification', () => {
  // given
  const isEven = (x: number) => x % 2 === 0
  const isPositive = (x: number) => x > 0

  it.each([
    [-1, false],
    [0, false],
    [1, false],
    [2, true],
  ])('should and %d %s', (number, expected) => {
    // given
    const isSatisfiedBy = and(isEven, isPositive)

    // when
    const result = isSatisfiedBy(number)

    // then
    expect(result).toBe(expected)    
  })

  it.each([
    [-2, true],
    [-1, false],
    [0, true],
    [1, true],
  ])('should or %s %s', (number, expected) => {
    // given
    const isSatisfiedBy = or(isEven, isPositive)

    // when
    const result = isSatisfiedBy(number)

    // then
    expect(result).toBe(expected)    
  })

  it.each([
    [0, false],
    [1, true],
  ])('should not %s %s', (number, expected) => {
    // given
    const isSatisfiedBy = not(isEven)

    // when
    const result = isSatisfiedBy(number)

    // then
    expect(result).toBe(expected)
  })
})