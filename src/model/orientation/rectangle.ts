import { Orientation, Vector } from './orientation'

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
  }
})
