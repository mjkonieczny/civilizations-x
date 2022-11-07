import { Orientation } from './orientation'

export const noneOrientationFactory = (): Orientation => ({
  type: 'none',

  createVector: (...args: number[]) => args,
  
  isWithinBounds: () => true,
})
