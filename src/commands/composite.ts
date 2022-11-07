import { Command } from '../model'

export const compositeCommandFactory = (commands: Command[]): Command => (game) => {
  return commands.reduce((game, command) => command(game), game)
}