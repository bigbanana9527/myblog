<template>
  <div class="item">
     <div @click="gotoDetail(aid)">
         <h2 class="home-title">{{title}}</h2>
     </div>
     <span class="post-meta">写于 {{date}}</span>
     <p class="post-excerpt overflow-hidden">
         {{content}}
     </p>
  </div>
</template>

<script>
export default {
    props:['aid','title','content','date'],
    methods:{
        gotoDetail(id){
            //跳转到详情页，传入具体的id值
            this.$router.push({name:"articleDetail",params:{id:id}})
        }
    }
}
</script>

<style scoped>
.item{
    padding: 40px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    color: #222;
    line-height: 1.7;
}
.home-title{
    font-size: 2.3em;
    letter-spacing: -1px;
    line-height: 1.2em;
    text-indent: -2px;
     margin-bottom: 16px;
    word-wrap: break-word;
}
.post-meta{
    color: #a4a4a4;
    display: inline-block;
    margin: 0;
    font-size: 0.6em;
}
.post-excerpt{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 1em;
    margin: 16px 0 0 0;
    text-align: justify;
    
}
item:after {
    display: block;
    content: '';
    width: 7px;
    height: 7px;
    border: #ddd8d4 1px solid;
    position: relative;
    top: 5px;
    left: 50%;
    margin-left: -5px;
    background: #d6d1cc;
    border-radius: 100%;
    box-shadow: #f7f6f5 0 0 0 5px;
    top: 45px;
}


</style>