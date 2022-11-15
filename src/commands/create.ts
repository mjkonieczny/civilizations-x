import { createBoard } from './board'
import { createUnit } from './units'

export const create = (...args: string[])  => {
  const [what, ...rest] = args

  switch (what) {
  case 'board':
    return createBoard(rest)
  case 'dragon':
  case 'knight':
  case 'peasant':
  case 'wizard':
    return createUnit(what, rest)
  default:
    throw new Error(`Unknown command ${what}`)
  }
}