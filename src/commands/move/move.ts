import { Game, isWizardNearby } from '../../model'
import { chainBuilder, compositeCommand } from '../../patterns'
import { info, warning } from '../logs'

export const move = (unitName: string, direction: string, step: number) => chainBuilder<Game>()
  .add(
    warning(`${unitName} cannot move because there is a wizard nearby`),
    isWizardNearby(unitName),
  )
  .add(
    compositeCommand<Game>(
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
    ))
  .build()