<template>
   <div class="m-2">
       <h3>工具箱</h3>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">新增链接</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Link</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">链接url:</label>
            <input type="text" class="form-control" id="recipient-name" v-model="link.urladress">
          </div>
           <div class="form-group">
            <label for="recipient-name" class="col-form-label">标题:</label>
            <input type="text" class="form-control" id="recipient-name" v-model="link.title">
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">描述:</label>
            <textarea class="form-control" id="message-text" v-model="link.discripe"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-primary" @click="postlink">保存新增</button>
      </div>
    </div>
  </div>
</div>

       <div class="row">
      <Linkcard v-for="(item,index) in alllinks" :key="index" :title="item.title" :urladress="item.urladress"
      :discripe='item.discripe'></Linkcard>
      

  </div>
   </div>
 
</template>

<script>
import Linkcard from '@/components/Linkcard'
import $ from 'jquery'
export default {
 components:{
     Linkcard
 },
 data(){
     return{
         alllinks:[],
         link:{
             urladress:'',
             title:'',
             discripe:'',
             date:''
         }
     }
 },
 methods:{
     postlink(){
          this.link.date= new Date()
        const linkobj=this.link
        this.$http.post('/api/postlink',linkobj).then(
           (res)=>{
               if(res.status!==200) return alert('添加失败')
               alert('添加成功')
              
              this.getalllinks()
              //隐藏模态框
              $('#exampleModal').modal('hide')
              //清空对象的属性值
              for(var key in this.link){
              delete this.link[key];
                 }
           }
        )
        console.log("已提交发送链接请求")
     },
    async getalllinks() {
      const { data: res } = await this.$http.get("/api/link");
      this.alllinks = res
      console.log(this.alllinks)
    },
 },
 created(){
     this.getalllinks()
 }
}
</script>

<style scoped>

</style>