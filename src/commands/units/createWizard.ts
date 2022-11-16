import { Game } from '../../model'
import { compositeCommand } from '../../patterns'
import { info, warning } from '../logs'

export const createWizard = (name: string, position: number[]) => 
  warning('wizard created ')
