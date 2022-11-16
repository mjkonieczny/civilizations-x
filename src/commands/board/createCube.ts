import { cubeStrategy, Game, isBoardSizeInRange } from '../../model'
import { info, warning } from '../logs'
import { chainBuilder, compositeCommand, not } from '../../patterns'

const dimensionRanges = [
  { min: 0, max: 1 },
  { min: 0, max: 1 },
  { min: 0, max: 1 },
]

export const createCube = (x: number, y: number, z: number) => info('Board created')
// lots of implementation missing
