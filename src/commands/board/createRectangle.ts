import { Game, isBoardSizeInRange } from '../../model'
import { rectangleStrategy } from '../../model'
import { warning, info } from '../logs'
import { chainBuilder, compositeCommand, not } from '../../patterns'

const dimensionRanges = [
  { min: 1, max: 10 },
  { min: 1, max: 20 },
]

export const createRectangle = (n: number, m: number) => chainBuilder<Game>()
  .add(
    warning('Board size must be between 1-10 x 1-20'),
    not(isBoardSizeInRange(dimensionRanges)([n, m])),
  )
  .add(
    compositeCommand(
      (game) => ({
        ...game,
        orientation: rectangleStrategy(n, m),
      }),
      info(`Rectangle board created with ${n} rows and ${m} columns`),
    ),
  )
  .build()
