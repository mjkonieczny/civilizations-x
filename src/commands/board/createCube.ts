import { cubeStrategy, Game, isBoardSizeInRange } from '../../model'
import { info, warning } from '../logs'
import { Command, chainBuilder, compositeCommand, not } from '../../patterns'

const dimensionRanges = [
  { min: 1, max: 7 },
  { min: 1, max: 8 },
  { min: 1, max: 13 },
]

export const createCube = (x: number, y: number, z: number): Command<Game> => chainBuilder<Game>()
  .add(
    warning('Board size must be between 1-7 x 1-8 x 1-13'),
    not(isBoardSizeInRange(dimensionRanges)([x, y, z])),
  )
  .add(
    compositeCommand(
      (game) => ({
        ...game,
        orientation: cubeStrategy(x, y, z),
      }),
      info(`Cube board created with ${x} rows and ${y} columns and ${z} height`),
    )
  )
  .build()
