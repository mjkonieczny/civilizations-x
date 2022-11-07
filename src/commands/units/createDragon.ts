import { Command } from '../../model'
import { compositeCommandFactory } from '../composite'
import { infoCommandFactory } from '../logs'
import { rulesCommandFactory } from '../rules'

export const createDragonCommandFactory = (name: string, position: number[]): Command => rulesCommandFactory([
  {
    command: compositeCommandFactory([
      (game) => ({
        ...game,
        units: [
          ...game.units,
          {
            name,
            type: 'dragon',
            position: game.orientation.createVector(...position),
          },
        ],
      }),
      infoCommandFactory(`dragon ${name} created at position [${position}]`),
    ])
  },
])
