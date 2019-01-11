function onTaskAdded (context, payload) {
  console.log('onTaskAdded in actions')
  context.commit('onTaskAdded', payload)
}

const actions = {
  onTaskAdded
}

export default actions
