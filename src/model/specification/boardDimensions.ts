import { and, not, Specification } from '../../model'

const isBoardWidthInRange = (maxWidth: number) => (width: number): Specification => () => {
  return width > 0 && width < maxWidth
}

const isBoardHeightInRange = (maxHeight: number) => (height: number): Specification => () => {
  return height > 0 && height < maxHeight
}

export const isBoardSizeNotInRange = (maxWidth: number, maxHeight: number) => (width: number, height: number): Specification =>
  not(
    and(
      isBoardWidthInRange(maxWidth)(width),
      isBoardHeightInRange(maxHeight)(height)
    )
  )