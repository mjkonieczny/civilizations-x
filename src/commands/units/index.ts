import { Command, UnitType } from '../../model'
import { createDragonCommandFactory } from './createDragon'
import { createKnightCommandFactory } from './createKnight'
import { createPeasantCommandFactory } from './createPeasant'
import { createWizardCommandFactory } from './createWizard'

export const createUnitCommandFactory = (type: UnitType, args: string[]): Command => {
  const [name, ...rest] = args

  const position = rest.map(Number)

  switch (type) {
  case 'dragon':
    return createDragonCommandFactory(name, position)
  case 'knight':
    return createKnightCommandFactory(name, position)
  case 'peasant':
    return createPeasantCommandFactory(name, position)
  case 'wizard':
    return createWizardCommandFactory(name, position)
  default:
    throw new Error(`Unknown unit type ${type}`)
  }
}