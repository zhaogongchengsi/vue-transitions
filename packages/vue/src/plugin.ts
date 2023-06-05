import type { App, DefineComponent } from 'vue'

export function CreateVueTransitionsPlugin(components: DefineComponent[]) {
  return {
    install(app: App) {
      components.forEach((component) => {
        app.component(component.name, component)
      })
    },
  }
}
