
export type Command<T> = (context: T) => T;

export const execute = <T>(
  commands: Command<T>[], 
  initialContext: T, 
) => {
  // missing implementation
  return initialContext
}
