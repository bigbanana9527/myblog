<template>
 <div class="xe-card col-3">
  <a :href="urladress" class="xe-widget xe-conversations box2 label-info" target = "blank">
      <div class="xe-comment-entry">
        <div class="xe-user-img">
           <img src="https://cdn.jsdelivr.net/gh/5ime/img/avatar.jpg" alt="" class="img-circle lazy" width="40">
        </div>
        <div class="xe-comment">
          <div class="xe-user-name overflowClip_1">
               <strong>{{title}}</strong>
          </div>
          <p class="overflowClip_2">
           {{discripe}}
          </p>
        </div>
      </div>
  </a>
 </div>
</template>

<script>
export default {
 props:["title","discripe","urladress"]

}
</script>

<style scoped>
.xe-card {
    position: relative;
    height: 86px;
    margin: 20px 0 0 0;
}
.xe-widget.xe-conversations {
    position: absolute;
    background: #fff;
    margin-bottom: 0px;
    padding: 15px;
    left: 0;
    right: 0;
    margin: 0 15px;
}

.xe-comment-entry img {
    float: left;
    display: block;
    background: rgba(136,136,136,.15);
    margin-right: 10px;
}
.img-circle {
    border-radius: 50%;
}
a {
    color: #282828;
    outline: 0 !important;
}
.overflowClip_1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.xe-comment p {
    margin-bottom: 0px;
}
.overflowClip_2 {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
p {
    margin: 0 0 10px;
        color: #878888;
}
</style>