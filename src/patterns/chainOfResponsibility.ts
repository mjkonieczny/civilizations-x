import { Command } from './command'
import { IsSatisfiedBy } from './specification'

export type ConditionalCommand<T> = {
  command: Command<T>;
  specification?: IsSatisfiedBy<T>;
}

export const createChain = <T>(chain: ConditionalCommand<T>[]): Command<T> => (context: T) => {

  // missing implementation

  return context
}
