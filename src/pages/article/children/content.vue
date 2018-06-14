<template>
    <article id="post-box">
        <div class="panel panel-sort">
            <header class="panel-header">
                <div class="post-meta-box">
                    <!--面包屑导航开始-->
                    <ol class="breadcrumb">
                        <li><a href="https://www.wlphp.com/">首页</a></li>
                        <li> <a class="cat" href="https://www.wlphp.com/?sort=4">mysql</a> </li>
                        <li class="active">MYSQL表中某个字段有换行符、回车符替换成空字符串</li>
                    </ol>
                    <!--面包屑导航结束-->
                    <div class="meta-top">
                        <span class="date-top"><i class="fa fa-calendar-check-o"></i> <time class="pubdate">2018年1月20日</time></span>
                        <span class="comments-top"><i class="fa fa-comments-o"></i> 0条评论</span>
                        <span class="close-sidebar" title="显示侧边栏"><a href="javascript:;"><i class="fa fa-toggle-off"></i></a></span>
                        <span class="show-sidebar" title="关闭侧边栏" style="display:none;"><a href="javascript:;"><i class="fa fa-toggle-on"></i></a></span>
                    </div>
                </div>
                <h2 class="post-title"><span class="fa fa-code"></span> MYSQL表中某个字段有换行符、回车符替换成空字符串</h2>
                <ul id="mobile-tab-menu" class="no-js-hide">
                    <li class="current" data-tab="context">内容</li>
                    <li class="" data-tab="comments">评论</li>
                    <li class="" data-tab="related">相关</li>
                </ul>
            </header>
            <section class="context">
                <p> mysql某个字段，带引号查不出来，不带引号却可以查出来，有可能就是因为这个字段有换行或者回车符</p>
                <p> <a target="_blank" href="https://wlphp.com/content/uploadfile/201801/f3cc1516421197.jpg" id="ematt:296" class="highslide "><img src="https://wlphp.com/content/uploadfile/201801/f3cc1516421197.jpg" title="点击查看原图" alt="1.jpg" width="559" height="456" border="0" /></a><a target="_blank" href="https://wlphp.com/content/uploadfile/201801/15601516421197.jpg" id="ematt:298" class="highslide"><img src="https://wlphp.com/content/uploadfile/201801/15601516421197.jpg" title="点击查看原图" alt="2.jpg" width="554" height="427" border="0" /></a><a target="_blank" href="https://wlphp.com/content/uploadfile/201801/799b1516421197.jpg" id="ematt:300" class="highslide"><img src="https://wlphp.com/content/uploadfile/201801/799b1516421197.jpg" title="点击查看原图" alt="3.jpg" width="563" height="480" border="0" /></a> </p>
                <p> mysql处理方法：</p>
                <p> UPDATE 表名 SET&nbsp; 字段= REPLACE(REPLACE(字段, CHAR(10), ''), CHAR(13), '');</p>char(10):&nbsp; 换行符
                <br />char(13):&nbsp; 回车符
                <br />
                <p> PHP处理方法：</p>
                <p> $str = str_replace(PHP_EOL, '', $str);</p>
                <p> <br /></p>
                <br />
                <!-- 版权开始 -->
                <div class="post-copyright">
                    <p class="sidetags"><i class="fa fa-tags"></i> 本文标签：<a rel="tag" href="https://www.wlphp.com/?tag=MYSQL%E8%A1%A8%E4%B8%AD%E6%9F%90%E4%B8%AA%E5%AD%97%E6%AE%B5%E6%9C%89%E6%8D%A2%E8%A1%8C%E7%AC%A6%E3%80%81%E5%9B%9E%E8%BD%A6%E7%AC%A6%E6%9B%BF%E6%8D%A2%E6%88%90%E7%A9%BA%E5%AD%97%E7%AC%A6%E4%B8%B2">MYSQL表中某个字段有换行符、回车符替换成空字符串</a></p>
                    <p><i class="fa fa-bullhorn"></i> 版权声明：若无特殊注明，本文皆为《<a href="https://www.wlphp.com/?author=1" title="管理员">菜鸟站长</a>》原创，转载请保留文章出处。</p>
                    <p><i class="fa fa-share-alt-square"></i> 本文链接：MYSQL表中某个字段有换行符、回车符替换成空字符串 - https://www.wlphp.com/?post=148</p>
                    <p class="qrcode"><a href="https://pan.baidu.com/share/qrcode?w=150&amp;h=150&amp;url=https://www.wlphp.com/?post=148&amp;.jpg" class="highslide"><img src="https://pan.baidu.com/share/qrcode?w=150&amp;h=150&amp;url=https://www.wlphp.com/?post=148&amp;.jpg" alt="MYSQL表中某个字段有换行符、回车符替换成空字符串" title="用手机扫描二维码访问本页" class="qrcodeimg" /></a></p>
                </div>
                <!-- 版权结束 -->
            </section>
        </div>
    </article>
</template>
<script>
    export default {}
</script>
