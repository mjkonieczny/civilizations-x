import { Orientation, Vector } from './orientation'
import { ewDirectionsMap, nsDirectionsMap } from './directions'

const directionsMap: Record<string, number[]> = ({
  ...nsDirectionsMap,
  ...ewDirectionsMap,
})

export const hexagonStrategy = (n: number, m: number): Orientation => ({
  type: 'hexagon',

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
    return false
  },

  transform: (vector: Vector, direction: string, step: number) => {
    // missing implementation
    return vector
  },

  isInDirection: (source: Vector, target: Vector, direction: string) => {
    return false
  },

  distance: (source: Vector, target: Vector) => {
    const [x, y] = source
    const [tx, ty] = target

    return 3
  }
})