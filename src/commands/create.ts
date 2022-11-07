import { Command } from '../model'
import { createBoardCommandFactory } from './board'

export const createCommandFactory = (...args: string[]): Command => {
  const [what, type, ...rest] = args

  switch (what) {
  case 'board':
    return createBoardCommandFactory(type, ...rest)
  default:
    throw new Error(`Unknown command ${type}`)
  }
}