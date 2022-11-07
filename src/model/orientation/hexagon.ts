import { Orientation, Vector } from './orientation'

export const hexagonStrategy = (n: number, m: number): Orientation => ({
  type: 'hexagon',

  isWithinBounds: (vector: Vector) => {
    
    const [x, y] = vector

    return x > -n && x < n && y > -m && y < m
  }
})