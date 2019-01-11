<template>
  <div>
    <el-menu mode="horizontal">
      <el-menu-item index="1">My Tasks</el-menu-item>
      <el-menu-item index="2">In Progress</el-menu-item>
      <el-menu-item index="3">Completed</el-menu-item>
    </el-menu>
    <el-button type="info" @click="newTodoItem">Add a task</el-button>
    <div v-if="isShown">
      <NewItem/>
    </div>
    <div v-if="todos.length">
      {{ todos }}
    </div>
  </div>
</template>

<script>
import NewItem from './NewItem'

export default {
  components: { NewItem },
  data () {
    return {
      isShown: false,
      todos: this.$store.state.todos
    }
  },
  methods: {
    newTodoItem () {
      this.isShown = !this.isShown
    }
  }
}
</script>
