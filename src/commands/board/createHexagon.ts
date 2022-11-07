import { Command, hexagonStrategy, isBoardSizeNotInRange } from '../../model'
import { compositeCommandFactory } from '../composite'
import { infoCommandFactory, warningCommandFactory } from '../logs'
import { rulesCommandFactory } from '../rules'

export const createHexagonBoardCommandFactory = (n: number, m: number): Command => rulesCommandFactory([
  {
    command: warningCommandFactory('Board size must be between 1-5 x 1-5'),
    specification: isBoardSizeNotInRange(5, 5)(n, m),
  },
  {
    command: compositeCommandFactory([
      (game) => ({
        ...game,
        orientation: hexagonStrategy(n, m),
      }),
      infoCommandFactory(`Hexagon board created with ${n} rows and ${m} columns`),
    ]),
  },
])