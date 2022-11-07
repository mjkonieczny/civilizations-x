import { Command } from '../../model'
import { compositeCommandFactory } from '../composite'
import { infoCommandFactory } from '../logs'
import { rulesCommandFactory } from '../rules'

export const createKnightCommandFactory = (name: string, position: number[]): Command => rulesCommandFactory([
  {
    command: compositeCommandFactory([
      (game) => ({
        ...game,
        units: [
          ...game.units,
          {
            name,
            type: 'knight',
            position: game.orientation.createVector(...position),
          },
        ],
      }),
      infoCommandFactory(`knight ${name} created at position [${position}]`),
    ])
  },
])