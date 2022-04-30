<template>
    <div class="vcard clearfix">
      <img class="vimg" src="https://gravatar.loli.net/avatar/07a15b164d845a9e371b790eec0a8928?d=mp&amp;v=1.3.9">
      <div class="vh" rootid="624174a0e7afd47cc830fb36">
                <div class="vhead">
                    <a class="vnick" rel="nofollow"  target="_blank">佚名</a> 
                    <span class="vsys">{{ip}}</span> </div>
                <div class="vmeta">
                    <span class="vtime">{{date.substr(0,10)}}</span>
                    <span class="vat mr-3">回复</span>
                </div>
                <div class="vcontent">
                    <p>{{content}}</p>

                </div>
            </div>
      
    </div>
</template>
<script>
export default {
    props:['content','date','ip']
}
</script>
<style scoped>
.vcard {
    padding-top: 1.5em;
    position: relative;
    display: block;
        border-bottom: 1px dashed #ECECEC;
}
.vimg {
    width: 3.125em;
    height: 3.125em;
    float: left;
    border-radius: 50%;
    margin-right: 0.7525em;
    border: 1px solid #ECECEC;
    padding: 0.125em;
}
.vcard .vh {
    overflow: hidden;
    padding-bottom: 0.5em;

}
.vhead {
    line-height: 1.5;
    margin-top: 0;
}
.vcard .vh .vmeta {
    line-height: 1;
    position: relative;
}
.vcard .vcontent {
    word-wrap: break-word;
    word-break: break-all;
    text-align: justify;
    color: #4a4a4a;
    font-size: .875em;
    line-height: 2;
    position: relative;
    margin-bottom: 0.75em;
    padding-top: 0.625em;
}
 .vcard .vh .vtime {
    color: #b3b3b3;
    font-size: .75em;
    margin-right: 0.875em;
}
.vcard .vh .vmeta .vat {
    font-size: .8125em;
    color: #ef2f11;
    cursor: pointer;
    float: right;
}
.vcard .vhead .vnick {
    position: relative;
    font-size: .875em;
    font-weight: 500;
    margin-right: 0.875em;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    color: #e67249;
}
.vcard .vhead .vsys {
    display: inline-block;
    padding: 0.2em 0.5em;
    background: #ededed;
    color: #b3b1b1;
    font-size: .75em;
    border-radius: 0.2em;
    margin-right: 0.3em;
}
.vcard:after {
    content: "";
    clear: both;
    display: block;
}

</style>