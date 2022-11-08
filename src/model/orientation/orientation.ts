export type Vector = number[]

export type OrientationType = 'none' | 'rectangle' | 'hexagon' | 'cube' 

export type Orientation = {
  type: OrientationType

  createVector: (...args: number[]) => Vector
  isWithinBounds: (vector: Vector) => boolean

  isDirection: (direction: string) => boolean
  transform: (vector: Vector, direction: string, step: number) => Vector

  isInDirection: (source: Vector, target: Vector, direction: string) => boolean
}

