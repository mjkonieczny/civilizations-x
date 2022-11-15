import { createChain, Responsibility } from './chainOfResponsibility'
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
  const responsibilities: Responsibility<T>[] = []

  function addResponsibility(
    command: Command<T>,
    specification?: IsSatisfiedBy<T>
  ): ChainOfResponsibilityBuilder<T> {
    responsibilities.push({ command, specification })
    return this
  }

  const build = () => createChain<T>(responsibilities)

  return {
    add: addResponsibility,
    build,
  }
}