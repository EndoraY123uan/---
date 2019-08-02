<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>歌单</title>
    <link rel="stylesheet" type="text/css" href="../css/public.css">
    <link rel="stylesheet" type="text/css" href="../css/detail.css">
    <script src="../lib/jquery-3.3.1/jquery-3.3.1.min.js"></script>
    <link rel="stylesheet" href="../lib/bootstrap-3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="../lib/swiper-4.5.0/swiper.min.css">
    <script src="../lib/swiper-4.5.0/swiper.min.js"></script>
</head>
<body>
<!--网站主页-->
<!--1.顶部导航栏-->
<header class="header">
    <!--logo-->
    <div class="logo">
        <img src="../images/logo.png" alt="">
        <span>音之源音乐</span>
    </div>
    <!--菜单-->
    <div class="menu">
        <ul>
            <li><a href="../index.html">发现音乐</a></li>
            <li><a href="#">我的音乐</a></li>
            <li><a href="#">朋友</a></li>
            <li><a href="#">商城</a></li>
            <li><a href="#">音乐人</a></li>
            <li><a href="#">下载客户端</a></li>
        </ul>
    </div>
    <!--搜索框-->
    <div class="search">
        <img src="../images/search.png" alt="">
        <input type="text" placeholder="search">
    </div>
    <!--登录-->
    <div id="login-btn" class="login">
        <a  href="#">登录/注册</a>
    </div>
    <div class="user-menu">
        <ul>
            <li><a href="http://www.baidu.com">我的主页</a></li>
            <li><a href="">我的消息</a></li>
            <li><a href="">我的等级</a></li>
            <li><a href="">个人设置</a></li>
            <li><a href="">VIP</a></li>
            <li><a href="">退出</a></li>
        </ul>
    </div>
</header>
<section class="content-detail">
    <!--歌单信息-->
    <div class="detail-content">
        <!--歌单详情-->
        <div class="detail-song">
            <!--歌单图片-->
            <div class="song-img">
                <img src="../images/style_3.png" alt="">
            </div>
            <!--歌单名称-->
            <div class="song-name">
                小付今天蹦迪没？
            </div>
            <!--歌单操作按钮-->
            <div class="song-operate">
                <button id ="list-btn" type="button" class="btn btn-primary">播放/暂停</button>
                <button type="button" class="btn btn-light">收藏</button>
                <button type="button" class="btn btn-light">下载</button>
                <button type="button" class="btn btn-light">分享</button>
            </div>
        </div>
    </div>
    <!--歌单列表-->
    <div class="song-list">
        <!--标签-->
        <div class="label">
            <header>
                <img src="../images/listlogo.png" alt="">
                <p>歌单列表</p>
            </header>
        </div>
        <hr>
        <div class="list">
            <table class="tftable" border="1">
                <tr><th style="width: 50px"></th><th style="width:50px"></th><th>歌曲名</th><th>歌手</th><th>专辑</th></tr>
                <tr><td >1</td><td class="first"><button id="btn-1" ><img src="../images/play.png" style="width: 20px;height: 20px" alt=""></button></td><td><audio id="audio-1" src="../media/01.mp3"></audio>This Is the Life</td><td>Angie Miller</td><td>Weathered</td></tr>
                <tr><td >2</td><td class="first"><button id="btn-2" ><img src="../images/play.png" style="width: 20px;height: 20px" alt=""></button></td><td><audio id="audio-2" src="../media/02.mp3"></audio>Freed from Desire</td><td>Resaid</td><td>Acoustic Adventures</td></tr>
                <tr><td >3</td><td class="first"><button id="btn-3" ><img src="../images/play.png" style="width: 20px;height: 20px" alt=""></button></td><td><audio id="audio-3" src="../media/04.mp3"></audio>参商(纯歌版)</td><td>不才</td><td>热门华语250 (古风合集)</td></tr>
                <tr><td >4</td><td class="first"><button id="btn-4" ><img src="../images/play.png" style="width: 20px;height: 20px" alt=""></button></td><td><audio id="audio-4" src="../media/05.mp3"></audio>混沌</td><td>流月</td><td>热门华语250 (古风合集)</td></tr>
                <tr><td >5</td><td class="first"><button id="btn-5" ><img src="../images/play.png" style="width: 20px;height: 20px" alt=""></button></td><td><audio id="audio-5" src="../media/06.mp3"></audio>Weathered</td><td>Angie Miller</td><td>Weathered</td></tr>
            </table>
        </div>
    </div>
    <!--评论专区-->
    <div class="comment">
        <div class="label">
            <header>
                <img src="../images/listlogo.png" alt="">
                <p>评论</p>
            </header>
        </div>
        <hr>
        <!--写评论-->
        <div class="write">
            <!--头像-->
            <div class="img">
                <img src="../images/user.jpg" alt="">
            </div>
            <!--评论框-->
            <div class="input">
                <form action="../logic/comment.php" method="post">
                    <textarea name="discuss-content" rows="4" style="width: 90% ;margin-top: 10px;"></textarea>
                    <input class="btn btn-primary" type="submit" value="确定">
                    <input class="btn btn-dark" type="submit" value="取消">
                </form>
            </div>
        </div>
        <p style="font-size: 18px;font-weight: 600">精彩评论</p>
        <hr>
        <!--评论展示-->
        <div class="show">
            <?php include "../logic/comment_show.php";?>
        </div>

    </div>
</section>
<!--4.脚注区域-->
<div class="footer">
    <p>如果您有什么疑问请联系我们，非常感谢！</p>
    <ul>
        <li><a href="#">关于我们 | </a></li>
        <li><a href="#">了解详情 | </a></li>
        <li><a href="#">联系我们</a></li>
    </ul>
</div>
<!--5.登录框-->
<div class="out-login">
    <header>
        <label>登录</label>
        <button id="login-close" class="btn btn-danger">X</button>
    </header>
    <div class="login-content">
        <input type="text" name="username" placeholder="手机号">
        <hr>
        <input type="text" name="passward" placeholder="密码">
        <hr>
        <div id="msg"></div>
        <button id="login" class="btn btn-danger">Login</button>
    </div>
    <div class="lable">
        如果没有账号？立即<a id="sign" href="#">注册</a>一个
    </div>
</div>
<!--6.注册框-->
<div class="out-sign">
    <header>
        <label>注册</label>
        <button id="sign-close" class="btn btn-danger">X</button>
    </header>
    <div class="sign-content">
        <input type="text" name="username" placeholder="手机号">
        <hr>
        <input type="text" name="passward" placeholder="密码">
        <hr>
        <input type="text" name="repassward" placeholder="再次输入密码">
        <div id="sign-msg"></div>
        <button id="sign-btn" class="btn btn-danger">Sign Up</button>
    </div>
</div>
<script src="../js/public.js"></script>
<script src="../js/play.js"></script>
<script src="../js/login-and-regis.js"></script>

</body>
</html>