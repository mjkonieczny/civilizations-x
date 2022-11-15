import { describe, it, expect } from 'vitest'
import { isUnitNameUnique } from '..'
import { createEmptyGame } from '../../game'
import { UnitType } from '../../unit'

describe('isUnitNameUnique', () => {
  it.each([
    ['a', 'b', true],
    ['a', 'a', false],
    ['a', 'A', true],
  ])('should be satisfied %s %s %s', (name, unitName, expected) => {
    // given
    const game = {
      ...createEmptyGame(),
      units: [
        { name, type: 'wizard' as UnitType, position: [0, 0] },
      ],
    }

    const isSatisfiedBy = isUnitNameUnique(unitName)

    // when
    const result = isSatisfiedBy(game)

    // then
    expect(result).toBe(expected)
  })
})