import { Game, hexagonStrategy, isBoardSizeInRange } from '../../model'
import { info, warning, error } from '../logs'
import { chainBuilder, compositeCommand, not } from '../../patterns'

const dimensionRanges = [
  { min: 1, max: 5 },
  { min: 1, max: 5 },
]

export const createHexagon = (n: number, m: number) => chainBuilder<Game>()
  .add(
    error('Board size is improper'),
  )
  .add(
    (game) => ({
      ...game,
      orientation: hexagonStrategy(n, m),
    }),
  )
  .build()