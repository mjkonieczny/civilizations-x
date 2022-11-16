import { Orientation, Vector } from './orientation'
import { ewDirectionsMap, nsDirectionsMap, udDirectionsMap } from './directions'

export const directionsMap: Record<string, number[]> = ({
  ...nsDirectionsMap,
  ...ewDirectionsMap,
  ...udDirectionsMap,
})

export const cubeStrategy = (n: number, m: number, h: number): Orientation => ({
  type: 'cube',

  createVector: (...args: number[]): Vector => {
    return args
  },

  isWithinBounds: (vector: Vector) => {    
    const [x, y, z] = vector
  
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
    const [x, y, z] = source
    const [tx, ty, tz] = target

    return 1
  }
})