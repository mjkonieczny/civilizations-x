import { createBoard } from './board'
import { createUnit } from './units'

export const create = (...args: string[])  => {
  const [type, ...rest] = args

  switch (type) {
  case 'board':
    return createBoard(rest)
  case 'dragon':
  case 'knight':
  case 'peasant':
  case 'wizard':
    return createUnit(type, rest)
  default:
    throw new Error(`Unknown command ${type}`)
  }
}