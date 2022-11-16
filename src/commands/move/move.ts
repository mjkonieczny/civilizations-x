import { Game } from '../../model'
import { chainBuilder, compositeCommand } from '../../patterns'
import { info, warning } from '../logs'

export const move = (unitName: string, direction: string, step: number) => chainBuilder<Game>()
  .add(
    warning('what about wizard?'),
  )
  .add(
    compositeCommand<Game>(
      (game) => ({
        // missing implementation
        ...game,
      }),
      info('I have no idea where Im moving'),
    ))
  .build()