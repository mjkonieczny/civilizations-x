import { Command } from '../../model'
import { createRectangleBoardCommandFactory } from './createRectangle'

export const createBoardCommandFactory = (type: string, ...args: string[]): Command => {
  console.log(type)
  switch (type) {
  case 'rectangle':
    return createRectangleBoardCommandFactory(Number(args[0]), Number(args[1]))
  default:
    throw new Error(`Unknown command ${type}`)
  }
}