export type IsSatisfiedBy<T> = (context: T) => boolean

export const and = <T>(...specifications: IsSatisfiedBy<T>[]): IsSatisfiedBy<T> => (game) => {
  return specifications.every((specification) => specification(game))
}

export const or = <T>(...specifications: IsSatisfiedBy<T>[]): IsSatisfiedBy<T> => (game) => {
  return specifications.some((specification) => specification(game))
}

export const not = <T>(specification: IsSatisfiedBy<T>): IsSatisfiedBy<T> => (game) => {
  return !specification(game)
}