<template>
  <div>
    <div class="todo-block">
      <el-input v-model="todo.title" placeholder="请输入内容">{{ todo.title }}</el-input>
      <el-button size="small" type="primary">取消</el-button>
      <el-button size="small" type="primary" @click="onTaskAdded">確認新增task</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todo: {
        title: this.$store.state.todo.title
      }
    }
  },
  methods: {
    onTaskAdded (context) {
      this.$store.dispatch('onTaskAdded', this.todo.title)
    }
  },
  mounted () {
    this.test()
  }
}
</script>
