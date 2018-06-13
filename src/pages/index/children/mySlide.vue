<template>
    <div id="mySlide" class="carousel slide">
        <ol class="carousel-indicators">
            <li data-target="#mySlide" data-slide-to="0" class=""></li>
            <li data-target="#mySlide" data-slide-to="1" class="active"></li>
            <li data-target="#mySlide" data-slide-to="2" class=""></li>
        </ol>
        <div class="carousel-inner">
            <div class="item">
                <a href="#" target="_blank"><img src="https://www.wlphp.com/content/templates/FLY/img/1.png" alt="图片1" /></a>
            </div>
            <div class="item active">
                <a href="#" target="_blank"><img src="https://www.wlphp.com/content/templates/FLY/img/2.png" alt="图片2" /></a>
            </div>
            <div class="item">
                <a href="#" target="_blank"><img src="https://www.wlphp.com/content/templates/FLY/img/3.png" alt="图片3" /></a>
            </div>
        </div>
        <a href="#mySlide" data-slide="prev" class="carousel-control left"> <i class="fa fa-chevron-left slide-left"></i> </a>
        <a href="#mySlide" data-slide="next" class="carousel-control right"> <i class="fa fa-chevron-right slide-right"></i> </a>
    </div>
</template>
<script>
    export default {

    }
</script>