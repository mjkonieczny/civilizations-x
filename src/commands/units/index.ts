import { Command, isUnitNameUnique, isWithinBounds, not, UnitType } from '../../model'
import { warningCommandFactory } from '../logs'
import { chainOfResponsibilityBuilder } from '../chainOfResponsibility'
import { createDragonCommandFactory } from './createDragon'
import { createKnightCommandFactory } from './createKnight'
import { createPeasantCommandFactory } from './createPeasant'
import { createWizardCommandFactory } from './createWizard'

const getUnitCommandFactory = (type: UnitType, name: string, position: number[]) => {
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

  return chainOfResponsibilityBuilder()
    .addResponsibility(
      warningCommandFactory(`${type} ${name} cannot be created at position [${position}]`),
      not(isWithinBounds(position)),
    )
    .addResponsibility(
      warningCommandFactory(`${type} ${name} cannot be created because the name is already taken`),
      not(isUnitNameUnique(name)),
    )
    .addResponsibility(
      getUnitCommandFactory(type, name, position),
    )
    .build()
}