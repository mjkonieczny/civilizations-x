import { ewDirectionsMap, nsDirectionsMap } from './directions'
import { Orientation, Vector } from './orientation'

const directionsMap: Record<string, number[]> = ({
  ...nsDirectionsMap,
  ...ewDirectionsMap,
})

export const rectangleStrategy = (n: number, m: number): Orientation => ({
  type: 'rectangle',

  createVector: (...args: number[]): Vector => {
    if (args.length !== 2) {
      throw new Error('Rectangle orientation requires 2 arguments')
    }

    return args
  },

  isWithinBounds: (vector: Vector) => {
    const [x, y] = vector

    return x >= 0 && x < n && y >= 0 && y < m
  },

  isDirection: (direction: string): boolean => {
    if (direction.length === 1) {
      return Object.keys(nsDirectionsMap).includes(direction) || Object.keys(ewDirectionsMap).includes(direction)
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
    const [x, y] = source
    const [tx, ty] = target

    const [dx, dy] = direction.split('').reduce(([dx, dy], subDirection) => {
      const [subDx, subDy] = directionsMap[subDirection]

      return [dx + subDx, dy + subDy]
    }, [0, 0])

    const zx = tx - x
    const zy = ty - y

    return zy / zx === dy / dx && zx * dx >= 0 && zy * dy >= 0
  }
})
