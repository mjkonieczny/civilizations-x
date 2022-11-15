import { Game } from '..'
import { Specification } from '../../patterns'

export const isUnitNameUnique = (name: string): Specification<Game> => (game) => {
  const { units } = game

  return units.every((unit) => unit.name !== name)
}