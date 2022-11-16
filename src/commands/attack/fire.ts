import { Game, isUnitOfType } from '../../model'
import { chainBuilder, compositeCommand, not } from '../../patterns'
import { error, info } from '../logs'

export const fire = (name: string, direction: string) => chainBuilder<Game>()
  .add(
    error(''),
    not(isUnitOfType('dragon')(name))
  )
// missing specification
  .add(
    compositeCommand(
      info(''),
      (game) => {
        // missing implementation
        return game
      },
    )
  )
  .build()
