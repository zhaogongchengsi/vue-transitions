declare module '*.vue' {
	import { type DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}

type TimingFunction = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-end' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset'

interface Transition {
  duration?: number
  timingFunction?: TimingFunction
}
