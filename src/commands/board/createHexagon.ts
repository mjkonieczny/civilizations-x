import { Command, hexagonStrategy, isBoardSizeNotInRange } from '../../model'
import { compositeCommandFactory } from '../composite'
import { infoCommandFactory, warningCommandFactory } from '../logs'
import { chainOfResponsibilityBuilder } from '../chainOfResponsibility'

const dimensionRanges = [
  { min: 1, max: 5 },
  { min: 1, max: 5 },
]

export const createHexagonBoardCommandFactory = (n: number, m: number): Command => chainOfResponsibilityBuilder()
  .addResponsibility(
    warningCommandFactory('Board size must be between 1-5 x 1-5'),
    isBoardSizeNotInRange(dimensionRanges)([n, m]),
  )
  .addResponsibility(
    compositeCommandFactory([
      (game) => ({
        ...game,
        orientation: hexagonStrategy(n, m),
      }),
      infoCommandFactory(`Hexagon board created with ${n} rows and ${m} columns`),
    ]),
  )
  .build()