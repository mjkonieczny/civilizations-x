import { IsSatisfiedBy } from '../../patterns'
import { Game } from '../game'

export const isUnitOfType = (type: string) => (name: string): IsSatisfiedBy<Game> => (game: Game) => {
  const unit = game.units.find((unit) => unit.name === name)

  return unit ? unit.type === type : false
}