<template>
  <article class="full">
    <h1>归档</h1>
    <div class="content" v-for="item in placeonfile" :key="item.id">
      <h4>{{item.year}}</h4>
      <ul>
        <li v-for="item in item.itemarr" :key="item.id">
          <router-link to="/articleDetail" 
            >{{item.title}}</router-link
          >.&nbsp;
          <time> {{item.date | monday}}</time>
        </li>
      </ul>
    </div>

  </article>
</template>

<script>
export default {
filters: {
    //月份日期过滤器
      monday:function(date){
          let m =date.slice(5,7)
          let d =date.slice(8,10)
          m=m.slice(0,1)!=='0'? m: m.substr(1,1)
          d=d.slice(0,1)!=='0'? d: d.substr(1,1)
      return  m+' 月 '+d+' 日 '
      }
    },
  data() {
    return {
      placeonfile: [],
    };
  },
  methods: {
    async getAllArticleList() {
      const { data: res } = await this.$http.get("/api/articles");
      this.placeonfile = this.createYeararr(res);
      console.log(res)
    },
        //生成年份的数组
    createYeararr(count) {
      const arr = [];//年份数组
   
      const allarr=[]//总数组
      count.forEach(function (item) {
        const year = item.date.slice(0, 4);
        //如果数组里不包含year则push
        if (arr.indexOf(year) == -1) {
          arr.push(year);
        }
      });

       for(var i=1; i<=arr.length; i++){
           //每次push都需要新建一个对象，否则输出的JS数组中每个元素的值都是一样的
          const Yeararritem= {  //单个对象
          year:'',
          itemarr:[]
      }
         Yeararritem.year=arr[i-1]
         //arr[i-1]为遍历的年份
         Yeararritem.itemarr=this.filteryear(count,arr[i-1])
        allarr.push(Yeararritem)

      }
      return allarr.reverse()
      
    },
    //将总数据返回对应年份的数据，count为总数据，y为年份
    filteryear(count,y){
        // .filter()返回符合条件的一个数组
       var arr=count.filter(function(item){
          return item.date.slice(0, 4)==y
       })
       //此方法返回符合条件的数组
       return arr
    }
  },
  created() {
    this.getAllArticleList()
  },
};
</script>

<style scoped>
@media (min-width: 768px) {
  article {
    margin: 20px;
  }
}
article {
  line-height: 1.7;
  hyphens: auto;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
ul {
  margin: 20px 0;
}
li {
  text-align: left;

}
a{
        background-color: transparent;
  text-decoration: inherit;
  color: #919191;
  transition: color ease 0.3s;

}
</style>