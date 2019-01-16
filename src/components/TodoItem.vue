<template>
  <div>
    <div>title</div>
    <el-button @click="onItemEdit">Edit</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  methods: {
    onItemEdit () {
      console.log('edit')
    }
  }
}
</script>
