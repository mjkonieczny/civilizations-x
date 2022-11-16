import { Game } from '../../model'
import { compositeCommand } from '../../patterns'
import { info } from '../logs'

export const createDragon = (name: string, position: number[]) => compositeCommand<Game>(
  (game) => ({
    ...game,
    // Missing implementation and logs
  }),
)
    
