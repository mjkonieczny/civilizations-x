import { Orientation, Vector } from './orientation'

export const cubeStrategy = (n: number, m: number, h: number): Orientation => ({
  type: 'cube',

  isWithinBounds: (vector: Vector) => {    
    const [x, y, z] = vector
  
    return x >= 0 && x < n && y >=0 && y < m && z > -h && z < h
  }
})