<template>
  <article class="full">
      <h1>归档</h1>
      <div class="content">
           <h4>2021</h4>
           <ul>
               <li> 
                   <router-link to="/articleDetail" tag="a">死月的二零二一总结</router-link>
                   <time> 12 月 31 日</time>
               </li>
               
           </ul>
           
      </div>
      <div class="content">
           <h4>2020</h4>
           <ul>
               <li> 
                   <router-link to="/articleDetail" tag="a">死月的二零二一总结</router-link>
                   <time> 12 月 31 日</time>
               </li>
               
           </ul>
           
      </div>
      <div class="content">
           <h4>2019</h4>
           <ul>
               <li> 
                   <router-link to="/articleDetail" tag="a">死月的二零二一总结</router-link>
                   <time> 12 月 31 日</time>
               </li>
               
           </ul>
           
      </div>
  </article>
</template>

<script>
export default {

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
h1 {
    font-size: 2em;
    margin: 0.67em 0;
}
ul{
    margin: 20px 0;
}
ul.li{
    text-align: left;
}
ul.li.a{
    background-color: transparent;
    text-decoration: inherit;
    color: #919191;
    transition: color ease 0.3s;
}

</style>