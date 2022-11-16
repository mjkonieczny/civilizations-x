import { Game, isUnitOfType, isWizardNearby } from '../../model'
import { chainBuilder, compositeCommand, not } from '../../patterns'
import { info, warning } from '../logs'

export const fire = (name: string, direction: string) => chainBuilder<Game>()
  .add(
    warning(`${name} cannot fire because it is not a dragon`),
    not(isUnitOfType('dragon')(name))
  )
  .add(
    warning('Wizard nearby, cannot fire'),
    isWizardNearby(name),
  )
  .add(
    compositeCommand(
      info(`${name} fired ${direction}`),
      (game) => {
        const { units, orientation } = game

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { position: dragonPosition } = units.find((unit) => unit.name === name)!

        const unitsKilled = units.filter(
          ({ position: unitPosition }) => orientation.isInDirection(dragonPosition, unitPosition, direction)
        )

        return {
          ...game,
          units: units.filter((unit) => !unitsKilled.includes(unit)),
          logs: [
            ...game.logs,
            ...unitsKilled.map((unit) => ({
              text: `${unit.name} killed by ${name}`,
              level: 'info',
            })),
          ]
        } as Game
      },
    )
  )
  .build()
