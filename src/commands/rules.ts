import { Command, Game, Rule } from '../model'

export const rulesCommandFactory = (rules: Rule[]): Command => (game: Game) => {
  const rule = rules.find(rule => rule.specification ? rule.specification(game) : true)

  return rule ? rule.command(game) : game
}