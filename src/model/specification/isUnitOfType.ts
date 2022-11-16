import { IsSatisfiedBy } from '../../patterns'
import { Game } from '../game'

export const isUnitOfType = (type: string) => (name: string): IsSatisfiedBy<Game> => (game: Game) => {
  // missing implementation
  
  return false
}