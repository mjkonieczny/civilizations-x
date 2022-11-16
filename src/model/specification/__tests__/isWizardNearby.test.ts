import { describe, it, expect } from 'vitest'
import { createEmptyGame, Game } from '../../game'
import { rectangleStrategy } from '../../orientation'
import { isWizardNearby } from '../isWizardNearby'

describe('isWizardNearby', () => {
  it.each([
    [2, 2, true],
    [2, 1, true],
    [1, 2, true],
    [1, 1, true],
    [0, 0, true],
    [3, 3, false],
    [3, 1, false],
    [1, 3, false],
  ])('should be satisfied (%s, %s) %s', (x, y, expected) => {
    // given
    const isSatisfiedBy = isWizardNearby('Caraxas')

    const game: Game = {
      ...createEmptyGame(),
      orientation: rectangleStrategy(10, 10),
      units: [
        {
          type: 'wizard',
          name: 'Gandalf',
          position: [1, 1],
        },
        {
          type: 'dragon',
          name: 'Caraxas',
          position: [x, y],
        }
      ],
    }

    // when
    const result = isSatisfiedBy(game)

    // then
    expect(result).toBe(expected)
  })
})