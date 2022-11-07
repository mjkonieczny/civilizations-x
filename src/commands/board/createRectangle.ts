import { Command } from '../../model'
import { isBoardSizeNotInRange, rectangleStrategy } from '../../model'
import { rulesCommandFactory } from '../rules'
import { warningCommandFactory, infoCommandFactory } from '../logs'
import { compositeCommandFactory } from '../composite'

export const createRectangleBoardCommandFactory = (n: number, m: number): Command => rulesCommandFactory([
  {
    command: warningCommandFactory('Board size must be between 1-10 x 1-20'),
    specification: isBoardSizeNotInRange(10, 20)(n, m),
  },
  {
    command: compositeCommandFactory([
      (game) => ({
        ...game,
        orientation: rectangleStrategy(n, m),
      }),
      infoCommandFactory(`Rectangle board created with ${n} rows and ${m} columns`),
    ]),
  },
])
