import { Command, Game, Responsibility, Specification } from '../model'

const chainOfResponsibilityFactory = (chainOfResponsibility: Responsibility[]): Command => (game: Game) => {
  const responsible = chainOfResponsibility.find(rule => rule.specification ? rule.specification(game) : true)

  return responsible ? responsible.command(game) : game
}

type ChainOfResponsibilityBuilder = {
  addResponsibility: (command: Command, specification?: Specification) => ChainOfResponsibilityBuilder
  build: () => Command
}

export const chainOfResponsibilityBuilder = (): ChainOfResponsibilityBuilder => {
  const chainOfResponsibility: Responsibility[] = []

  function addResponsibility(command: Command, specification?: Specification): ChainOfResponsibilityBuilder {
    chainOfResponsibility.push({ command, specification })
    return this
  }

  const build = () => chainOfResponsibilityFactory(chainOfResponsibility)

  return {
    addResponsibility,
    build,
  }
}