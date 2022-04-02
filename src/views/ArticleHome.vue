<template>
  <div>
    <Article v-for="item in allArticleList" :key="item.id" 
    :aid='item.aid'
    :title='item.title'
    :date='item.date'
    :content='item.content'></Article>
  </div>
</template>

<script>
import Article from "../components/Article.vue";

export default {
  components: {
    Article,
  },
  data(){
    return{
         allArticleList:[]
    }
  },
  methods:{
     async getAllArticleList() {
      const { data: res } = await this.$http.get('/api/articles')
      this.allArticleList=res
      console.log(this.allArticleList)
      
  },
  },
  created(){
    this.getAllArticleList()
  }
};
</script>

<style scoped>
</style>