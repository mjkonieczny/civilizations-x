import { IsSatisfiedBy } from '../../patterns'
import { Game } from '../game'

export const isWizardNearby = (name: string):IsSatisfiedBy<Game> => (game: Game) => {
  const { 
    units, 
    orientation: { 
      distance
    }
  } = game

  const unit = units.find((unit) => unit.name === name)

  if (!unit) {
    return false
  }

  return units.some((u) => u.type === 'wizard' && distance(unit.position, u.position) <= 1.5)
}