import { Game } from '..'
import { Specification, and } from '../../patterns'

type DimensionRange = {
  min: number,
  max: number,
}

const isDimensionInRange = (range: DimensionRange) => (dimension: number): Specification<Game> => () => {
  return dimension >= range.min && dimension <= range.max
}

export const isBoardSizeInRange = (dimensionRanges: DimensionRange[]) => (dimensions: number[]): Specification<Game> =>
  and(
    ...dimensions.map((dimension, index) => isDimensionInRange(dimensionRanges[index])(dimension))
  )
