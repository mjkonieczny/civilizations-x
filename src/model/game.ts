import { Orientation, noneOrientationFactory } from './orientation'
import { Log } from './log'

export type Game = {
  orientation: Orientation;
  logs: Log[]
}

export const createEmptyGame = (): Game => ({
  orientation: noneOrientationFactory(),
  logs: []
})