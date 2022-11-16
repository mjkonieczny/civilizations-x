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
    warning('Improper board size'),
    isBoardSizeInRange(dimensionRanges)([n, m]),
  )
  .add(
    compositeCommand(
      (game) => ({
        // sth is missing
        ...game,
      }),
      info('Rectangle board created'),
    ),
  )
  .build()
