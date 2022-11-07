import { Command } from './command'
import { Specification } from './specification'

export type Rule = {
  command: Command;
  specification?: Specification;
}
