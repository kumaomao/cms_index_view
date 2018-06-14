<template>
    <div class="nav-fixed">
        <!-- 导航栏 -->
        <Head></Head>
        <div id="FLY">
            <section class="container">
                <div class="content-wrap">
                    <div class="content">
                        <!-- 内容开始 -->
                        <Content></Content>
                        <!-- 内容结束 -->
                        <!-- 相关开始 -->
                        <Related></Related>
                        <Comments></Comments>
                    </div>
                </div>
                <Sidebar></Sidebar>
            </section>
        </div>
    </div>
</template>
<script>
    import Head from '../../components/Head';
    import Sidebar from '../../components/sidebar';
    import Content from './children/content';
    import Related from './children/related';
    import Comments from './children/comments';
    export default {
        data(){
            return{

            }
        },
        components:{
            Head,
            Sidebar,
            Content,
            Related,
            Comments,

        }
    }
</script>
