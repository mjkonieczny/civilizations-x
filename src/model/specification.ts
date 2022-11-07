import { Game } from './game'

export type Specification = (game: Game) => boolean

export const and = (...specifications: Specification[]): Specification => (game) => {
  return specifications.every((specification) => specification(game))
}

export const or = (...specifications: Specification[]): Specification => (game) => {
  return specifications.some((specification) => specification(game))
}

export const not = (specification: Specification): Specification => (game) => {
  return !specification(game)
}