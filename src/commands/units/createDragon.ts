import { Game } from '../../model'
import { compositeCommand } from '../../patterns'
import { info } from '../logs'

export const createDragon = (name: string, position: number[]) => compositeCommand<Game>(
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
  info(`dragon ${name} created at position [${position}]`),
)
    
