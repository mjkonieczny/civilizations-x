import { Game } from '../../model'
import { compositeCommand } from '../../patterns'
import { info } from '../logs'

export const createWizard = (name: string, position: number[]) => compositeCommand<Game>(
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
  info(`wizard ${name} created at position [${position}]`),
)