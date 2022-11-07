import { Orientation, noneOrientationFactory } from './orientation'
import { Log } from './log'
import { Unit } from './unit'

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