<template>
  <div id="app">
    <upload :limit="3" :multiple="true" :size="5" :provide-template="false" template-path="template/template.xlsx" align="center" @handle-prepare="handlePrepareFiles" />
    <div align="center" style="margin-top: 30px;">
      <el-table :data="tableData" border style="width: 80%">
        <el-table-column label="Property" prop="prop" />
        <el-table-column label="Description" prop="description" width="600" />
        <el-table-column label="type" prop="type" />
        <el-table-column label="default" prop="default" />
      </el-table>
    </div>
  </div>
</template>

<script>
import Upload from './components/el-upload-repackage.vue'

export default {
  name: 'ElUploadRepackage',
  components: {
    Upload
  },
  data() {
    return {
      tableData: [
        { prop: 'drag', description: 'whether to activate drag and drop mode', type: 'Boolean', default: 'true' },
        { prop: 'multiple', description: 'whether uploading multiple files is permitted', type: 'Boolean', default: 'false' },
        { prop: 'limit', description: 'maximum number of uploads allowed', type: 'Number', default: '1' },
        { prop: 'accept', description: 'accepted file types', type: 'String', default: 'jpg/png' },
        { prop: 'size', description: 'maximum size of uploads allowed', type: 'Number', default: '2' },
        { prop: 'list-type', description: 'type of fileList(text/picture/picture-card)', type: 'String', default: 'picture' },
        { prop: 'provide-template', description: 'whether to provide a document template', type: 'Boolean', default: 'false' },
        { prop: 'template-path', description: 'template download path (you better put your template file in the static resources folder', type: 'String', default: 'template/template.xlsx' }
      ]
    }
  },
  methods: {
    handlePrepareFiles(files) {
      console.log(files)
    }
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
