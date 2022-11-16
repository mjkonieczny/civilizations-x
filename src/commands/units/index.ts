import { Game, isUnitNameUnique, isWithinBounds, UnitType } from '../../model'
import { chainBuilder, not } from '../../patterns'
import { error, warning } from '../logs'
import { createDragon } from './createDragon'
import { createKnight } from './createKnight'
import { createPeasant } from './createPeasant'
import { createWizard } from './createWizard'

const getUnitCommandFactory = (type: UnitType, name: string, position: number[]) => {
  switch (type) {
  case 'peasant':
  case 'knight':
  case 'wizard':
  case 'dragon':
    return createDragon(name, position)
  }
}

export const createUnit = (type: UnitType, args: string[]) => {
  const [name, ...rest] = args

  const position = rest.map(Number)

  return chainBuilder<Game>()
    .add(
      error(`${type} ${name} cannot be created]`),
      isWithinBounds(position),
    )
    .add(
      getUnitCommandFactory(type, name, position),
    )
    .build()
}