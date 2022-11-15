import { Command } from './command'

export const compositeCommand = <T>(...commands: Command<T>[]): Command<T> => (game) => {
  return commands.reduce((game, command) => command(game), game)
}