import { Game } from '../../model'
import { compositeCommand } from '../../patterns'
import { info } from '../logs'

export const createKnight = (name: string, position: number[]) => compositeCommand<Game>(
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
  info(`knight ${name} created at position [${position}]`),
)