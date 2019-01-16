<template>
  <div>
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
      isShown: true,
      todos: this.$store.state.todos
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
