import { and, not, Specification } from '../model'

const isBoardWidthInRange = (width: number): Specification => () => {
  return width > 0 && width < 250
}

const isBoardHeightInRange = (height: number): Specification => () => {
  return height > 0 && height < 250
}

export const isBoardSizeNotInRange = (width: number, height: number): Specification =>
  not(
    and(
      isBoardWidthInRange(width),
      isBoardHeightInRange(height)
    )
  )