import { Command } from '../../model'
import { compositeCommandFactory } from '../composite'
import { infoCommandFactory } from '../logs'

export const moveCommandFactory = (unitName: string, direction: string, step: number): Command => compositeCommandFactory([
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
  infoCommandFactory(`${unitName} moved ${direction} ${step}`),
])