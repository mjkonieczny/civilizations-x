import { Command } from '../model'
import { createBoardCommandFactory } from './createBoard'

export const createCommandFactory = (...args: string[]): Command => {
  const [type, ...rest] = args

  switch (type) {
  case 'board':
    return createBoardCommandFactory(Number(rest[0]), Number(rest[1]))
  default:
    throw new Error(`Unknown command ${type}`)
  }
}