import { Orientation, Vector } from './orientation'

export const rectangleStrategy = (n: number, m: number): Orientation => ({
  type: 'rectangle',

  isWithinBounds: (vector: Vector) => {
    const [x, y] = vector

    return x >= 0 && x < n && y >= 0 && y < m
  }
})
