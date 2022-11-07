import { Command } from './command'
import { Specification } from './specification'

export type Responsibility = {
  command: Command;
  specification?: Specification;
}
