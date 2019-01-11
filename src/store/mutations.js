function onTaskAdded (state, payload) {
  console.log('onTaskAdded in mutations')
  const tmp = state
  tmp.todo.title = payload
  tmp.todos.push(payload)
}

const mutations = {
  onTaskAdded
}

export default mutations
