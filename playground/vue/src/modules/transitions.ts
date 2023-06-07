import Move from '#/move/index'
import Fade from '#/fade/index'
import '#/fade/index.css'
import '#/move/index.css'
import type { TransitionModule } from '~/types'

const components = [
  { name: 'Move', component: Move },
  { name: 'Fade', component: Fade },
]

export const install: TransitionModule = ({ app }) => {
  components.forEach(({ name, component }) => {
    app.component(name, component)
  })
}
