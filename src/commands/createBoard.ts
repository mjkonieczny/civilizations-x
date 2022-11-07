import { Command } from '../model'
import { isBoardSizeNotInRange } from '../specification'
import { rulesCommandFactory } from './rules'
import { warningCommandFactory } from './warning'

const createBoardCommand = (n: number, m: number): Command => (game) => ({
  ...game,
  board: {
    n,
    m,
  },
  logs: [
    ...game.logs,
    {
      text: `Board created with ${n} rows and ${m} columns`,
      level: 'info'
    }
  ]
})

export const createBoardCommandFactory = (n: number, m: number): Command => rulesCommandFactory([
  {
    command: warningCommandFactory('Board size must be between 1 and 250'),
    specification: isBoardSizeNotInRange(n, m),
  },
  {
    command: createBoardCommand(n, m),
  },
])
