import { Orientation, Vector } from './orientation'

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
    return false
  },

  transform: (vector: Vector, direction: string, step: number) => {
    return vector
  }
})