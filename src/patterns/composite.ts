import { Command } from './command'

export const compositeCommand = <T>(...commands: Command<T>[]): Command<T> => (game) => {
  // missing implementation
  return game
}