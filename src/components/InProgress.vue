<template>
  <div>
    {{ todos }}
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      todos: this.$store.state.todos
    }
  },
  methods: {
  }
}
</script>
