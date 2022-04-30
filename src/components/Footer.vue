<template>
  <div class="footer">
      <section class="coopright">
          © 2022 - {{year}}
          <a href="/postarticle">
              发表
              文章测试
          </a>
      </section>
      <section class="intro">
          <strong>{{record.title}}</strong>
              <p>--{{record.achievement}}</p>
      </section>
  </div>
</template>

<script>
export default {
data(){
    return{
       record:{},
       year:''

    }
},
methods:{
   async getrecordList() {
      const { data: res } = await this.$http.get('/api/records')
      //从数组中随机取一个元素并赋值
      this.record=res[Math.floor(Math.random()*res.length)]
      //获取当前年份
      const date=new Date()
      this.year=date.getFullYear();
      console.log('foot',this.year)
      

},

},
created(){
  this.getrecordList()
}
}
</script>

<style scoped>
.footer{
    border-radius: 15px;
    margin-top: 20px;
    text-align: center;
    position: relative;
    padding: 4rem 0;
    border: 1px solid #d3d3d3;
    font-size: 1em;
    line-height: 2.1em;
    color: #8a8a8a;
    background: #ececec;
}
.copyright{
    color: #737373;
    font-weight: 500;
}
.footer a{
    color: #4e4e4e;
    font-weight: 700;
    background-color: transparent;
    text-decoration: inherit;
}
.intro{
    font-size: 0.7em;
    display: block;
}
</style>