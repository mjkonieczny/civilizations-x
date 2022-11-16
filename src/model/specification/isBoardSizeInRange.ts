import { Game } from '..'
import { IsSatisfiedBy, and } from '../../patterns'

type DimensionRange = {
  min: number,
  max: number,
}

const isDimensionInRange = (range: DimensionRange) => (dimension: number): IsSatisfiedBy<Game> => () => {
  return dimension >= range.min && dimension <= range.max
}

export const isBoardSizeInRange = (dimensionRanges: DimensionRange[]) => (dimensions: number[]): IsSatisfiedBy<Game> =>
  and(
    // check all dimensions
  )
