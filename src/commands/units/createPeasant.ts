import { Game } from '../../model'
import { compositeCommand } from '../../patterns'
import { info } from '../logs'

export const createPeasant = (name: string, position: number[]) => compositeCommand<Game>(
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
  info(`peasant ${name} created at position [${position}]`),
)