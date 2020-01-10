<template>
  <div>
    <el-upload
      ref="filesUpload"
      class="upload-demo"
      action=""
      :drag="drag"
      :multiple="multiple"
      :on-change="handlePrepareFiles"
      :on-exceed="handleExceed"
      :before-remove="filesBeforeRemove"
      :on-remove="filesHadRemove"
      :limit="limit"
      :auto-upload="false"
      :accept="accept"
      :list-type="listType"
    >
      <i class="el-icon-upload" />
      <div v-if="drag === true" class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <el-button v-else size="small" type="text">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        {{ `只能上传${ accept }文件，数量最多为${ limit }个` }}
        <el-button v-if="provideTemplate" type="text">
          <a style="color: inherit" :href="`${ publicPath }/${ templatePath }`" download="Template">点击下载模板</a>
        </el-button>
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  props: {
    drag: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 1
    },
    accept: {
      type: String,
      default: 'image/jpeg,image/png'
    },
    size: {
      type: Number,
      default: 2
    },
    listType: {
      type: String,
      default: 'picture'
    },
    provideTemplate: {
      type: Boolean,
      default: false
    },
    templatePath: {
      type: String,
      default: 'template/template.xlsx'
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    handlePrepareFiles(file, fileList) {
      const fileSize = file.size / 1024 / 1024 < this.size
      if (!fileSize) {
        this.$refs.filesUpload.clearFiles()
        return this.$message.error(`上传的文件大小不能超过 ${this.size}MB!`)
      }
      this.$emit('handle-prepare', { file: file, fileList: fileList })
    },
    handleExceed() {
      return this.$message.warning(`请注意，只能上传${this.limit}个文件`)
    },
    filesBeforeRemove(file) {
      return this.$confirm(`确认删除${file.name}吗？`, '提示', { type: 'warning' })
    },
    filesHadRemove(file, fileList) {
      this.$emit('had-remove', { file: file, fileList: fileList })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upload-demo {
	width: 360px;
}
.el-upload__tip {
	width: 400px;
	text-align: left;
}
</style>
