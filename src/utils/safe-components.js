
export const safeComponents = ({components, stencil, warningComponent}) => new Proxy(components, {
  get: (target, prop) => {
    if (prop in target) {
      return target[prop]
    }
    return warningComponent({name: prop, availableNames: Object.keys(target)})
  }
})
