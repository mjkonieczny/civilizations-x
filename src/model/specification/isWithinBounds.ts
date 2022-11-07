import { Game } from '../game'
import { Specification } from './specification'

export const isWithinBounds = (position: number[]): Specification => (game: Game) => {
  const { orientation } = game
  const { isWithinBounds, createVector } = orientation

  return isWithinBounds(createVector(...position))
}

