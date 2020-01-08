# el-upload-repackage

> It is an upload component base on ElementUI

 [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
 [![Gemnasium](https://img.shields.io/gemnasium/mathiasbynens/he.svg)](https://github.com/mamba-in/el-upload-repackage)
 [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/mamba-in/el-upload-repackage)
 [![npm](https://img.shields.io/npm/v/el-upload-repackage.svg)](https://www.npmjs.com/package/el-upload-repackage)
 [![npm](https://img.shields.io/npm/dm/el-upload-repackage.svg)](https://npmcharts.com/compare/el-upload-repackage)

**Make sure you have installed el-upload**

## How to use?
``` bash
npm install el-upload-repackage
```

### Example
``` vue
<template>
    <upload :limit="3" :size="5" @handle-prepare="handlePrepareFiles" />
</template>

<script>
import Upload from 'el-upload-repackage'

export default {
  components: { Upload }
}
</script>
```

### Options
|    Property    |    Description   |   type   |	default	|
| -----------------  | ---------------- | :--------: | :----------: |
| drag       | if you want to use drag |Boolean| true |
| multiple   | if you want choose more than one |Boolean | false |
| limit      | you can limit amount of the files | Number | 1 |
| accept     | accepted file types | String | image/jpeg,image/png |
| size     | you can limit size of the files | Number | 2 |
| list-type     | type of fileList(text/picture/picture-card) | String | picture |


### Customize configuration
See [Configuration Reference](https://element.eleme.cn/#/en-US/component/upload) about of ElementUI.
