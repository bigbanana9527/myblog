<template>
  <div>
    <Article
      v-for="item in currentPageData"
      :key="item.id"
      :aid="item.aid"
      :title="item.title"
      :date="item.date"
      :content="item.content"
    ></Article>
    <nav aria-label="Page navigation example" class="mt-3">
      <ul class="pagination justify-content-center">
        <li class="page-item" @click="prevPage">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="(item, index) in indexs"
          :key="index"
          @click="changeCurrentPage(item)"
        >
          <a class="page-link" href="#">{{ item }}</a>
        </li>
        <li class="page-item" @click="nextPage">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Article from "../components/Article.vue";
export default {
  components: {
    Article,
  },
  data() {
    return {
      allArticleList: [], //所有博客数据
      totalPage: 1, //统共页数
      currentPage: 1, //当前页数
      pageSize: 10, //每页显示数量
      currentPageData: [], //当前页显示内容
      indexs: [],
      //需要传的值
    };
  },
  methods: {
    async getAllArticleList() {
      const { data: res } = await this.$http.get("/api/articles");
      this.allArticleList = res;
      //设置总共页数
      this.cpn();
      //设置当前页面数据
      this.setcurrentPageData();
      console.log(this.allArticleList);
      //遍历数组，取出年份，生成年份数组
      this.createYeararr(this.allArticleList);
    },
    setcurrentPageData() {
      let begin = (this.currentPage - 1) * this.pageSize;
      let end = this.currentPage * this.pageSize;
      this.currentPageData = this.allArticleList.slice(begin, end);
    },
    cpn() {
      //计算一个有几页
      this.totalPage = Math.ceil(this.allArticleList.length / this.pageSize);
      //计算得0时设置为1
      this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
      this.indexs = this.createArray(this.totalPage);
    },
    prevPage() {
      if (this.currentPage == 1) return;
      this.currentPage--;
      this.setcurrentPageData();
    },
    nextPage() {
      console.log(this.totalPage);
      if (this.currentPage == this.totalPage) return;
      this.currentPage++;
      this.setcurrentPageData();
    },
    changeCurrentPage(i) {
      this.currentPage = i;
      this.setcurrentPageData();
    },
    //创建从1到count的index数组
    createArray(count) {
      var arr = [];
      for (var i = 1; i <= count; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  created() {
    this.getAllArticleList();
  },
};
</script>

<style scoped>
</style>