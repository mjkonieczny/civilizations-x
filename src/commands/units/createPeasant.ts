import { Game } from '../../model'
import { compositeCommand } from '../../patterns'
import { info } from '../logs'

export const createPeasant = (name: string, position: number[]) => (game) => ({
  ...game,
  // missing implementation
})