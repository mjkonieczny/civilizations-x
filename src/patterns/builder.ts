import { createChain, ConditionalCommand } from './chainOfResponsibility'
import { Command } from './command'
import { IsSatisfiedBy } from './specification'

type ChainOfResponsibilityBuilder<T> = {
  add: (
    command: Command<T>, 
    specification?: IsSatisfiedBy<T>
  ) => ChainOfResponsibilityBuilder<T>
  build: () => Command<T>
}

export const chainBuilder = <T>(): ChainOfResponsibilityBuilder<T> => {

  // this structure allows to use this and return builder and keep functional approach
  function add(
    command: Command<T>,
    specification?: IsSatisfiedBy<T>
  ): ChainOfResponsibilityBuilder<T> {

    return this
  }

  const build = () => createChain<T>([])

  return {
    add,
    build,
  }
}