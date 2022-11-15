import { describe, it, expect } from 'vitest'
import { createChain } from '../chainOfResponsibility'

describe('chainOfResponsibility', () => {
  // given
  const isEven = (x: number) => x % 2 === 0
  const isPositive = (x: number) => x > 0

  it.each([
    [-1, -1],
    [0, 1],
    [1, -1],
  ])('should execute', (number, expected) => {
    // given
    const chain = createChain<number>([
      {
        specification: isEven,
        command: (number) => number + 1,
      },
      {
        specification: isPositive,
        command: (number) => -number,
      },
      {
        command: (number) => number,
      }
    ])

    // when
    const result = chain(number)

    // then
    expect(result).toBe(expected)
  })
})