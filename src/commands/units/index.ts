import { Command, isWithinBounds, not, UnitType } from '../../model'
import { warningCommandFactory } from '../logs'
import { rulesCommandFactory } from '../rules'
import { createDragonCommandFactory } from './createDragon'
import { createKnightCommandFactory } from './createKnight'
import { createPeasantCommandFactory } from './createPeasant'
import { createWizardCommandFactory } from './createWizard'

const getUnitComandFactory = (type: UnitType, name: string, position: number[]) => {
  switch (type) {
  case 'peasant':
    return createPeasantCommandFactory(name, position)
  case 'knight':
    return createKnightCommandFactory(name, position)
  case 'wizard':
    return createWizardCommandFactory(name, position)
  case 'dragon':
    return createDragonCommandFactory(name, position)
  }
}

export const createUnitCommandFactory = (type: UnitType, args: string[]): Command => {
  const [name, ...rest] = args

  const position = rest.map(Number)

  return rulesCommandFactory([
    {
      specification: not(isWithinBounds(position)),
      command: warningCommandFactory(`${type} ${name} cannot be created at position [${position}]`),
    },
    {
      command: getUnitComandFactory(type, name, position),
    }
  ])
}