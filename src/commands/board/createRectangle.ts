import { Command } from '../../model'
import { isBoardSizeNotInRange } from '../../specification'
import { rulesCommandFactory } from '../rules'
import { warningCommandFactory, infoCommandFactory } from '../logs'
import { compositeCommandFactory } from '../composite'
import { rectangleStrategy } from '../../model/orientation'

export const createRectangleBoardCommandFactory = (n: number, m: number): Command => rulesCommandFactory([
  {
    command: warningCommandFactory('Board size must be between 1 and 250'),
    specification: isBoardSizeNotInRange(n, m),
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
