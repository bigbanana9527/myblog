<template>
   <div>
<aplayer autoplay
  :music="{
    title: '给我一首歌的时间',
    artist: '周杰伦',
    src: 'http://localhost:8083/public/resource/周杰伦 - 给我一首歌的时间.wav',
    pic: '//y.qq.com/music/photo_new/T002R300x300M000002Neh8l0uciQZ_1.jpg?max_age=2592000'
  }"
/>
   </div>
</template>

<script>
import aplayer from "vue-aplayer";  
export default {
components: { aplayer },


}
</script>

<style scoped>

</style>