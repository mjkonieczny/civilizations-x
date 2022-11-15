
export type Command<T> = (context: T) => T;

export const execute = <T>(
  commands: Command<T>[], 
  initialContext: T, 
) => {
  return commands.reduce((context, command) => command(context), initialContext)
}
