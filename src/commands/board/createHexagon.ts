import { Game, hexagonStrategy, isBoardSizeInRange } from '../../model'
import { info, warning } from '../logs'
import { chainBuilder, compositeCommand, not } from '../../patterns'

const dimensionRanges = [
  { min: 1, max: 5 },
  { min: 1, max: 5 },
]

export const createHexagon = (n: number, m: number) => chainBuilder<Game>()
  .add(
    warning('Board size must be between 1-5 x 1-5'),
    not(isBoardSizeInRange(dimensionRanges)([n, m])),
  )
  .add(
    compositeCommand(
      (game) => ({
        ...game,
        orientation: hexagonStrategy(n, m),
      }),
      info(`Hexagon board created with ${n} rows and ${m} columns`),
    ),
  )
  .build()