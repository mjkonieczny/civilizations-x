export type Specification<T> = (context: T) => boolean

export const and = <T>(...specifications: Specification<T>[]): Specification<T> => (game) => {
  return specifications.every((specification) => specification(game))
}

export const or = <T>(...specifications: Specification<T>[]): Specification<T> => (game) => {
  return specifications.some((specification) => specification(game))
}

export const not = <T>(specification: Specification<T>): Specification<T> => (game) => {
  return !specification(game)
}