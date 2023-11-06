export const getPriority = ({priority, args}) =>
  typeof priority === 'function' ? priority(args) : (priority || 0)
