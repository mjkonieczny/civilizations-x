import { Specification } from './specification'

export const isUnitNameUnique = (name: string): Specification => (game) => {
  const { units } = game

  return units.every((unit) => unit.name !== name)
}