import { createEmptyGame, Game } from './game'

export type Command = (game: Game) => Game;

export const execute = (
  commands: Command[], 
  game: Game = createEmptyGame() 
) => {
  return commands.reduce((context, command) => command(context), game)
}