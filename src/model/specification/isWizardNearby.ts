import { IsSatisfiedBy } from '../../patterns'
import { Game } from '../game'

export const isWizardNearby = (name: string):IsSatisfiedBy<Game> => (game: Game) => {
  const { 
    units, 
    orientation: { 
      distance // distance should be lower than 1.5
    }
  } = game

  // missing implementation
  return false
}