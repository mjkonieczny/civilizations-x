import { Game } from '../game'
import { Specification } from '../../patterns'

export const isWithinBounds = (position: number[]): Specification<Game> => (game: Game) => {
  const { orientation } = game
  const { isWithinBounds, createVector } = orientation

  return isWithinBounds(createVector(...position))
}

