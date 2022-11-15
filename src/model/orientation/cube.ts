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
    if (args.length !== 3) {
      throw new Error('Cube orientation requires 3 arguments')
    }
    
    return args
  },

  isWithinBounds: (vector: Vector) => {    
    const [x, y, z] = vector
  
    return x >= 0 && x < n && y >=0 && y < m && z >=0 && z < h
  },

  isDirection: (direction: string): boolean => {
    if (direction.length === 1) {
      return Object.keys(udDirectionsMap).includes(direction) || Object.keys(nsDirectionsMap).includes(direction) || Object.keys(ewDirectionsMap).includes(direction)
    } else if (direction.length === 2) {
      return Object.keys(udDirectionsMap).includes(direction[1]) && Object.keys(nsDirectionsMap).includes(direction[0]) || Object.keys(udDirectionsMap).includes(direction[1]) && Object.keys(ewDirectionsMap).includes(direction[0]) || Object.keys(nsDirectionsMap).includes(direction[0]) && Object.keys(ewDirectionsMap).includes(direction[1])
    } else {
      return Object.keys(udDirectionsMap).includes(direction[2]) && Object.keys(nsDirectionsMap).includes(direction[0]) && Object.keys(ewDirectionsMap).includes(direction[1])
    }
  },

  transform: (vector: Vector, direction: string, step: number) => {
    const subDirections = direction.split('')

    return subDirections.reduce(([ x, y, z = 0 ], subDirection) => {
      const [dx, dy, dz = 0] = directionsMap[subDirection]

      return [x + dx * step, y + dy * step, z + dz * step]
    }, vector)
  },

  isInDirection: (source: Vector, target: Vector, direction: string) => {
    return false
  }
})