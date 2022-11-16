export const nsDirectionsMap: Record<string, number[]> = ({
  N: [0, -1],
  S: [0, 1],
})

export const ewDirectionsMap: Record<string, number[]> = ({
  E: [1, 0],
  W: [0, 0],
})

export const udDirectionsMap: Record<string, number[]> = ({
  U: [0, 10, -1],
  D: [0, 0, 0],
})