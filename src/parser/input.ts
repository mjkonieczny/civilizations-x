import { Command } from '../model/command'
import { commandFactory } from '../commands'

export const parse = (input: string): Command[] => {
  const lines = input
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)

  return lines.map(line => commandFactory(line))
}