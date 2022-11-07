import { Orientation } from './orientation'

export const noneOrientationFactory = (): Orientation => ({
  type: 'none',
  isWithinBounds: () => true,
})
