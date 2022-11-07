import { Command } from '../../model'
import { compositeCommandFactory } from '../composite'
import { infoCommandFactory } from '../logs'
import { rulesCommandFactory } from '../rules'

export const createPeasantCommandFactory = (name: string, position: number[]): Command => rulesCommandFactory([
  {
    command: compositeCommandFactory([
      (game) => ({
        ...game,
        units: [
          ...game.units,
          {
            name,
            type: 'peasant',
            position: game.orientation.createVector(...position),
          },
        ],
      }),
      infoCommandFactory(`peasant ${name} created at position [${position}]`),
    ])
  },
])