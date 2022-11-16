import { Game } from '../../model'
import { compositeCommand } from '../../patterns'
import { info } from '../logs'

export const createKnight = (name: string, position: number[]) => compositeCommand<Game>(
  info(`knight ${name} created`),
)