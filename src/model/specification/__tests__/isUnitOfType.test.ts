import { describe, it, expect } from 'vitest'
import { createEmptyGame, Game } from '../../game'
import { UnitType } from '../../unit'
import { isUnitOfType } from '../isUnitOfType'

describe('isUnitOfType', () => {
  it.each([
    ['knight', 'Lancelot', 'knight', true],
    ['knight', 'Lancelot', 'peasant', false],
    ['knight', 'Lancelot', 'dragon', false],
    ['knight', 'Lancelot', 'wizard', false],
    ['peasant', 'Geronimo', 'knight', false],
    ['peasant', 'Geronimo', 'peasant', true],
    ['peasant', 'Geronimo', 'dragon', false],
    ['peasant', 'Geronimo', 'wizard', false],
    ['dragon', 'Caraxas', 'knight', false],
    ['dragon', 'Caraxas', 'peasant', false],
    ['dragon', 'Caraxas', 'dragon', true],
    ['dragon', 'Caraxas', 'wizard', false],
    ['wizard', 'Merlin', 'knight', false],
    ['wizard', 'Merlin', 'peasant', false],
    ['wizard', 'Merlin', 'dragon', false],
    ['wizard', 'Merlin', 'wizard', true],
  ])('%s %s for %s should return %s', (type, name, expectedType, expected) => {
    // given
    const game: Game = {
      ...createEmptyGame(),
      units: [
        {
          type: type as UnitType,
          name,
          position: [1, 1],
        },
      ],
    }

    const isSatisfiedBy = isUnitOfType(expectedType)(name)

    // when
    const result = isSatisfiedBy(game)

    // then
    expect(result).toBe(expected)
  })
})