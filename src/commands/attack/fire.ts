import { Command } from '../../model'
import { compositeCommandFactory } from '../composite'
import { infoCommandFactory } from '../logs'

export const fireCommandFactory = (name: string, direction: string): Command => compositeCommandFactory([
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
  infoCommandFactory(`${name} fired ${direction}`),
])
