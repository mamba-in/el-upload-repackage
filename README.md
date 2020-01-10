# el-upload-repackage
 [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
 [![Gemnasium](https://img.shields.io/gemnasium/mathiasbynens/he.svg)](https://github.com/mamba-in/el-upload-repackage)
 [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/mamba-in/el-upload-repackage)
 [![npm](https://img.shields.io/npm/v/el-upload-repackage.svg)](https://www.npmjs.com/package/el-upload-repackage)
 [![npm](https://img.shields.io/npm/dm/el-upload-repackage.svg)](https://npmcharts.com/compare/el-upload-repackage)

**Make sure you have installed el-upload**

[Try the demo](https://mamba-in.github.io/el-upload-repackage/)

## How to use?
``` bash
npm install el-upload-repackage
```

### Example
``` vue
<template>
  <div id="app">
    <upload :limit="3" :size="5" @handle-prepare="handlePrepareFiles" />
  </div>
</template>

<script>
import Upload from 'el-upload-repackage'

export default {
  name: 'ElUploadRepackage',
  components: {
    Upload
  },
  methods: {
    handlePrepareFiles(files) {
      console.log(files)
    }
  }
}
</script>
```

### Options
|    Property    |    Description   |   type   |	default	|
| -----------------  | ---------------- | :--------: | :----------: |
| drag       | whether to activate drag and drop mode |Boolean| true |
| multiple   | whether uploading multiple files is permitted |Boolean | false |
| limit      | maximum number of uploads allowed | Number | 1 |
| accept     | accepted file types | String | jpg/png |
| size       | maximum size of uploads allowed | Number | 2 |
| list-type  | type of fileList(text/picture/picture-card) | String | picture |
| provide-template | whether to provide a document template | Boolean | false |
| template-path | template download path (you better put your template file in the static resources folder | String | template/template.xlsx |


### Customize configuration
See [Configuration Reference](https://element.eleme.cn/#/en-US/component/upload) about of ElementUI.
