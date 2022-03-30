<template>
  <article class="full">
    <h1>发布新文章...</h1>
    <mavon-editor 
    ref=md  
    style="min-height: 500px" 
    @imgAdd="$imgAdd"
    v-model="form.content"/>
    <button @click="post">提交</button>
  </article>
  
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
        form:{
            aid:'',
            title:'',
            content:'',
            time:'',
            isPublish:'',
            tags:[]
        }
    }
},
methods:{
    post(){
        console.log(this.value)
    },

    // 绑定@imgAdd event
        $imgAdd(pos, $file){
            console.log('触发了$imgAdd')
        // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           //image为自己定义的文件名
           formdata.append('img', $file);
           console.log(formdata)
           axios({
               url: 'http://localhost:8083/api/uploadimage',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((res) => {
               // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
               /**
               * $vm 指为mavonEditor实例，可以通过如下两种方式获取
               * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
               * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
               */
              
               this.$refs.md.$img2Url(res.data.url);
               console.log(this.form.content)
           })
        }

}
}
</script>

<style scoped>
article{
    line-height: 1.7;
    hyphens: auto;
}
article h1{
    font-size: 2em;
    margin: 0.67em 0;
}
</style>