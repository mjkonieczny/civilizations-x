import { Game, isUnitNameUnique, isWithinBounds, UnitType } from '../../model'
import { chainBuilder, not } from '../../patterns'
import { warning } from '../logs'
import { createDragon } from './createDragon'
import { createKnight } from './createKnight'
import { createPeasant } from './createPeasant'
import { createWizard } from './createWizard'

const getUnitCommandFactory = (type: UnitType, name: string, position: number[]) => {
  switch (type) {
  case 'peasant':
    return createPeasant(name, position)
  case 'knight':
    return createKnight(name, position)
  case 'wizard':
    return createWizard(name, position)
  case 'dragon':
    return createDragon(name, position)
  }
}

export const createUnit = (type: UnitType, args: string[]) => {
  const [name, ...rest] = args

  const position = rest.map(Number)

  return chainBuilder<Game>()
    .add(
      warning(`${type} ${name} cannot be created at position [${position}]`),
      not(isWithinBounds(position)),
    )
    .add(
      warning(`${type} ${name} cannot be created because the name is already taken`),
      not(isUnitNameUnique(name)),
    )
    .add(
      getUnitCommandFactory(type, name, position),
    )
    .build()
}