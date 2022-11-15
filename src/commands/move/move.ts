import { Game } from '../../model'
import { compositeCommand } from '../../patterns'
import { info } from '../logs'

export const move = (unitName: string, direction: string, step: number) => compositeCommand<Game>(
  (game) => ({
    ...game,
    units: game.units.map((unit) => {
      const { name, position } = unit

      if (name === unitName) {
        return {
          ...unit,
          position: game.orientation.transform(position, direction, step),
        }
      }

      return unit
    }),
  }),
  info(`${unitName} moved ${direction} ${step}`),
)