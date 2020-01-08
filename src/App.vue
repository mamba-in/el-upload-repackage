<template>
  <div id="app">
    <upload :limit="3" :size="5" @handle-prepare="handlePrepareFiles" />
  </div>
</template>

<script>
import Upload from './components/el-upload-repackage.vue'

export default {
  name: 'ElUploadRepackage',
  components: {
    Upload
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
