import { describe, it, expect } from 'vitest'
import { isBoardSizeInRange } from '..'
import { createEmptyGame } from '../../game'

describe('isBoardSizeSizeInRange', () => {
  it.each([
    [[{ min: 1, max: 10 }, { min: 2, max: 7 }], [1, 2], true],
    [[{ min: 1, max: 10 }, { min: 2, max: 7 }], [0, 2], false],
    [[{ min: 1, max: 10 }, { min: 2, max: 7 }], [1, 1], false],
    [[{ min: 1, max: 10 }, { min: 2, max: 7 }], [1, 8], false],
    [[{ min: 1, max: 10 }, { min: 2, max: 7 }], [11, 2], false],
    [[{ min: 1, max: 10 }, { min: 2, max: 7 }], [11, 8], false],
    [[{ min: 1, max: 10 }, { min: 2, max: 7 }, { min: 3, max: 4 }], [2, 3, 3], true],
    [[{ min: 1, max: 10 }, { min: 2, max: 7 }, { min: 3, max: 4 }], [2, 3, 0], false],
  ])('should be satisfied %o %s %s', (dimensionRanges, dimensions, expected) => {
    // given
    const isSatisfiedBy = isBoardSizeInRange(dimensionRanges)(dimensions)

    // when
    const result = isSatisfiedBy(createEmptyGame())

    // then
    expect(result).toBe(expected)
  })
})