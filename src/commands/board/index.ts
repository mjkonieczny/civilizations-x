import { Command } from '../../model'
import { createHexagonBoardCommandFactory } from './createHexagon'
import { createRectangleBoardCommandFactory } from './createRectangle'

export const createBoardCommandFactory = (type: string, ...args: string[]): Command => {
  switch (type) {
  case 'rectangle':
    return createRectangleBoardCommandFactory(Number(args[0]), Number(args[1]))
  case 'hexagon':
    return createHexagonBoardCommandFactory(Number(args[0]), Number(args[1]))
  default:
    throw new Error(`Unknown command ${type}`)
  }
}