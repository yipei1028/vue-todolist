<template>
  <div class="todo-block">
    <div class="todo-title-block">
      <el-checkbox v-model="todo.checked"></el-checkbox>
      <el-input
        id="todo-title-input"
        v-model="todo.title"
        placeholder="Type Something Here...">{{ todo.title }}</el-input>
    </div>
    <div class="todo-main-block">
      <div class="date-picker-container">
        <div class="date-picker-top-block">
          <font-awesome-icon icon="calendar-alt" />Deadline
        </div>
        <el-date-picker></el-date-picker>
      </div>
      <div class="comments-container">
        <div class="date-picker-top-block">
          <font-awesome-icon icon="comment-dots" />Comments
        </div>
        <el-input
          class="input-group"
          type="textarea"
          v-model="todo.content"
          placeholder="請输入内容">{{ todo.content }}
        </el-input>
      </div>
    </div>
    <div class="todo-button-block">
      <el-button class="todo-buttons" size="small" type="primary">X Cancel</el-button>
      <el-button class="todo-buttons" size="small" type="primary" @click="onTaskAdded">+ Add Task</el-button>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons'

library.add(faCalendarAlt, faCommentDots)

export default {
  data () {
    return {
      todo: {
        title: this.$store.state.todo.title,
        content: this.$store.state.todo.content,
        checked: this.$store.state.todo.checked
      }
    }
  },
  methods: {
    onTaskAdded (context) {
      this.$store.dispatch('onTaskAdded', this.todo)
    }
  }
}
</script>

<style lang="scss">
.todo-block {
  width: 100%;
  margin: 10px 0px;
}

.todo-title-block {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #F2F2F2;
}

#todo-title-input {
  margin-left: 5px;
}

.todo-main-block {
  padding: 20px 40px;
  background-color: #F2F2F2;
}

.todo-button-block {
  display: flex;
  justify-content: center;
  align-items: center;
}

.todo-buttons {
  flex: 1;
  border-radius: 0px;
}
</style>
