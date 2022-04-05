<template>

    <div class="header col-sm-3 " style="" >
        <a href="">
            <img src="../assets/xiaoxin.png" alt="" class="logo mt-5">
        </a>
        <h1>
            <a href="">永远の小新</a>
        </h1>
        <nav>
            <ul class="row">
                <li><a href="/home" >首页</a></li>
                <li><a href="/placeonfile" >归档</a></li>
                <li><a href="/link" >链接</a></li>
                <li><a href="/about" >关于</a></li>
            </ul>
            <div class="xnews-icon">
                <a href="">s</a>
                <a href="">h</a>
                <a href="">e</a>
                <a href="">i</a>
            </div>
        </nav>
        <div class="space">

        </div>
        <div class="backstretch">

        </div>
    </div>

  
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
 overflow: hidden;
 text-align: center;
 background-image: url(../assets/bg.jpg);
 background-position: bottom ;
 background-size: cover;
     

 
}
.logo{
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border-style: none;
    color: #35101a;
}
.header h1{
    color: #ca314d;
    font-weight: normal;
    font-size: 3.5em;
    margin-top: 20px;
    line-height: 1em;
    letter-spacing: -1px;
    text-shadow: 0 1px 6px rgb(0 0 0 / 50%);
}
a{
    background-color: transparent;
    text-decoration: inherit;
}
.header nav ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
}
.header nav ul li{
    color: #35101a;
    display: inline-block;
    padding: 12px 0 10px 10px;
    font-size: 1.3em;
}
.header nav ul li:after {
    content: '.';
    padding-left: 10px;
}

.header nav .xnews-icon {
    margin-top: 10px;
    font-family: xnews-icon;
    font-size: 1.5em;
    display: block;
}
.header nav .xnews-icon a{
    margin: 4px;
    color: #444;
}

/* 当最小宽度伪768px所需要执行的代码 */
@media (min-width:768px) {
.header{
    height: 100vh;
    position:fixed;
    position: sticky; 
    top:0; 
    z-index:1   
}
/* 去除ul中最后一个li的伪元素
ul>li:last-child::after{
display:none;
} */
.header nav ul li{
display: block;
}

}

</style>