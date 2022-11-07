import { Command } from '../../model'
import { isBoardSizeNotInRange, rectangleStrategy } from '../../model'
import { chainOfResponsibilityBuilder } from '../chainOfResponsibility'
import { warningCommandFactory, infoCommandFactory } from '../logs'
import { compositeCommandFactory } from '../composite'

const dimensionRanges = [
  { min: 1, max: 10 },
  { min: 1, max: 20 },
]

export const createRectangleBoardCommandFactory = (n: number, m: number): Command => chainOfResponsibilityBuilder()
  .addResponsibility(
    warningCommandFactory('Board size must be between 1-10 x 1-20'),
    isBoardSizeNotInRange(dimensionRanges)([n, m]),
  )
  .addResponsibility(
    compositeCommandFactory([
      (game) => ({
        ...game,
        orientation: rectangleStrategy(n, m),
      }),
      infoCommandFactory(`Rectangle board created with ${n} rows and ${m} columns`),
    ]),
  )
  .build()
