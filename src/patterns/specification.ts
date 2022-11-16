export type IsSatisfiedBy<T> = (context: T) => boolean

export const and = <T>(...specifications: IsSatisfiedBy<T>[]): IsSatisfiedBy<T> => (game) => {
  // missing implementation
  return true
}

export const or = <T>(...specifications: IsSatisfiedBy<T>[]): IsSatisfiedBy<T> => (game) => {
  // missing implementation
  return false
}

export const not = <T>(specification: IsSatisfiedBy<T>): IsSatisfiedBy<T> => (game) => {
  // missing implementation
  return false
}