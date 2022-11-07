import { Vector } from './orientation'

export type UnitType = 'dragon' | 'knight' | 'peasant' | 'wizard'

export type Unit = {
  name: string;
  type: UnitType;
  position: Vector;
}