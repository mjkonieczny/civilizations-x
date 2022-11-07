import { Command } from '../../model'
import { compositeCommandFactory } from '../composite'
import { infoCommandFactory } from '../logs'
import { rulesCommandFactory } from '../rules'

export const createWizardCommandFactory = (name: string, position: number[]): Command => rulesCommandFactory([
  {
    command: compositeCommandFactory([
      (game) => ({
        ...game,
        units: [
          ...game.units,
          {
            name,
            type: 'wizard',
            position: game.orientation.createVector(...position),
          },
        ],
      }),
      infoCommandFactory(`wizard ${name} created at position [${position}]`),
    ])
  },
])