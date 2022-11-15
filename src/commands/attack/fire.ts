import { compositeCommand } from '../../patterns'
import { info } from '../logs'

export const fireCommandFactory = (name: string, direction: string) => compositeCommand(
  (game) => {
    const { units, orientation } = game

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { position: dragonPosition } = units.find((unit) => unit.name === name)!


    return {
      ...game,
      units: units.filter(({ position }) => !orientation.isInDirection(
        dragonPosition, 
        position, 
        direction
      ))
    }
  },
  info(`${name} fired ${direction}`),
)
