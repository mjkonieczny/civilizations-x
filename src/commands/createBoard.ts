import { Command } from '../model'
import { isBoardSizeNotInRange } from '../specification'
import { rulesCommandFactory } from './rules'
import { warningCommandFactory } from './warning'
import { infoCommandFactory } from './info'
import { compositeCommandFactory } from './composite'

export const createBoardCommandFactory = (n: number, m: number): Command => rulesCommandFactory([
  {
    command: warningCommandFactory('Board size must be between 1 and 250'),
    specification: isBoardSizeNotInRange(n, m),
  },
  {
    command: compositeCommandFactory([
      (game) => ({
        ...game,
        board: {
          n,
          m,
        },
      }),
      infoCommandFactory(`Board created with ${n} rows and ${m} columns`),
    ]),
  },
])
