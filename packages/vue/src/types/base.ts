export type TimingFunction = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-end' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset'

export interface Transition {
  duration?: number
  timingFunction?: TimingFunction
}
