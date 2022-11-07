import { Command } from '../model'
import { createBoardCommandFactory } from './board'
import { createUnitCommandFactory } from './units'

export const createCommandFactory = (...args: string[]): Command => {
  const [what, ...rest] = args

  switch (what) {
  case 'board':
    return createBoardCommandFactory(rest)
  case 'dragon':
  case 'knight':
  case 'peasant':
  case 'wizard':
    return createUnitCommandFactory(what, rest)
  default:
    throw new Error(`Unknown command ${what}`)
  }
}