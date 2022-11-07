import { and, not, Specification } from '../../model'

type DimensionRange = {
  min: number,
  max: number,
}

const isDimensionInRange = (range: DimensionRange) => (dimension: number): Specification => () => {
  return dimension >= range.min && dimension <= range.max
}

export const isBoardSizeNotInRange = (dimensionRanges: DimensionRange[]) => (dimensions: number[]): Specification =>
  not(
    and(
      ...dimensions.map((dimension, index) => isDimensionInRange(dimensionRanges[index])(dimension))
    )
  )