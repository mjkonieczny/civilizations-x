import { Command } from './command'
import { IsSatisfiedBy } from './specification'

export type Responsibility<T> = {
  command: Command<T>;
  specification?: IsSatisfiedBy<T>;
}

export const createChain = <T>(chain: Responsibility<T>[]): Command<T> => (context: T) => {
  const responsible = chain.find(rule => rule.specification ? rule.specification(context) : true)

  return responsible ? responsible.command(context) : context
}
