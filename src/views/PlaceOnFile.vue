<template>
  <article class="full">
    <h1>归档</h1>
    <div class="content" v-for="item in year" :key="item.id">
      <h4>{{item}}</h4>
      <ul>
        <li >
          <router-link to="/articleDetail" tag="a"
            >死月的二零二一总结</router-link
          >
          <time> 12 月 31 日</time>
        </li>
      </ul>
    </div>

  </article>
</template>

<script>
export default {
  data() {
    return {
      year: [],
    };
  },
  methods: {
    async getAllArticleList() {
      const { data: res } = await this.$http.get("/api/articles");
      this.year = this.createYeararr(res);
      console.log(this.year)
    },
        //生成年份的数组
    createYeararr(count) {
      console.log("count的值为", count);
      const arr = [];
      count.forEach(function (item) {
        const year = item.date.slice(0, 4);
        //如果数组里不包含year则push
        if (arr.indexOf(year) == -1) {
          arr.push(year);
        }
      });
      return arr;
    },
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
ul.li {
  text-align: left;
}
ul.li.a {
  background-color: transparent;
  text-decoration: inherit;
  color: #919191;
  transition: color ease 0.3s;
}
</style>