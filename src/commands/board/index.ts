import { Command } from '../../model'
import { createCubeBoardCommandFactory } from './createCube'
import { createHexagonBoardCommandFactory } from './createHexagon'
import { createRectangleBoardCommandFactory } from './createRectangle'

export const createBoardCommandFactory = (type: string, ...args: string[]): Command => {
  switch (type) {
  case 'rectangle':
    return createRectangleBoardCommandFactory(Number(args[0]), Number(args[1]))
  case 'hexagon':
    return createHexagonBoardCommandFactory(Number(args[0]), Number(args[1]))
  case 'cube':
    return createCubeBoardCommandFactory(Number(args[0]), Number(args[1]), Number(args[2]))
  default:
    throw new Error(`Unknown command ${type}`)
  }
}