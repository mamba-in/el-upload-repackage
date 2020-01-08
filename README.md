# el-upload-repackage

> It is an upload component base on ElementUI

**Make sure you have installed <el-upload>**

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
