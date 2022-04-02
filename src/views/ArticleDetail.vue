<template>
  <article class="full">
      <h1>{{article.title}}</h1>
      <span class="post-meta">
          写于
          <time> 2018 年 06 月 14 日 18 时 29 分</time>
          <br>
          更新于
          <time> 2021 年 12 月 31 日 11 时 22 分</time>
      </span>
      <div class="content mt-2">
          <mavon-editor 
    ref="md"  
    style="min-height: 500px" 
    v-model="article.content"
    :subfield=false
    defaultOpen=preview
    :toolbarsFlag=false
    />
         
      </div>
      <hr>
        
  </article>
</template>

<script>
export default {
    data(){
        return{
           article: {},
        }
    },
    methods:{
         async getArticleDetail() {
    // 获取router中传入的id
      const aid =this.$route.params.id;
      const { data: res } = await this.$http.get("/api/article/" + aid);
      this.article = res;
      console.log(this.article);
    },
    },
    created(){
         this.getArticleDetail()
    }

}
</script>

<style scoped>
@media (min-width: 768px){
    article{
        margin: 20px;
    }
}
article{
    line-height: 1.7;
    hyphens: auto;
}
article h1{
    font-size: 2em;
    margin: 0.67em 0;
}
.post-meta{
    color: #a4a4a4;
    display: inline-block;
    margin: 0;
    font-size: 0.6em;

}
hr{
    display: block;
    height: 1px;
    border: 0;
    border-top: #d6d1cc 1px solid;
    margin: 40px 0;
    padding: 0;
    box-sizing: content-box;
    overflow: visible;
}
    

</style>