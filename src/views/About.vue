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
      <h2 class="m-3">谢谢光临，写点什么吧。。。</h2>
     <div class="valine v">
         <div class="vwrap">
            <div class="vedit">
               <textarea name="" id="veditor" class="veditor vinput" placeholder="Just Go Go" v-model="comment" @keyup.enter="sendmessage"></textarea>
            </div>
              <button type="button" title="Cmd|Ctrl+Enter" class="vsubmit vbtn float-right" @click="sendmessage">回复</button>
         </div>
          <div class="vinfo" style="display:block;"><div class="vcount col"><span class="vnum">{{total}}</span> 评论</div></div>
          <div class="vlist m-2">
             <vcomment v-for="item in commentsList" :key="item.cid" :content=item.content :ip=item.ip :date=item.date> </vcomment>
          </div>
     </div>
    
   </div>
</template>

<script>
import aplayer from "vue-aplayer";  
import vcomment from "@/components/Vcomment.vue"
export default {
components: { aplayer, vcomment},
 data(){
   return{
      comment:'',
      commentsList:[],
      total:""
   }
 },
 methods:{
    sendmessage(){
             const commentbody={
               content:this.comment,
               date:Date()
             }
              this.$http.post('/api/comment',commentbody).then(
           (res)=>{
               if(res.status!==200) return alert('添加失败')
               alert('添加成功')
               //添加成功后跳转至
              this.comment=''
             this.getmessage()
           }
        )
    },
   async getmessage(){
            
      const { data: res } = await this.$http.get("/api/comment");
      this.commentsList = res.reverse();
      this.total=res.length
      console.log(res)

   
    }
 },
 created(){
   this.getmessage()
 }

}
</script>

<style scoped>
.v {
    font-size: 16px;
    text-align: left;
}
.v .vwrap {
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    padding: 10px;
}
.v .vwrap .vedit {
    position: relative;
    padding-top: 10px;
}
.v .veditor {
    width: 100%;
    min-height: 8.75em;
    font-size: .875em;
    background: transparent;
    resize: vertical;
    -webkit-transition: all .25s ease;
    transition: all .25s ease;
    background-color: #fff;
    resize: none;
    padding: 15px;
}
.v .vwrap .vedit .vctrl {
    text-align: right;
    font-size: 12px;
}
.v .vbtn {
    text-align: center;
    color: #313131;
    border: 1px solid #ededed;
    border-radius: 0.3em;
    display: inline-block;
    background: #ededed;
    margin-bottom: 0;
    font-weight: 400;
    vertical-align: middle;
    cursor: pointer;
    white-space: nowrap;
    padding: 0.5em 1.25em;
    font-size: .875em;
    line-height: 1.42857143;

    user-select: none;
    outline: none;
        background: #f8e6d8;
    color: #e67249;
}
.v .vinfo {
    font-size: 0;
    padding: 5px;
}
.v .vinfo .col {
    font-size: 16px;
    display: inline-block;
    width: 50%;
    vertical-align: middle;
}
.v .vinfo .vcount .vnum {
    font-weight: 600;
    font-size: 1.25em;
}
.v .vlist {
    width: 100%;
}
</style>