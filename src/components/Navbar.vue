<template>
  <div class="navbar-container">
    <el-menu
      class="navbar-nav"
      mode="horizontal"
      background-color="#4A90E2"
      text-color="#00408B"
      active-text-color="#fff">
      <el-menu-item class="navbar-nav-item" index="1"><router-link to="/" exact>My Tasks</router-link></el-menu-item>
      <el-menu-item class="navbar-nav-item" index="2"><router-link to="/InProgress" exact>In Progress</router-link></el-menu-item>
      <el-menu-item class="navbar-nav-item" index="3"><router-link to="/Completed" exact>Completed</router-link></el-menu-item>
    </el-menu>
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
  }
}
</script>

<style lang="scss">
.navbar-container {
  width: 100%;
  background-color: #4A90E2;
}

.navbar-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 25%;
}

.navbar-nav-item {
  flex: 1;
  text-align: center;
}
</style>
