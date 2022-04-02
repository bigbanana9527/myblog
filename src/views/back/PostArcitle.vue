<template>
  <article class="full">
    <h1>发布新文章...</h1>
    <mavon-editor 
    ref="md"  
    style="min-height: 500px" 
    @imgAdd="$imgAdd"
    v-model="form.content"
    />
    <button @click="post" class="mt-2">提交</button>
  </article>
  
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
        form:{
            aid:'0',
            title:'www',
            content:'',
            date:'',
            isPublish:true,
            tags:[]
        }
    }
},
methods:{
    post(){
        this.form.date= new Date()
        const article=this.form
        this.$http.post('/api/postarticle',article)
        console.log("已提交发送文章请求")
    },

    // 绑定@imgAdd event
        $imgAdd(pos, $file){
        // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           //image为自己定义的文件名
           formdata.append('img', $file);
           
           axios({
               url: 'api/uploadimage',
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
               console.log(res.data)
               const _url=res.data.url
               //lst
               this.$refs.md.$img2Url(pos,_url);
               console.log(this.$refs.md)
               
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