<template>
    <article class="span12 mobile-hide" id="comments">
        <div id="comments2" class="panel-comments panel-sort">
            <div id="respond" class="comment-respond">
                <div id="comment-place">
                    <div class="comment-post" id="comment-post">
                        <h3 id="reply-title" class="comment-reply-title"><span class="fa fa-commenting"></span> 发表评论
                            <div class="cancel-reply" id="cancel-reply" style="display:none">
                                <a href="javascript:void(0);" onclick="cancelReply()"><span class="fa fa-share"></span> 取消回复</a>
                            </div></h3>
                        <form method="post" name="commentform" action="https://www.wlphp.com/index.php?action=addcom" id="commentform">
                            <input type="hidden" name="gid" id="comment-gid" value="148" />
                            <input type="hidden" name="pid" id="comment-pid" value="0" />
                            <p class="comment-notes"><span id="email-notes">电子邮件地址不会被公开。</span> 必填项已用<span class="required">*</span>标注</p>
                            <textarea id="comment" class="form-control comment-form-comment textarea" placeholder="来都来了,不随便说两句吗?" name="comment" tabindex="4" cols="45" rows="10"></textarea>
                            <input class="form-control comment-form-qq" placeholder="QQ" id="qqhao" name="qq" maxlength="10" type="text" value="" tabindex="0" size="10" />
                            <input class="form-control comment-form-author" placeholder="昵称" id="author" name="comname" maxlength="20" type="text" value="" tabindex="1" size="22" />
                            <input class="form-control comment-form-email" placeholder="邮箱" id="email" name="commail" maxlength="30" type="email" value="" tabindex="2" size="22" />
                            <input class="form-control comment-form-url" placeholder="网站" id="url" name="comurl" maxlength="30" type="url" value="" tabindex="3" size="22" />
                            <p class="form-submit"><button type="submit" id="submit" class="btn btn-default" tabindex="6">发表评论</button> </p>
                            <div id="error"></div>
                            <div id="ajaxloading"></div>
                            <div id="error1"></div>
                            <div id="ajaxloading1"></div>
                            <p></p>
                            <div class="comment-form-smiley no-js-hide" onclick="embedSmiley()">
                                <div class="opensmile" title="插入表情">
                                    <span class="fa fa-smile-o" style="top:2px"></span>
                                </div>
                                <div class="smiley-box">
                                    <a href="javascript:grin('[F1]')" title="囧"><img src="https://www.wlphp.com/content/templates/FLY/img/face/1.gif" alt="囧" /></a>
                                    <a href="javascript:grin('[F2]')" title="亲"><img src="https://www.wlphp.com/content/templates/FLY/img/face/2.gif" alt="亲" /></a>
                                    <a href="javascript:grin('[F3]')" title="晕"><img src="https://www.wlphp.com/content/templates/FLY/img/face/3.gif" alt="晕" /></a>
                                    <a href="javascript:grin('[F4]')" title="酷"><img src="https://www.wlphp.com/content/templates/FLY/img/face/4.gif" alt="酷" /></a>
                                    <a href="javascript:grin('[F5]')" title="哭"><img src="https://www.wlphp.com/content/templates/FLY/img/face/5.gif" alt="哭" /></a>
                                    <a href="javascript:grin('[F6]')" title="馋"><img src="https://www.wlphp.com/content/templates/FLY/img/face/6.gif" alt="馋" /></a>
                                    <a href="javascript:grin('[F7]')" title="闭嘴"><img src="https://www.wlphp.com/content/templates/FLY/img/face/7.gif" alt="闭嘴" /></a>
                                    <a href="javascript:grin('[F8]')" title="调皮"><img src="https://www.wlphp.com/content/templates/FLY/img/face/8.gif" alt="调皮" /></a>
                                    <a href="javascript:grin('[F9]')" title="馋"><img src="https://www.wlphp.com/content/templates/FLY/img/face/9.gif" alt="馋" /></a>
                                    <a href="javascript:grin('[F10]')" title="奸"><img src="https://www.wlphp.com/content/templates/FLY/img/face/10.gif" alt="奸" /></a>
                                    <a href="javascript:grin('[F11]')" title="怒"><img src="https://www.wlphp.com/content/templates/FLY/img/face/11.gif" alt="怒" /></a>
                                    <a href="javascript:grin('[F12]')" title="笑"><img src="https://www.wlphp.com/content/templates/FLY/img/face/12.gif" alt="笑" /></a>
                                    <a href="javascript:grin('[F13]')" title="羞"><img src="https://www.wlphp.com/content/templates/FLY/img/face/13.gif" alt="羞" /></a>
                                    <a href="javascript:grin('[F14]')" title="汗"><img src="https://www.wlphp.com/content/templates/FLY/img/face/14.gif" alt="汗" /></a>
                                    <a href="javascript:grin('[F15]')" title="色"><img src="https://www.wlphp.com/content/templates/FLY/img/face/15.gif" alt="色" /></a>
                                    <a href="javascript:grin('[F16]')" title="萌"><img src="https://www.wlphp.com/content/templates/FLY/img/face/16.gif" alt="萌" /></a>
                                    <a href="javascript:grin('[F17]')" title="可怜"><img src="https://www.wlphp.com/content/templates/FLY/img/face/17.gif" alt="可怜" /></a>
                                    <a href="javascript:grin('[F18]')" title="快哭了"><img src="https://www.wlphp.com/content/templates/FLY/img/face/18.gif" alt="快哭了" /></a>
                                    <a href="javascript:grin('[F19]')" title="呆"><img src="https://www.wlphp.com/content/templates/FLY/img/face/19.gif" alt="呆" /></a>
                                    <a href="javascript:grin('[F20]')" title="吓"><img src="https://www.wlphp.com/content/templates/FLY/img/face/20.gif" alt="吓" /></a>
                                    <a href="javascript:grin('[F21]')" title="大笑"><img src="https://www.wlphp.com/content/templates/FLY/img/face/21.gif" alt="大笑" /></a>
                                </div>
                            </div>
                            <div title="打卡" onclick="javascript:SIMPALED.Editor.daka();this.style.display='none'" class="daka">
                                <i class="fa fa-pencil"></i>
                            </div>
                            <div title="赞" onclick="javascript:SIMPALED.Editor.zan();this.style.display='none'" class="zan">
                                <i class="fa fa-thumbs-o-up"></i>
                            </div>
                            <div title="踩" onclick="javascript:SIMPALED.Editor.cai();this.style.display='none'" class="cai">
                                <i class="fa fa-thumbs-o-down"></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <nav class="comments-list-nav page-navi">
            </nav>
            <!-- #respond -->
        </div>
    </article>

</template>
<script>
    export default {}
</script>
