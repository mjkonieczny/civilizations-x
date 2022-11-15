import { Orientation, noneOrientationFactory } from './orientation'
import { Log } from './log'
import { Unit } from './unit'
import { Command, execute as executeCommands } from '../patterns'

export type Game = {
  orientation: Orientation;
  units: Unit[]
  logs: Log[]
}

export const createEmptyGame = (): Game => ({
  orientation: noneOrientationFactory(),
  units: [],
  logs: []
})

export const execute = (commands: Command<Game>[]) => {
  return executeCommands(commands, createEmptyGame())
}