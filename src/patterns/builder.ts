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
  const commands: ConditionalCommand<T>[] = []

  function addResponsibility(
    command: Command<T>,
    specification?: IsSatisfiedBy<T>
  ): ChainOfResponsibilityBuilder<T> {
    commands.push({ command, specification })
    return this
  }

  const build = () => createChain<T>(commands)

  return {
    add: addResponsibility,
    build,
  }
}