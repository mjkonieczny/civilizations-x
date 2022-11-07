import { Command, cubeStrategy, isBoardSizeNotInRange } from '../../model'
import { compositeCommandFactory } from '../composite'
import { infoCommandFactory, warningCommandFactory } from '../logs'
import { rulesCommandFactory } from '../rules'

const dimensionRanges = [
  { min: 1, max: 7 },
  { min: 1, max: 8 },
  { min: 1, max: 13 },
]

export const createCubeBoardCommandFactory = (x: number, y: number, z: number): Command => rulesCommandFactory([
  {
    command: warningCommandFactory('Board size must be between 1-7 x 1-8 x 1-13'),
    specification: isBoardSizeNotInRange(dimensionRanges)([x, y, z]),
  },
  {
    command: compositeCommandFactory([
      (game) => ({
        ...game,
        orientation: cubeStrategy(x, y, z),
      }),
      infoCommandFactory(`Cube board created with ${x} rows and ${y} columns and ${z} height`),
    ]),
  },
])