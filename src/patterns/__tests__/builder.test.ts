import { describe, it, expect } from 'vitest'
import { chainBuilder } from '../builder'

describe('chainOfResponsibility', () => {
  // given
  const isEven = (x: number) => x % 2 === 0
  const isPositive = (x: number) => x > 0

  it.each([
    [-1, -1],
    [0, 1],
    [1, -1],
  ])('should execute %s %s', (number, expected) => {
    // given
    const chain = chainBuilder<number>()
      .add(
        (number) => number + 1,
        isEven,
      ) 
      .add(
        (number) => -number,
        isPositive,
      )
      .add((number) => number)
      .build()

    // when
    const result = chain(number)

    // then
    expect(result).toBe(expected)
  })
})
