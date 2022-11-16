import { error } from '../logs'
import { createCube } from './createCube'
import { createHexagon } from './createHexagon'
import { createRectangle } from './createRectangle'

export const createBoard = (args: string[]) => {
  const [type, ...rest] = args

  switch (type) {
  case 'rectangle':
    return createRectangle(Number(rest[0]), Number(rest[1]))
  default:
    return error(`Unknown board type ${type}`)
  }
}