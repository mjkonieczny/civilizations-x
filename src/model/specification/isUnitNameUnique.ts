import { Game } from '..'
import { IsSatisfiedBy } from '../../patterns'

export const isUnitNameUnique = (name: string): IsSatisfiedBy<Game> => (game) => {
  const { units } = game

  return units.every((unit) => unit.name !== name)
}