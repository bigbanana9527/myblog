<template>
  <div class="container-fluid">
    <div class="row">
      <Header></Header>
      <div class="col-sm-9 main">
        <div>
          <router-view> </router-view>
        </div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
@media (min-width: 768px) {
  .main {
    padding: 40px;
    background: #f7f6f5;
    overflow-x: hidden;
    padding: 20px;
    text-align: left;
    word-break: normal;
    word-wrap: break-word;
  }
}
</style>