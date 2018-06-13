<template>
    <div class="nav-fixed">
        <!-- 导航栏 -->
        <Head></Head>
        <div id="FLY">
            <section class="container">
                <div class="content-wrap">
                    <div class="content">
                        <!-- 轮播图 -->
                        <MySlide></MySlide>
                        <!-- 公告 -->
                        <Notice></Notice>
                        <!-- 首页6格 -->
                        <ExcerptList></ExcerptList>
                        <!-- 广告位置：首页_列表_横幅_h760w80 | ID:1 -->
                        <Advertising></Advertising>
                        <!-- 列表 -->
                        <List></List>
                        <!-- cms开始 -->
                        <CMS></CMS>
                    </div>
                </div>
            </section>
        </div>
    </div>

</template>
<script>
import Head from '../../components/Head';
import MySlide from './children/mySlide';
import Notice from './children/notice';
import ExcerptList from './children/excerptList';
import Advertising from './children/advertising';
import List from './children/List';
import CMS from './children/cms';
export default {
    data(){
        return{

        }
    },
    components:{
        Head,
        MySlide,
        Notice,
        ExcerptList,
        Advertising,
        CMS,
        List,
    }
}

</script>