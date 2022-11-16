import { createBoard } from './board'
import { createUnit } from './units'

export const create = (...args: string[])  => {
  const [type, ...rest] = args

  switch (type) {
  case 'board':
    return createBoard(rest)
  default:
    throw new Error(`Unknown command ${type}`)
  }
}