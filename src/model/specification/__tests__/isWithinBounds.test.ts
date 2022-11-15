import { describe, it, expect } from 'vitest'
import { createEmptyGame } from '../../game'
import { rectangleStrategy } from '../../orientation'
import { isWithinBounds } from '../isWithinBounds'

describe('isWithinBounds', () => {
  it.each([
    [1, 1, [-1, -1], false],
    [1, 1, [0, -1], false],
    [1, 1, [-1, 0], false],
    [2, 2, [0, 0], true],
    [2, 2, [1, 1], true],
    [2, 2, [1, 2], false],
    [2, 2, [2, 1], false],
    [2, 2, [2, 2], false],
  ])('should be satisfied (%d %d) %s %s', (n, m, position, expected) => {
    // given
    const game = {
      ...createEmptyGame(),
      orientation: rectangleStrategy(n, m),
    } 
    
    const isSatisfiedBy = isWithinBounds(position)

    // when
    const result = isSatisfiedBy(game)

    // then
    expect(result).toBe(expected)
  })
})