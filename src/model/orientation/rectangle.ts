import { ewDirectionsMap, nsDirectionsMap } from './directions'
import { Orientation, Vector } from './orientation'

const directionsMap: Record<string, number[]> = ({
  ...nsDirectionsMap,
  ...ewDirectionsMap,
})

export const rectangleStrategy = (n: number, m: number): Orientation => ({
  type: 'rectangle',

  createVector: (...args: number[]): Vector => {
    return args
  },

  isWithinBounds: (vector: Vector) => {
    const [x, y] = vector

    // missing implementation
    return false
  },

  isDirection: (direction: string): boolean => {
    // missing implementation
    return true
  },

  transform: (vector: Vector, direction: string, step: number) => {
    return vector
  },

  isInDirection: (source: Vector, target: Vector, direction: string) => {
    // missing implementation
    return true
  },

  distance: (source: Vector, target: Vector) => {
    const [x, y] = source
    const [tx, ty] = target

    // missing implementation
    return 0
  }
})
