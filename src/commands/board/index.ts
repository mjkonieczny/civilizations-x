import { Command } from '../../model'
import { createCubeBoardCommandFactory } from './createCube'
import { createHexagonBoardCommandFactory } from './createHexagon'
import { createRectangleBoardCommandFactory } from './createRectangle'

export const createBoardCommandFactory = (args: string[]): Command => {
  const [type, ...rest] = args

  switch (type) {
  case 'rectangle':
    return createRectangleBoardCommandFactory(Number(rest[0]), Number(rest[1]))
  case 'hexagon':
    return createHexagonBoardCommandFactory(Number(rest[0]), Number(rest[1]))
  case 'cube':
    return createCubeBoardCommandFactory(Number(rest[0]), Number(rest[1]), Number(rest[2]))
  default:
    throw new Error(`Unknown command ${type}`)
  }
}