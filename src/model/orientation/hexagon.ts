import { Orientation, Vector } from './orientation'
import { ewDirectionsMap, nsDirectionsMap } from './directions'

const directionsMap: Record<string, number[]> = ({
  ...nsDirectionsMap,
  ...ewDirectionsMap,
})

export const hexagonStrategy = (n: number, m: number): Orientation => ({
  type: 'hexagon',

  createVector: (...args: number[]): Vector => {
    if (args.length !== 2) {
      throw new Error('Hexagon orientation requires 2 arguments')
    }

    return args
  },

  isWithinBounds: (vector: Vector) => {
    
    const [x, y] = vector

    return x > -n && x < n && y > -m && y < m
  },

  isDirection: (direction: string): boolean => {
    if (direction.length === 1) {
      return Object.keys(ewDirectionsMap).includes(direction)
    } else {
      return Object.keys(nsDirectionsMap).includes(direction[0]) && Object.keys(ewDirectionsMap).includes(direction[1])
    }
  },

  transform: (vector: Vector, direction: string, step: number) => {
    const subDirections = direction.split('')

    return subDirections.reduce(([ x, y ], subDirection) => {
      const [dx, dy] = directionsMap[subDirection]

      return [x + dx * step, y + dy * step]
    }, vector)
  },

  isInDirection: (source: Vector, target: Vector, direction: string) => {
    return false
  }
})