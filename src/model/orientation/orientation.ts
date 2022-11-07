export type Vector = number[]

export type OrientationType = 'none' | 'rectangle' | 'hexagon' | 'cube' 

export type Orientation = {
  type: OrientationType
  isWithinBounds: (vector: Vector) => boolean
}

