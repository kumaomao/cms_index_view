<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <a href="https://www.wlphp.com/" class="navbar-brand logo"><img src="https://www.wlphp.com/content/templates/FLY/img/logo.png" alt="PHP菜鸟博客" /></a>
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse"> <span class="fa fa-th-large"></span> </button>
            </div>
            <div class="collapse navbar-collapse" id="navbar-collapse">
                <!-- navbar-right -->
                <ul class="nav navbar-nav nav-top">
                    <li class=""> <a href="https://www.wlphp.com/"> <i class="fa fa-home"></i> 首页 </a> </li>
                    <li class=""> <a href="https://wlphp.com/?post=143"> <i class="fa fa-gift"></i> 领红包 </a> </li>
                    <li class=""> <a href="https://www.wlphp.com/?sort=8"> <i class="fa fa-star"></i> json </a> </li>
                    <li class=""> <a href="https://www.wlphp.com/?sort=7"> <i class="fa fa-fire"></i> 微信开发 </a> </li>
                    <li class=""> <a href="https://www.wlphp.com/?sort=5"> <i class="fa fa-desktop"></i> php </a> </li>
                    <li class=""> <a href="https://www.wlphp.com/?sort=1"> <i class="fa fa-heart"></i> 我的生活 </a> </li>
                    <li class="dropdown"> <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-info-circle"></i> 更多 <span class="caret"></span> </a>
                        <ul class="dropdown-menu">
                            <li><a href="#"><i class="fa fa-picture-o"></i> 相册</a></li>
                            <li><a href="#"><i class="fa fa-music"></i> 音乐</a></li>
                            <li><a href="#"><i class="fa fa-list"></i> 归档</a></li>
                            <li><a href="#"><i class="fa fa-link"></i> 链接</a></li>
                        </ul> </li>
                </ul>
                <div class="nav-hide">
                    <!--搜索框开始-->
                    <form action="https://www.wlphp.com/" method="get" class="navbar-form navbar-right search-form">
                        <div class="input-group">
                            <input type="text" class="form-control search-text navsearch" name="keyword" placeholder="输入关键词搜索..." />
                            <div class="input-group-btn">
                                <button class="btn btn-default">搜索</button>
                            </div>
                        </div>
                    </form>
                    <!--搜索框结束-->
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {

}
</script>
<style>

</style>