import { Game } from '../game'
import { IsSatisfiedBy } from '../../patterns'

export const isWithinBounds = (position: number[]): IsSatisfiedBy<Game> => (game: Game) => {
  const { orientation } = game
  const { isWithinBounds, createVector } = orientation

  return !isWithinBounds(createVector(...position))
}

