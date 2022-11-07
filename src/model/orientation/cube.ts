import { Orientation, Vector } from './orientation'

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
  
    return x >= 0 && x < n && y >=0 && y < m && z > -h && z < h
  }
})